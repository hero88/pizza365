import {Col, Row} from 'reactstrap';

function Info() {
    return(
        <>
            { /* Why pizza365 */}
            <Col sm='12' className="text-center p-4 mt-4">
                <h2><b className="p-2 border-bottom text-warning border-warning">Tại sao lại Pizza 365 </b></h2>
            </Col>
            { /* Content tại sao */}
            <Col>
                <Row >
                    <Col sm='3' className="p-4 border border-warning" style={{ backgroundColor:"lightgoldenrodyellow"}}>
                        <h3 className="p-2">Đa dạng</h3>
                        <p className="p-2">Số lượng pizza đa dạng, có đầy đủ các loại pizza hot nhất hiện nay.</p>
                    </Col>
                    <Col sm='3' className="p-4 border border-warning" style={{backgroundColor:"yellow"}}>
                        <h3 className="p-2">Chất lượng</h3>
                        <p className="p-2">Nguyên liệu sạch 100%, rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm.</p>
                    </Col>
                    <Col sm='3' className="p-4 border border-warning" style={{backgroundColor:"lightsalmon"}}>
                        <h3 className="p-2">Hương vị</h3>
                        <p className="p-2">Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ Pizza 365.</p>
                    </Col>
                    <Col sm='3' className="p-4 border border-warning" style={{backgroundColor:"orange"}}>
                        <h3 className="p-2">Dịch vụ</h3>
                        <p className="p-2">Nhân viên thân thiện, nhà hàng hiện đại. Dịch vụ giao hàng nhanh, chất lượng, tân tiến. </p>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default Info;