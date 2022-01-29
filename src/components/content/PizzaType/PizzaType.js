// images
import ImageSeaFood from '../../../assets/images/seafood.jpg';
import ImageHawaii from '../../../assets/images/hawaiian.jpg';
import ImageBacon from '../../../assets/images/bacon.jpg';

import {Col, Row, Card, CardBody, CardFooter, Button} from 'reactstrap';

function PizzaType() {
    return(
        <Col sm='12'>
            <Row id='pizza-type'>
                { /* Title type pizza */}
                <Col sm='12' className='text-center p-4 mt-4 text-warning'>
                    <h2><b className="p-1 border-bottom border-warning">Chọn Loại Pizza</b></h2>
                </Col>
                { /* Type content */}
                <Col sm='12'>
                    <Row>
                        { /* Seafood pizza */}
                        <Col sm='4'>
                            <Card>
                                <img src= {ImageSeaFood} className="card-img-top" alt="pizza-hải-sản"/>
                                <CardBody>
                                    <h4>OCEAN MANIA</h4>
                                    <p>PIZZA HẢI SẢN XỐT MAYONAISE</p>
                                    <p>Xốt cà chua, phô mai Mozzarella, tôm, mực, thanh cua, hành tây.</p>
                                </CardBody>
                                <CardFooter className='text-center'>
                                    <Button className='w-100' color='warning' id='btn-sea-food'>Chọn</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        { /* Hawaii Pizza */}
                        <Col sm='4'>
                            <Card>
                                <img src= {ImageHawaii} className="card-img-top" alt="pizza-hawaii"/>
                                <CardBody>
                                        <h4>HAWAIIAN</h4>
                                        <p>PIZZA DĂM BÔNG DỨA KIỂU HAWAII</p>
                                        <p>Xốt cà chua, phô mai Mozzarella, thịt dăm bông, thơm.</p><br></br>
                                </CardBody>
                                <CardFooter className='text-center'>
                                    <Button className='w-100' color='warning' id='btn-sea-food'>Chọn</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        { /* Pizza Bacon */}
                        <Col sm='4'>
                            <Card>
                                <img src= {ImageBacon} className="card-img-top" alt="pizza-bacon"/>
                                <CardBody>
                                        <h4>CHEESY CHICKEN BACON</h4>
                                        <p>PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI</p>
                                        <p>Xốt phô mai, thịt gà, thịt heo muối, phô mai Mozzarella, cà chua.</p>
                                </CardBody>
                                <CardFooter className='text-center'>
                                    <Button className='w-100' color='warning' id='btn-sea-food'>Chọn</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default PizzaType;