import {Col, Row} from 'reactstrap';
import {useEffect} from 'react';

function DrinkSelect({changeSelectHandler}) {
    const fetchApi = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }
    let drinkValue = "";
    const onChangeSelectHandler = (e) => {
        drinkValue = e.target.value;        
        changeSelectHandler(drinkValue);
    }

    useEffect(() => {
        fetchApi("http://42.115.221.44:8080/devcamp-pizza365/drinks")
            .then((data) => {                
                let vSelectElement = document.getElementById("select-drink");
                vSelectElement.innerHTML = ""; // clear old data
                // create default option
                let vDefaultOption = document.createElement("option");
                vDefaultOption.value = "None";
                vDefaultOption.text = "Hãy chọn đồ uống mà bạn yêu thích";
                vSelectElement.appendChild(vDefaultOption);

                for (let i=0; i < data.length; i++) {
                    let bOptionElement = document.createElement("option");
                    bOptionElement.value = data[i].maNuocUong;
                    bOptionElement.text = data[i].tenNuocUong;
                    vSelectElement.appendChild(bOptionElement);
                }
            })
            .catch((error) => {
                console.log(error);
            })

    },[drinkValue])

    return(
        <Col sm='12'>
            <Row id='drink-menu'>
                <Col sm='12' className='text-center p-4 mt-4 text-warning'>
                    <h2><b className="p-1 border-bottom border-warning">Chọn Đồ Uống</b></h2>
                </Col>
                <Col sm='12'>
                    <select name="" id="select-drink" className="form-control" onChange={onChangeSelectHandler}>
                        <option value="None">Hãy chọn đồ uống mà bạn yêu thích</option>
                    </select>
                </Col>
            </Row>
        </Col>
    )
}

export default DrinkSelect;