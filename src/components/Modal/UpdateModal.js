import { Modal, Box, Grid, TextField, Typography, Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import {useState} from 'react';
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


function UpdateModal({update, setUpdate, order}) {
    const fetchApi = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }

    const [status, setStatus] = useState(order.trangThai);
    const changeSelectStatus = e => setStatus(e.target.value);

    const handleClose = () => setUpdate(false);
    const onBtnUpdateClick = () => {
        let vObjectRequest = {
            trangThai: status
        }
        let body = {
            method: 'PUT',
            body: JSON.stringify(vObjectRequest),               
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }
        fetchApi("http://42.115.221.44:8080/devcamp-pizza365/orders/" + order.id, body)
        .then(()=>{
            toast.success("Cập nhật đơn hàng thành công !");
            handleClose();
        })
        .catch((err)=> toast.error(err))
    }    

    return(
        <>
        <Modal
            open={update}
            onClose={handleClose}
            aria-labelledby="modal-detail-title"
            aria-describedby="modal-detail-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Sửa Order
                </Typography>
                <Grid container spacing={2} mt={3}>
                    <Grid item xs={6}>
                        <label>Kích cỡ combo</label>&nbsp;
                        <select defaultValue={order.kichCo} disabled>
                            <option value="S">Nhỏ</option>
                            <option value="M">Vừa</option>
                            <option value="L">To</option>
                        </select>
                    </Grid>
                    <Grid item xs={6}>
                        <label>Loại Pizza</label>&nbsp;
                        <select defaultValue={order.loaiPizza} disabled>
                            <option value="hawaii">Hawaii</option>
                            <option value="bacon">Thịt hun khói</option>
                            <option value="seafood">Hải sản</option>
                        </select>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Đường kính" value={order.duongKinh}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Sườn nướng(miếng)" value={order.suon}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="salad" value={order.salad}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Số lượng nước uống" value={order.soLuongNuoc}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Đơn giá" value={order.thanhTien}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Mã giảm giá" value={order.idVourcher}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Loại nước uống" defaultValue={order.idLoaiNuocUong}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Họ tên" value={order.hoTen}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Email" value={order.email}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Số điện thoại" value={order.soDienThoai}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Địa chỉ" value={order.diaChi}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField InputProps={{readOnly: true}} fullWidth label="Lời nhắn" value={order.loiNhan}/>
                    </Grid>
                    <Grid item xs={6}>
                        <label>Trạng thái</label>&nbsp;
                        <select onChange={changeSelectStatus} defaultValue={order.trangThai}>
                            <option value="open">Open</option>
                            <option value="confirmed">Đã xác nhận</option>
                            <option value="cancel">Đã hủy</option>                          
                        </select>
                    </Grid>
                </Grid>
                                           
                <Grid mt={5} >
                    <Button variant="contained" color="success" onClick={onBtnUpdateClick}>Cập nhật đơn hàng</Button>
                    <Button variant="contained" color="success" onClick={handleClose} style={{float:"right"}}>Hủy bỏ</Button>
                </Grid>
            </Box>
        </Modal>
        <ToastContainer autoClose={2000}/>
        </>
    )
}

export default UpdateModal;