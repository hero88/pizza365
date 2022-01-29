import {Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faSnapchatSquare, faPinterestSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function FooterComponent() {
    return(
        <Container fluid className='bg-warning p-5'>
            <Row className='text-center'>
                <Col sm='12'>
                    <h4 className="m-2">Footer</h4>
                    <a href="/" className="btn btn-dark m-3"><FontAwesomeIcon icon={faArrowUp}/>To the top</a>
                    <div className="m-2">
                        <FontAwesomeIcon icon={faFacebookSquare} className='m-2 w3-hover-opacity'/>
                        <FontAwesomeIcon icon={faInstagramSquare} className='m-2 w3-hover-opacity'/>
                        <FontAwesomeIcon icon={faSnapchatSquare} className='m-2 w3-hover-opacity'/>
                        <FontAwesomeIcon icon={faPinterestSquare} className='m-2 w3-hover-opacity'/>
                        <FontAwesomeIcon icon={faTwitterSquare} className='m-2 w3-hover-opacity'/>
                        <FontAwesomeIcon icon={faLinkedin} className='m-2 w3-hover-opacity'/>
                        <p>Powered by DEVCAMP</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterComponent;