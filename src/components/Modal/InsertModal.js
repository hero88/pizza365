import { Modal, Box, Grid, TextField, Typography, Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import {useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const gMENU_DETAILS_JSON = `[
    { "size" : "S",
    "detail" : {
        "duongKinh" : "20",
        "suonNuong" : "2",
        "salad": "200",
        "soLuongNuoc": "2",
        "VND": "150000"
    }
    },
    { "size" : "M",
    "detail" : {
        "duongKinh" : "25",
        "suonNuong" : "4",
        "salad": "300",
        "soLuongNuoc": "3",
        "VND": "200000"
    }
    },
    { "size" : "L",
    "detail" : {
        "duongKinh" : "30",
        "suonNuong" : "8",
        "salad": "500",
        "soLuongNuoc": "4",
        "VND": "250000"
    }
    }
]`
var gMenuDetailObj = JSON.parse(gMENU_DETAILS_JSON);

function InsertModal({insert, setInsert}) {
    const [size, setSize] = useState("S");
    const [type, setType] = useState("hawaii");
    const [menuDetail, setMenuDetail] = useState({
        duongKinh: "",
        suonNuong: "",
        salad: "",
        soLuongNuoc: "",
        VND: ""
    });
    const [voucher, setVoucher] = useState("");
    const [drink, setDrink] = useState("");    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState("");    

    const fetchApi = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }

    const handleClose = () => setInsert(false);

    const changeSelectSize = e => setSize(e.target.value);       
    const changeSelectType = e => setType(e.target.value);  
    const changeSelectDrink = e => setDrink(e.target.value);    

    const changeVoucherHandler = e => setVoucher(e.target.value.trim());
    const changeNameHandler = e => setName(e.target.value.trim());
    const changeEmailHandler = e => setEmail(e.target.value.trim());
    const changeAddressHandler = e => setAddress(e.target.value.trim());
    const changeMessageHandler = e => setMessage(e.target.value.trim());
    const changePhoneHandler = e => setPhone(e.target.value.trim());
    

    const onBtnInsertClick = () => { // click nút insert/thêm
        let vObjectRequest = {
            kichCo: size,
            duongKinh: menuDetail.duongKinh,
            suon: menuDetail.suonNuong,
            salad: menuDetail.salad,
            loaiPizza: type,
            idVourcher: voucher,
            idLoaiNuocUong: drink,
            soLuongNuoc: menuDetail.soLuongNuoc,
            hoTen: name,
            thanhTien: menuDetail.VND,
            email: email,
            soDienThoai: phone,
            diaChi: address,
            loiNhan: message
        }
        let body = {
            method: 'POST',
            body: JSON.stringify(vObjectRequest),               
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }                
        // call server to create order
        fetchApi("http://42.115.221.44:8080/devcamp-pizza365/orders", body)
                    .then((data) => {                        
                        toast.success("Tạo đơn hàng thành công! Mã đơn hàng là: " + data.orderId);
                        handleClose();
                    })
                    .catch((error) => {
                        toast.error(error);
                    })

    }

    useEffect(()=>{        
        fetchApi("http://42.115.221.44:8080/devcamp-pizza365/drinks")
            .then((data) => {                
                let vSelectElement = document.getElementById("select-drink");
                vSelectElement.innerHTML = ""; // clear old data
                // create default option
                let vDefaultOption = document.createElement("option");
                vDefaultOption.value = "None";
                vDefaultOption.text = "Chọn đồ uống";
                vSelectElement.appendChild(vDefaultOption);

                for (let i=0; i < data.length; i++) {
                    let bOptionElement = document.createElement("option");
                    bOptionElement.value = data[i].maNuocUong;
                    bOptionElement.text = data[i].tenNuocUong;
                    vSelectElement.appendChild(bOptionElement);
                }
            })
            .catch((error) => {
                toast(error);
            });
        let vMenu = gMenuDetailObj.find(el => el.size === size);        
        setMenuDetail(vMenu.detail);

    },[size])

    

    return(
        <>
        <Modal
            open={insert}
            onClose={handleClose}
            aria-labelledby="modal-detail-title"
            aria-describedby="modal-detail-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Thêm Order
                </Typography>
                <Grid container spacing={2} mt={3}>
                    <Grid item xs={6}>
                        <label>Kích cỡ combo</label>&nbsp;
                        <select onChange={changeSelectSize} defaultValue="S" >
                            <option value="S">Nhỏ</option>
                            <option value="M">Vừa</option>
                            <option value="L">To</option>
                        </select>
                    </Grid>
                    <Grid item xs={6}>
                        <label>Loại Pizza</label>&nbsp;
                        <select onChange={changeSelectType} defaultValue="hawaii">
                            <option value="hawaii">Hawaii</option>
                            <option value="bacon">Thịt hun khói</option>
                            <option value="seafood">Hải sản</option>
                        </select>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Đường kính" value={menuDetail.duongKinh}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Sườn nướng(miếng)" value={menuDetail.suonNuong}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="salad" value={menuDetail.salad}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Số lượng nước uống" value={menuDetail.soLuongNuoc}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Đơn giá" value={menuDetail.VND}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Mã giảm giá" onChange={changeVoucherHandler}/>
                    </Grid>
                    <Grid item xs={6}>
                        <label>Loại Nước Uống</label>&nbsp;
                        <select onChange={changeSelectDrink} id='select-drink'> 
                            <option value="None">Chọn đồ uống</option>                           
                        </select>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Họ tên" onChange={changeNameHandler}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Email" onChange={changeEmailHandler}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Số điện thoại" onChange={changePhoneHandler}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Địa chỉ" onChange={changeAddressHandler}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Lời nhắn" onChange={changeMessageHandler}/>
                    </Grid>                    
                </Grid>
                                           
                <Grid mt={5} >
                    <Button variant="contained" color="success" onClick={onBtnInsertClick}>Thêm đơn hàng</Button>
                    <Button variant="contained" color="success" onClick={handleClose} style={{float:"right"}}>Hủy bỏ</Button>
                </Grid>
            </Box>
        </Modal>
        <ToastContainer autoClose={2000}/>
        </>
    )
}

export default InsertModal;