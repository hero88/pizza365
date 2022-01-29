import {Col } from 'reactstrap';
import { Carousel } from 'react-bootstrap';

// Image import
import Image1 from '../../../assets/images/1.jpg';
import Image2 from '../../../assets/images/2.jpg';
import Image3 from '../../../assets/images/3.jpg';
import Image4 from '../../../assets/images/4.jpg';

function Ladding() {
    return(
        <>
            { /* Title */}
            <Col sm="12" className="text-warning">
                <h1 className="fw-bold">PIZZA 365</h1>
                <h2 className="fst-italic">Truly Italian!</h2>
            </Col>
            { /* Slide carousel */}
            <Col>
                <Carousel>
                    <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image1}
                                alt="First slide"
                            />                            
                    </Carousel.Item>

                    <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image2}
                                alt="Second slide"
                            />                            
                    </Carousel.Item>

                    <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image3}
                                alt="Third slide"
                            />                            
                    </Carousel.Item>

                    <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image4}
                                alt="Fourth slide"
                            />                            
                    </Carousel.Item>
                </Carousel>
            </Col>
        </>
    )
}

export default Ladding;