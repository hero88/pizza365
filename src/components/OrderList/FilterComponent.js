import {Row, Col, Input, Container, Button} from 'reactstrap';
import {useState} from 'react';

function FilterComponent ({sendFilter}) {
    const [status, setStatus] = useState("None");
    const [type, setType] = useState("None");
    
    const handleStatusChange = (e) => {
        setStatus(e.target.value);        
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const onBtnFilterClick = () => { // collect filter data
        let filterObj = {
            trangThai: status,
            loaiPizza: type
        }
        sendFilter(filterObj);
    }    

    return(
    <Container className="p-4 bg-light border mt-5">
        <Row>
            <Col sm="5">
                <Input type='select' onChange={handleStatusChange} defaultValue={status}>
                    <option value="None">Chọn trạng thái</option>
                    <option value="open">Open</option>
                    <option value="confirmed">Đã xác nhận</option>
                    <option value="cancel">Đã hủy</option>
                </Input>
            </Col>
            <Col sm="5">
                <Input type='select' onChange={handleTypeChange} defaultValue={type}>
                    <option value="None">Chọn loại pizza</option>
                    <option value="hawaii">Hawaii</option>
                    <option value="bacon">Thịt hun khói</option>
                    <option value="seafood">Hải sản</option>
                </Input>
            </Col>
            <Col sm="2">
                <Button color='success' onClick={onBtnFilterClick}>Lọc</Button>
            </Col>
        </Row>
    </Container>
    )
}

export default FilterComponent;