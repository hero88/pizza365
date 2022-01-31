import {Col, Row, FormGroup, Label, Input} from 'reactstrap';

function FormComponent({changeName, changePhone, changeEmail, changeAddress, changeVoucher, changeMessage}){
    const onNameChangeHandler = (event) => {
        let inputValue = event.target.value;
        changeName(inputValue);
    }

    const onEmailChangeHandler = (event) => {
        let inputValue = event.target.value;
        changeEmail(inputValue);
    }

    const onPhoneChangeHandler = (event) => {
        let inputValue = event.target.value;
        changePhone(inputValue);
    }

    const onAddressChangeHandler = (event) => {
        let inputValue = event.target.value;
        changeAddress(inputValue);
    }

    const onVoucherChangeHandler = (event) => {
        let inputValue = event.target.value;
        changeVoucher(inputValue);
    }

    const onMessageChangeHandler = (event) => {
        let inputValue = event.target.value;
        changeMessage(inputValue);
    }

    return(
        <Col sm='12'>
            <Row id='send-order'>
                <Col sm='12' className='text-center p-4 mt-4 text-warning'>
                    <h2><b className="p-1 border-bottom border-warning">Gửi đơn hàng</b></h2> 
                </Col>
                <Col sm='12' className='border border-light'>
                    <Row>
                        <Col sm='12'>
                            <FormGroup>
                                <Label>Tên</Label>
                                <Input id='inp-name' type='text' placeholder='Nhập tên' onChange={onNameChangeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input id='inp-email' type='email' placeholder='Nhập email' onChange={onEmailChangeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Số điện thoại</Label>
                                <Input id='inp-phone' type='text' placeholder='Nhập số điện thoại' onChange={onPhoneChangeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Địa chỉ</Label>
                                <Input id='inp-address' type='text' placeholder='Nhập địa chỉ' onChange={onAddressChangeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Mã giảm giá</Label>
                                <Input id='inp-voucher' type='text' placeholder='Nhập mã giảm giá' onChange={onVoucherChangeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Lời nhắn</Label>
                                <Input id='inp-message' type='text' placeholder='Nhập lời nhắn' onChange={onMessageChangeHandler}/>
                            </FormGroup>                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default FormComponent;