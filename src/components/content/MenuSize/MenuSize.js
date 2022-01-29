import {Col, Row, Card, CardHeader, CardBody, CardFooter, ListGroup, ListGroupItem, Button} from 'reactstrap';

function MenuSize() {
    return(
        <Col sm='12'>
            <Row id='combo'>
                { /* Title menu */}
                <Col sm='12' className='text-center p-4 mt-4 text-warning'>
                    <h2><b className="p-1 border-bottom border-warning">Chọn size Pizza</b></h2>
                    <p><span className="p-2">Hãy chọn cỡ pizza phù hợp với bạn!</span></p>                            
                </Col>
                { /* Menu Content */}
                <Col sm='12'>
                    <Row>
                        { /* Size S */}
                        <Col sm='4'>
                            <Card>
                                <CardHeader className='bg-warning text-center'>
                                    S(small)
                                </CardHeader> 
                                <CardBody className='text-center'>
                                    <ListGroup flush>
                                        <ListGroupItem><b>20cm</b> Đường kính</ListGroupItem>
                                        <ListGroupItem><b>2</b> Sườn nướng</ListGroupItem>
                                        <ListGroupItem><b>200g</b> Salad</ListGroupItem>
                                        <ListGroupItem><b>2</b> Nước ngọt</ListGroupItem>
                                        <ListGroupItem><h1><b>150.000</b></h1> VND</ListGroupItem>
                                    </ListGroup>
                                </CardBody>   
                                <CardFooter className='text-center'>                                   
                                    <Button color='warning' id='btn-small' className='w-100'>Chọn</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        { /* Size M */}
                        <Col sm='4'>
                            <Card>
                                <CardHeader className='bg-warning text-center'>
                                    M(Medium)
                                </CardHeader> 
                                <CardBody className='text-center'>
                                    <ListGroup flush>
                                        <ListGroupItem><b>25cm</b> Đường kính</ListGroupItem>
                                        <ListGroupItem><b>4</b> Sườn nướng</ListGroupItem>
                                        <ListGroupItem><b>300g</b> Salad</ListGroupItem>
                                        <ListGroupItem><b>3</b> Nước ngọt</ListGroupItem>
                                        <ListGroupItem><h1><b>200.000</b></h1> VND</ListGroupItem>
                                    </ListGroup>
                                </CardBody>   
                                <CardFooter className='text-center'>                                   
                                    <Button color='warning' id='btn-medium' className='w-100'>Chọn</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        { /* Size L */}
                        <Col sm='4'>
                            <Card>
                                <CardHeader className='bg-warning text-center'>
                                    L(Large)
                                </CardHeader> 
                                <CardBody className='text-center'>
                                    <ListGroup flush>
                                        <ListGroupItem><b>30cm</b> Đường kính</ListGroupItem>
                                        <ListGroupItem><b>8</b> Sườn nướng</ListGroupItem>
                                        <ListGroupItem><b>500g</b> Salad</ListGroupItem>
                                        <ListGroupItem><b>4</b> Nước ngọt</ListGroupItem>
                                        <ListGroupItem><h1><b>250.000</b></h1> VND</ListGroupItem>
                                    </ListGroup>
                                </CardBody>   
                                <CardFooter className='text-center'>                                   
                                    <Button color='warning' id='btn-large' className='w-100'>Chọn</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default MenuSize;