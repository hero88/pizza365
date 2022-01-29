import {Col, Row} from 'reactstrap';

function DrinkSelect() {
    return(
        <Col sm='12'>
            <Row id='drink-menu'>
                <Col sm='12' className='text-center p-4 mt-4 text-warning'>
                    <h2><b className="p-1 border-bottom border-warning">Chọn Đồ Uống</b></h2>
                </Col>
                <Col sm='12'>
                    <select name="" id="select-drink" className="form-control">
                        <option value="None">Hãy chọn đồ uống mà bạn yêu thích</option>
                    </select>
                </Col>
            </Row>
        </Col>
    )
}

export default DrinkSelect;