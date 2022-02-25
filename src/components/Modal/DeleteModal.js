import { Modal, Box, Grid, Typography, Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function DeleteModal({deleteModal, setDelete, order}){
    const fetchApi = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }
    const handleClose = () => setDelete(false);
    const onBtnConfirmClick = () => {
        let body = { method: 'DELETE'};
        let vId = order.orderId;
        fetchApi("http://42.115.221.44:8080/devcamp-pizza365/orders/" + vId, body)
        .then(()=>{            
            toast.success("Bạn đã xóa thành công order mang id= " + vId);
            handleClose();
        })
        .catch(() => {            
            toast.error("Lỗi rồi!");
        })
    }
    return(
        <div>
        <Modal      
            open={deleteModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Confirm Xóa Order {order.orderId}
                </Typography>
                <Typography>Bạn có chắc chắn muốn xóa order này? </Typography>
                <Grid mt={5}>
                    <Button variant="contained" color="error" onClick={onBtnConfirmClick}>Xác nhận</Button>
                    <Button variant="contained" color="success" onClick={handleClose} style={{float:"right"}}>Hủy bỏ</Button>
                </Grid>
            </Box>                
        </Modal>
        <ToastContainer autoClose={2000}/>
        </div>
    )
}

export default DeleteModal;