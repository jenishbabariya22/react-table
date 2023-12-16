import React, { useState } from 'react'


function Record({ allrecorddata, btnclick, setAllRecord }) {

  const category = ["mobile", "electronics", "cloth", "food", "all"];

  return (
    <center>
      <h1>All Record</h1>
      {
        category.map((cat, i) => {
          return (
            <button type="button" className="btn btn-primary" style={{ margin: "20px" }} onClick={() => btnclick(cat)} key={i}>{cat}</button>
          )
        })
      }
      <br></br><br></br>
      <table className='table' >
        <thead >
          <tr key={1}  >
            <th>Id</th>
            <th>Name</th>
            <th style={{ paddingLeft: "70px" }}>Images</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            allrecorddata.map((item) => {
              return (
                <tr key={item.id} style={{ fontWeight: "500", fontSize: "23px" }} >
                  <td style={{ background: item.color, color: item.text }} >{item.id}</td>
                  <td style={{ background: item.color, color: item.text }}>{item.name}</td>
                  <td style={{ background: item.color, color: item.text }} ><img src={item.img} style={{ objectFit: "contain", height: "100px", width: "200px" }} /></td>
                  <td style={{ background: item.color, color: item.text }}>{item.price}</td>
                  <td style={{ background: item.color, color: item.text }}>{item.qty}</td>
                  <td style={{ background: item.color, color: item.text }}>{item.category}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table >
    </center >
  )
}
export default Record
