import {Container, Col, FormGroup, Button, Table} from 'reactstrap';

import {Pagination} from '@mui/material/';
import DeleteModal from './../Modal/DeleteModal';
import InsertModal from "./../Modal/InsertModal";
import UpdateModal from "./../Modal/UpdateModal";

import {useState, useEffect} from 'react';

function OrderTable({data}) {   

    const [page, setPage] = useState(1);
    const [noPage, setNoPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [insertModal, setInsertModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [orders, setOrders] = useState(data);
    const [currentOrder, setCurrentOrder] = useState({});

    const onBtnAddClick = () => {
        setInsertModal(true);
    }

    const onBtnEditClick = (data) => {        
        setCurrentOrder(data);
        setUpdateModal(true);            
    }

    const onBtnDeleteClick = (data) => {        
        setCurrentOrder(data);
        setDeleteModal(true);
    }

    const changeSelectHandler = (e) => {
        setLimit(e.target.value);
    }

    const changeHandler = (event, value) => {
        setPage(value);
    }   

    useEffect(()=> {
        setOrders(data.slice((page - 1) * limit, page * limit));
        setNoPage(Math.ceil(data.length / limit));       
    }, [page, limit, data]);

    return( 
        <>        
        <Container fluid>
            <FormGroup row>
                <Col sm='12' className='text-center'>
                    <h2>DANH SÁCH ĐƠN HÀNG</h2>
                </Col>
                <Col sm='12' className='mb-3'>
                    <Button color='success' onClick={onBtnAddClick}>Thêm đơn hàng</Button>
                </Col>
                <Col sm='12' className='mb-3'>
                    <label>Chọn số lượng order hiển thị &nbsp;</label>
                    <select onChange={changeSelectHandler} defaultValue={10}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </Col>
                <Col sm='12'>
                    <Table >
                        <thead>
                            <tr>
                                <th scope="col">Kích cỡ combo</th>
                                <th scope="col">Loại pizza</th>
                                <th scope="col">Nước uống</th>
                                <th scope="col">Thành tiền</th>
                                <th scope="col">Họ và tên</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((element, index) => 
                                    <tr key={index}>
                                        <td>{element.kichCo}</td>
                                        <td>{element.loaiPizza}</td>
                                        <td>{element.idLoaiNuocUong}</td>
                                        <td>{element.thanhTien}</td>
                                        <td>{element.hoTen}</td>
                                        <td>{element.soDienThoai}</td>
                                        <td>{element.trangThai}</td>
                                        <td>
                                            <Button color='primary' data-toggle='tooltip' title='Edit' onClick={()=>onBtnEditClick(element)}>Sửa</Button>&nbsp;
                                            <Button color='danger' data-toggle='tooltip' title='Delete' onClick={()=>onBtnDeleteClick(element)}>Xóa</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col sm='12'>
                    <Pagination onChange={changeHandler} count={noPage} defaultPage={1}/>
                </Col>
            </FormGroup>            
            <UpdateModal update={updateModal} setUpdate={setUpdateModal} order={currentOrder}/>                       
            <InsertModal insert={insertModal} setInsert={setInsertModal}/>
            <DeleteModal deleteModal={deleteModal} setDelete={setDeleteModal} order={currentOrder}/>            
        </Container>
        </>
    )
}

export default OrderTable;