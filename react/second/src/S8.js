import React from "react";

//reuse component with loop
function Reuse(props) {

    return (
        <div>
            {/* we are getting data of list with the passed props from app.js */}
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <span>{props.data.contact}</span>
        </div>
    )
}

//fragment 

//it is use to remove extra div as we cant write more than one elment inside return without a wrapping element like div

//for example if we want to pass a data for <td> inside a table and from the source the data is inside a div then that div will also be imported but div is not supported inside a table
function Impo() {
    return (
        //////this will give error
        // <div>
        //     <td>aditya</td>
        //     <td>ayush</td>
        //     <td>ryben</td>
        // </div>

        //ways of writing fragment
        //1.
        <>
            <td>aditya</td>
            <td>ayush</td>
            <td>ryben</td>
        </>
        // 2.
        // < React.Fragment >
        //     <td>aditya</td>
        //     <td>ayush</td>
        //     <td>ryben</td>
        // </React.Fragment >
    )
}

function Frag() {
    return (
        <div>
            <h1>react fragment</h1>
            <table>
                <tbody>
                    <tr>
                        <Impo />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export { Reuse, Frag };