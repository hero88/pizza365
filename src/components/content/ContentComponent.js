import {Container, Row, Col} from 'reactstrap';
import DrinkSelect from './DrinkSelect/DrinkSelect';
import FormComponent from './Form/FormComponent';
import Info from './Info/Info';
import Ladding from './Ladding/Ladding';
import MenuSize from './MenuSize/MenuSize';
import PizzaType from './PizzaType/PizzaType';


function ContentComponent() {
    return(
    <Container style={ {padding: "120px 0 50px 0"} }>
        <Row>
            <Col sm="12">
                <Row>
                    { /* Ladding */}
                    <Ladding/>
                    { /* Info */}
                    <Info/>
                    { /* Menu Size */}
                    <MenuSize/>
                    { /* Pizza Type */}
                    <PizzaType/>
                    { /* Select Drink */}
                    <DrinkSelect/>
                    { /* Submit Form */}
                    <FormComponent/>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}

export default ContentComponent;