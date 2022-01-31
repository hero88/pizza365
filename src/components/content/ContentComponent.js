import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import DrinkSelect from './DrinkSelect/DrinkSelect';
import FormComponent from './Form/FormComponent';
import Info from './Info/Info';
import Ladding from './Ladding/Ladding';
import MenuSize from './MenuSize/MenuSize';
import PizzaType from './PizzaType/PizzaType';

import {useState, useEffect} from 'react';

const fetchApi = async (paramUrl, paramOptions = {}) => {
    const response = await fetch(paramUrl, paramOptions);
    const responseData = await response.json();
    return responseData;
}

function validateOrder(paramMenuName, paramOrder, paramPizzaType, paramDrink) {
    // check if menu and pizza-type is selected
    if (!paramMenuName || !paramPizzaType) {
        alert("Bạn cần phải chọn menu và loại pizza !");
        return false;
    }

    // check drink
    if (paramDrink === "None") {
        alert("Bạn phải chọn loại nước uống !");
        return false;
    }

    // check fullName
    var vFullName = paramOrder.fullName;
    if (!vFullName) {    
      alert("Chưa nhập họ tên !");
      return false;
    }

    // check email
    var vEmail = paramOrder.email;
    var vCharsInEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (vCharsInEmail.test(vEmail) === false){
        alert("Email nhập sai !");
        return false;
    }   
    
    // kiểm tra sdt phải có 9 hoặc 10 chữ số
    if (isNaN(paramOrder.phone) || paramOrder.phone.length < 9 || paramOrder.phone.length > 10) {
      alert("Số điện thoại nhập sai ! Số điện thoại có 9-10 chữ số !");
      return false;
    }
    
    // kiểm tra địa chỉ
    if (!paramOrder.address) {    
      alert("Chưa nhập địa chỉ !");
      return false;
    }

    // nếu không nhập voucherID thì ghi none
    if (!paramOrder.voucherID) {
        paramOrder.voucherID = "none";
        paramOrder.discountPercent = 0;
    }
    else {
        // find voucher detail information    
        let vBaseUrl = "http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/";
        fetchApi(vBaseUrl + paramOrder.voucherID)
            .then((data) => {
                paramOrder.discountPercent = data.phanTramGiamGia;                
            })
            .catch((error) => {
                console.log(error);
                alert("Mã giảm giá sai rồi !");                
            }) 
        if (paramOrder.discountPercent === 0) return false;
    }

    // done checking
    return true;
}

// function to calculate total price
// input: paramDiscount - discount percentage
// output: total price
function totalPrice(paramPrice, paramDiscount){
    return paramPrice * (100 - paramDiscount) / 100 ;
}

function ContentComponent() {    
    const [selectedMenu, setSelectedMenu] = useState({});   
    const [selectedType, setSelectedType] = useState(""); 
    const [selectedDrink, setSelectedDrink] = useState("");
    
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [voucher, setVoucher] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [detail, setDetail] = useState("");

    const [modalDisplay, setModalDisplay] = useState(false);
    const toggleModal = () => {
        setModalDisplay(modalDisplay => !modalDisplay);
    }
    
    const changeMenu = (paramObj) => {                
        setSelectedMenu(paramObj);
        console.log(selectedMenu);
    }

    const changeType = (paramType) => {
        setSelectedType(paramType);
    }
    
    const changeDrink = (paramDrink) => {
        setSelectedDrink(paramDrink);
    }

    const onBtnSendOrder = (e) => {  
        let customerObj = {
            fullName: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            address: address.trim(),
            message: message.trim(),
            voucherID: voucher.trim(),
            discountPercent: 0
        }
        let isValidated = validateOrder(selectedMenu.menuName, customerObj, selectedType, selectedDrink);
        if (isValidated){
            console.log("Done Order Validation!");
            console.log(customerObj);                             
            let vTextAreaDetail = "Xác nhận: " + customerObj.fullName + ", " + customerObj.phone + ", " + customerObj.address
                        + "\nMenu: " + selectedMenu.menuName + ", sườn nướng: " + selectedMenu.suonNuong + ", loại nước: " + selectedDrink 
                        + ", số lượng nước: " + selectedMenu.drink
                        + ", " + selectedMenu.saladGr + "g salad, "
                        + "\nLoại pizza: " + selectedType + ", giá: " + selectedMenu.priceVND + "vnd, Mã giảm giá: " + customerObj.voucherID
                        + "\nPhải thanh toán: " + totalPrice(selectedMenu.priceVND, customerObj.discountPercent) + "vnd (giảm giá " + customerObj.discountPercent + "%)";         
            setDetail(vTextAreaDetail);
            setModalDisplay(true);  
        }        
    }

    const onBtnCreateOrder = () => {        
        // get discount percent from server
        fetchApi("http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/" + voucher)
            .then((data) => {                
                let discount = data.phanTramGiamGia;
                let vObjectRequest = {
                    kichCo: selectedMenu.menuName,
                    duongKinh: selectedMenu.duongKinhCM,
                    suon: selectedMenu.suonNuong,
                    salad: selectedMenu.saladGr,
                    loaiPizza: selectedType,
                    idVourcher: voucher,
                    idLoaiNuocUong: selectedDrink,
                    soLuongNuoc: selectedMenu.drink,
                    hoTen: name,
                    thanhTien: totalPrice(selectedMenu.priceVND, discount),
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
                        console.log(data);
                        alert("Cám ơn bạn đã đặt hàng tại Pizza 365. Mã đơn hàng của bạn là: " + data.orderId);
                        setModalDisplay(false);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
        })        

    }

    useEffect(() => {
        console.log("selected Menu= " + selectedMenu.menuName);
        console.log("selected Type= " + selectedType);
        console.log("selected Drink= " + selectedDrink);                
    }, [selectedMenu, selectedDrink, selectedType]);    
    
    return(
    <>
        <Container style={ {padding: "120px 0 50px 0"} }>
        <Row>
            <Col sm="12">
                <Row>
                    { /* Ladding */}
                    <Ladding/>
                    { /* Info */}
                    <Info/>
                    { /* Menu Size */}
                    <MenuSize  changeMenuHandler={changeMenu}/>
                    { /* Pizza Type */}
                    <PizzaType changeTypeHandler={changeType}/>
                    { /* Select Drink */}
                    <DrinkSelect changeSelectHandler={changeDrink}/>
                    { /* Submit Form */}
                    <FormComponent 
                        changeName={setName}
                        changeAddress={setAddress}
                        changeEmail={setEmail}
                        changeVoucher={setVoucher}
                        changePhone={setPhone}
                        changeMessage={setMessage}
                    /> 
                    <Col sm='12'>
                        <Button id='btn-send-order' color='warning' className='w-100' onClick={onBtnSendOrder}>Gửi đơn</Button>
                    </Col>                    
                </Row>
            </Col>
        </Row>
        </Container>
        { /* Modal Place */}
        <div>
            { /* Order Modal */}
            <Modal id='order-modal' toggle={toggleModal} isOpen={modalDisplay}>
                <ModalHeader toggle={toggleModal}>
                    Thông tin đơn hàng
                </ModalHeader>
                <ModalBody className='p-4'>
                    <Form>
                        <FormGroup>
                            <Label>Họ và tên</Label>
                            <Input id='modal-inp-name' value={name} disabled/>
                        </FormGroup>                        
                        <FormGroup>
                            <Label>Số điện thoại</Label>
                            <Input id='modal-inp-phone' value={phone} disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Địa chỉ</Label>
                            <Input id='modal-inp-address' value={address} disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Lời nhắn</Label>
                            <Input id='modal-inp-message' value={message} disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Mã giảm giá</Label>
                            <Input id='modal-inp-voucher' value={voucher} disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Thông tin chi tiết</Label>
                            <textarea id="modal-detail-info" rows="5" className="form-control" value={detail} disabled></textarea>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Quay lại</Button>
                    <Button color="primary" id='btn-create-order' onClick={onBtnCreateOrder}>Tạo đơn</Button>
                </ModalFooter>
            </Modal>
        </div>
    </>
    
    )
}

export default ContentComponent;