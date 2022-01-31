import {Col, Row, Card, CardHeader, CardBody, CardFooter, ListGroup, ListGroupItem, Button} from 'reactstrap';

var gSelectedMenu = {
    menuName: "",    // S(small), M(medium), L(large)
    duongKinhCM: 0,
    suonNuong: 0,
    saladGr: 0,
    drink: 0,
    priceVND: 0
}
// save menu detail in JSON format
const gMENU_DETAILS_JSON = `[
    { "size" : "S(small)",
      "detail" : {
          "duongKinh" : "20",
          "suonNuong" : "2",
          "salad": "200",
          "soLuongNuoc": "2",
          "VND": "150000"
      }
    },
    { "size" : "M(medium)",
      "detail" : {
        "duongKinh" : "25",
        "suonNuong" : "4",
        "salad": "300",
        "soLuongNuoc": "3",
        "VND": "200000"
      }
    },
    { "size" : "L(large)",
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

// function to get menu detail
// input: paramMenuSize - size of selected menu
// output: save all detail of selected menu
function getMenuDetail(paramMenuSize) {
    var vMenuFound = false;
    var vIterator = 0;
    gSelectedMenu.menuName = paramMenuSize;
    while (!vMenuFound && vIterator < gMenuDetailObj.length) {
      if (paramMenuSize === gMenuDetailObj[vIterator].size) {
        vMenuFound = true;
        var vMenuDetail = gMenuDetailObj[vIterator].detail;
        gSelectedMenu.duongKinhCM = vMenuDetail.duongKinh;
        gSelectedMenu.suonNuong = vMenuDetail.suonNuong;
        gSelectedMenu.saladGr = vMenuDetail.salad;
        gSelectedMenu.drink = vMenuDetail.soLuongNuoc;
        gSelectedMenu.priceVND = vMenuDetail.VND;
      }
      else vIterator++;
    }
}

function MenuSize({changeMenuHandler}) {
    const onBtnSmallMenuClick = () => {
        // change button color
        document.getElementById("btn-small").className = 'btn btn-success w-100';
        document.getElementById("btn-medium").className = 'btn btn-warning w-100';
        document.getElementById("btn-large").className = 'btn btn-warning w-100';

        let selectedSize = "S(small)";
        getMenuDetail(selectedSize);
        //console.log(gSelectedMenu);
        changeMenuHandler(gSelectedMenu);
    }

    const onBtnMediumMenuClick = () => {
        // change button color
        document.getElementById("btn-small").className = 'btn btn-warning w-100';
        document.getElementById("btn-medium").className = 'btn btn-success w-100';
        document.getElementById("btn-large").className = 'btn btn-warning w-100';

        let selectedSize = "M(medium)";
        getMenuDetail(selectedSize);
        //console.log(gSelectedMenu);        
        changeMenuHandler(gSelectedMenu);
    }

    const onBtnLargeMenuClick = () => {
        // change button color
        document.getElementById("btn-small").className = 'btn btn-warning w-100';
        document.getElementById("btn-medium").className = 'btn btn-warning w-100';
        document.getElementById("btn-large").className = 'btn btn-success w-100';

        let selectedSize = "L(large)";
        getMenuDetail(selectedSize);
        //console.log(gSelectedMenu);
        changeMenuHandler(gSelectedMenu);
    }

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
                                    <Button color='warning' id='btn-small' className='w-100' onClick={onBtnSmallMenuClick}>Chọn</Button>
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
                                    <Button color='warning' id='btn-medium' className='w-100' onClick={onBtnMediumMenuClick}>Chọn</Button>
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
                                    <Button color='warning' id='btn-large' className='w-100' onClick={onBtnLargeMenuClick}>Chọn</Button>
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