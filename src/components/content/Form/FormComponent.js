import {Col, Row, FormGroup, Label, Button, Input} from 'reactstrap';

function FormComponent(){
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
                                <Input id='inp-name' type='text' placeholder='Nhập tên'/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input id='inp-email' type='email' placeholder='Nhập email'/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Số điện thoại</Label>
                                <Input id='inp-phone' type='text' placeholder='Nhập số điện thoại'/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Địa chỉ</Label>
                                <Input id='inp-address' type='text' placeholder='Nhập địa chỉ'/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Mã giảm giá</Label>
                                <Input id='inp-voucher' type='text' placeholder='Nhập mã giảm giá'/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Lời nhắn</Label>
                                <Input id='inp-message' type='text' placeholder='Nhập lời nhắn'/>
                            </FormGroup>
                            <Button id='btn-send-order' color='warning' className='w-100'>Gửi đơn</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default FormComponent;