import './App.css';
import { React,useEffect, useState } from 'react';
//import axios from "axios"
import ptdCategoryList from '.'
import axios from './api/PtdApi';

function PtdApp() {
  // lay du lieu tu api
  const[ptdCategories,setPtdCategories]=useState([]);

  const getCategories = async ()=>{
try{
    const ptdCateResponse = await axios.get("https://666c5ae149dbc5d7145dbd32.mockapi.io/PtdCategory")
    setPtdCategories(ptdCateResponse.data);
  } catch(error){
    console.log ("loi:",error);
  }
}
  useEffect (()=>{
    getCategories();
    console.log("ptdCategories:",ptdCategories);
  },[])
  const[ptdCategoryIsForm,setptdCategoryIsForm] = useState(false);
  const ptdHandleAddNew = (param)=>{
    setptdCategoryIsForm(param);
  }
  const ptdHandleCategoryCloseForm=(param)=>{
    setptdCategoryIsForm(param);

  }
  const ptdHandleCategorySubmit =(param)=>{
    let id = ptdCategories[ptdCategories.length-1].PtdId;
    console.log("Ma:",id);
    param.PtdId = id+1;
    ptdCategories.push(param);
    setPtdCategories((prev)=>{
      return [ ...prev];
    })
    setptdCategoryIsForm(false);
  }
  return (
    <div className="container border my-3">
    <h1> Pham Thanh Dat - Call API</h1>
    
<ptdCategoryList renderPtdCategories = {ptdCategories}/>
    onAddNew={ptdHandleAddNew}
<hr/>
{
  ptdCategoryIsForm===true?<ptdCategoryForm onCloseForm={ptdHandleCategoryCloseForm}
  onCategorySubmit={ptdHandleCategorySubmit}/>:""
}
<ptdCategoryForm/>
    </div>
  );
}
export default PtdApp;