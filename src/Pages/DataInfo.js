import React from 'react';
import "../styles/DataInfo.css";

function DataInfo() {

  const data = localStorage.getItem('data-info');
  const Data = JSON.parse(data);
  
  return (
    <div className='table-data'>
      <h1>All Feedback</h1>
      {
        Data.length >= 0 &&
         <div className='table-box'>
          <table className='table'>
            <tr>
              <th>Form Name</th>
              <th>Text field</th>
              <th>Phone fiels</th>
              <th>Email field</th>
              <th>Radio Button</th>
              <th>Name</th>
            </tr>
            <tbody>
              {
                Data.map((info, id) => {
                  return (
                    <tr key={id} className='tr'>
                      <td>Aromatic bar</td>
                      <td>{info.Text}</td>
                      <td>{info.Phone}</td>
                      <td>{info.Email}</td>
                      <td>{info.selectOption}</td>
                      <td>{info.Name}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div> 
      }
    </div>
  )
}

export default DataInfo;
