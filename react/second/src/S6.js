import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";

//use map functionm not for loop
export default function Dif()
{
    const student =["aditya","ayush","ryben"];

    const student2 =[
        {name:"aditya",email:"abc@gmail.com",contact:555},
        {name:"ayush",email:"def@gmail.com",contact:111},
        {name:"ryben",email:"ghi@gmail.com",contact:222},
    ]
    const user =[
        {name:"aditya",email:"abc@gmail.com",contact:111},
        {name:"ayush",email:"def@gmail.com",contact:111},
        {name:"ryben",email:"ghi@gmail.com",contact:222},
    ]
    // //map looping
    // student.map((i)=>{
    //     console.log("my name is:",i)
    // });


    // //for looping
    // for (let i = 0; i < student.length; i++) {
    //      console.log("in for loop: ",student[i])
    // }


    //impo
    //we cant use for loop inside return bec it dont support 
    return(
        <div>
            <h1>handle array with list</h1>
            <Table striped bordered hover size="sm" variant="dark">
                <tbody>

            <tr>
                <td>name</td>
                <td>email</td>
                <td>contact</td>
            </tr>
            {
                student2.map((data,i)=>
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                </tr>)
            
            }  

            {/* to apply filter on data with condition statment */}
            {
                user.map((item,e)=>
                item.contact === 111?
                <tr key={e}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                </tr>:null
                )
            }
            </tbody>
            </Table>
        </div>
    )
}