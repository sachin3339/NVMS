import React  from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'

const ViewDocument = () => {
    const accesToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlbmFrQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYmVuMjMiLCJyb2xlIjoiQWRtaW4iLCJfaWQiOiI2MjNhZTA0ZmNjNWEwNmViMTk3NTM4ZWQiLCJpYXQiOjE2NDg2NDc4Mjl9.hp8aUoObvN9wp8Cql74xyxzy0Lo21gg57jbeejScovY'
    const [rows, setDataRow] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/superadmin/showvendorsdocuments', {
          headers: {
            "Content-Type": "text/plain",
            "Authorization": `bearer ${accesToken}`
          }
        })
          .then(res => {
    
            setDataRow(res.data.result);
            // setArrayDocumentName(res.data.arrayDocuments);
            console.log(res.data.result);
          })
          .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))
    
      }, [])

     if(!Array.isArray(rows)){
         rows =[rows]
         console.log(rows)
     }
  return (
      <>
    <table className="table  table-striped table-hover">
    <thead>
      <tr>
        
        <th scope="col">Documments</th>
        <th scope="col" >View</th>
     
        
      </tr>
    </thead>
    <tbody>
     
          {rows.map((item, index)=>{
            return (
                <>
              <tr>
              <td key={index}>
              AUDIT SHEET
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              COI
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              DSC
            </td> 
            <td>
              <button className='viewButton'>View</button>
              
            </td>
               </tr>
               <tr>
              <td key={index}>
              ESIC CAL
            </td> 
            <td>
            <p>{item.ESIC_CAL}</p>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              ESIC CAL
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              ESIC CHALLAN
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              ESTABLISHMENT CA
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              FORM 5A
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              GST CERT
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              LWF
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              PF_CAL
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              PF_CHALLAN
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               <tr>
              <td key={index}>
              PT RC
            </td> 
            <td>
              <button className='viewButton'>View</button>
            </td>
               </tr>
               </>  
               )
           })}  
    </tbody>
  
  </table>
  
</>

  )
}

export default ViewDocument