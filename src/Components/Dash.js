import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';



    
  
const Dash= () => {
    
    var[value,setvalue]=useState([])   
    useEffect(()=>{
        
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setvalue(response.data);
        }
    
     
    )},[])
      
  return (
    <div>
     <Table className='Tableclass'>
        <TableHead className='headclass'>  
        <TableRow>
            <TableCell>id </TableCell>
            <TableCell>title</TableCell>
           
        </TableRow>
        </TableHead>
         <TableBody>
             {
        
                value.map((data,index)=>{
            return<TableRow className='bodyclass'>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.title}</TableCell>
                
            </TableRow>
          })
        }</TableBody> 
      </Table>
    
    </div>
  )
}

export default Dash