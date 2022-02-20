import FilterComponent from "./FilterComponent";
import OrderTable from "./OrderTable";

import {useState, useEffect} from 'react';

function OrderList() {
    const fetchApi = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    } 
    
    const [filterObj, setFilterObj] = useState(null);
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
        fetchApi("http://42.115.221.44:8080/devcamp-pizza365/orders/")
          .then((data)=>{
            if (!filterObj) setOrder(data);
            else {
              let vArray = data.filter(function(el){
                if ((filterObj.trangThai !== "None") && (filterObj.loaiPizza !== "None")) // filter both pizza + combo
                        return el.trangThai === filterObj.trangThai && el.loaiPizza === filterObj.loaiPizza;
                    else
                        return el.trangThai === filterObj.trangThai || el.loaiPizza === filterObj.loaiPizza; 
              })
              setOrder(vArray);
            }
          })
          .catch((err) => console.log(err))
        
    }, [filterObj]);
    return (
        <>
            <br/><br/>
            <FilterComponent sendFilter={setFilterObj}/>
            <OrderTable data={order}/>
        </>
    )
}

export default OrderList;