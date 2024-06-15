import React, { useState } from 'react'
import axios from '../api/PtdApi'

export default function ptdCategoryForm({onCloseForm,onCategorySubmit}) {
    const[ptdCategoryName,setptdCategoryName]= useState("")
    const[ptdCategoryStatus,setptdCategoryStatus]= useState("true")
    const ptdHandleClose =()=>{
        onCloseForm(false);
    }
    const ptdHandleSubmit = async (event)=>{
        event.PreventDefault();
        let ptdCategory={
            PtdId:0,
            ptdCategoryName:ptdCategoryName,
            ptdCategoryStatus:ptdCategoryStatus

        }
        console.log("ptdCategory",ptdCategory);
        await axios.post("ptdCategory",ptdCategory);
        onCategorySubmit(ptdCategory);
    }
  return (
    <div>
<form>
<div class="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Category Name</span>
  <input type="text" className="form-control"
  name='ptdCategoryName'
  value={'ptdCategoryName'}
  onChange={(ev)=>setptdCategoryName(ev,targrt,value)}
  placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Category Status</span>
  <select  className='form-control'
  name='ptdCategoryName'
  value={'ptdCategoryStatus'}>
     onChange={(ev)=>setptdCategoryStatus(ev,targrt,value)}
    <option value={true}>Hien thi</option>
    <option value={false}>Tam khoa</option>
 </select>
</div>
<button className='btn btn-primary'onClick={ptdHandleSubmit}>Ghi lai</button>
<button className='btn btn-danger' onClick={ptdHandleClose}>Dong</button>
</form>

    </div>
  )
}
