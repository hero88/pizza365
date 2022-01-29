import { Container, Row, Col } from 'reactstrap';


function HeaderComponent() {
    return(
        <Container fluid>
            <Row>
                <Col sm="12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
                        <ul className="navbar-nav nav-fill w-100">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Trang chủ<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#combo">Combo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pizza-type">Loại Pizza</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#send-order">Gửi đơn hàng</a>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderComponent;