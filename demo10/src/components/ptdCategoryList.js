import React from 'react'

export default function PtdCategoryList({renderPtdCategories}) {
    console.log("renderPtdCategories: ", renderPtdCategories);
    let ptdCategoryElement = renderPtdCategories.map((ptdCategory,index)=>{
        return (
            <tr key={index}>
                <th>{index+1}</th>
                <td>{ptdCategory.PtdId}</td>
                <td>{ptdCategory.PtdCategoryName}</td>
                <td>{ptdCategory.PtdCategoryStatus?"Hien thi":"Tam khoa"}</td>
            </tr>
        )
    })
    const ptdHandleAdd = ()=>{
        onAddNew (true);
    }
  return (
    <div className='container m-2'>
        <h2> DANH SACH LOAI SAN PHAM</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ma loai</th>
                    <th>Ten loai</th>
                    <th>Trang thai</th>
                    <th> Chuc nang</th>
                </tr>
            </thead>
            <tbody>
                {ptdCategoryElement}
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={ptdHandleAdd}>Them moi</button>
    </div>
  )
}
