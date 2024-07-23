import React,{ useState } from "react"

function S1(){
    const[name,setName]=useState("");
    const[tnc,settnc]=useState(false);
    const[interest,setinterest]=useState("");

    function Naming(e)
    {
        // storing enter named 
        setName(e.target.value);
    }
    function Tncing(e)
    {
        //CHECKED is used to check if box is ticked or not
        settnc(e.target.checked);
    }
    function Interestval(e)
    {
        //storing which option is picked
        setinterest(e.target.value);
    }

    //making this fun so that preventing page reload when we click submit
    function getFormData(e){
        e.preventDefault()
    }


    return(
        <div>
            <h1>handle form in react</h1>
            <form onSubmit={getFormData}>
            <input type="text" placeholder="enter name" onChange={Naming} />
            <select onChange={Interestval}>
                <option>select option</option>
                <option>MARVEL</option>
                <option>DC</option>
            </select> <br></br>
            <input type="checkbox" onChange={Tncing}/><span>accept terms & condition</span>
            <br></br>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}

//use this for verifiy user login or not  conditional rendering
function Verifi()
{
    const[loggedin,setLogged] = useState(3)
    //1,2,3

    return(
        <div>
            {loggedin==1?<h1>welcome user 1</h1>:loggedin==2?<h1>welcome user 2</h1>:<h1>log in please</h1>}
        </div>
    )
}


//checking valid form input from user
function Bvalidation(){

    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[userError,setUserError]=useState("");
    const[passError,setPassError]=useState("");

    function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good")
        }
        e.preventDefault()
    }

    function userHandler(e)
    {
        let item = e.target.value;
        if(item.length<3)
        {
            setUserError(true)
        }
        else{
            setUserError(false)
        }
        setUser(item)
    }

    function passwordHandler(e)
    {
        let item = e.target.value;
        if(item.length<3)
        {
            setPassError(true)
        }
        else{
            setPassError(false)
        }
        setPassword(item)
    }

    return(
        <div>
            <h1>login</h1>
            <form onSubmit={loginHandle}>
                {/* we can put default parmament value for an input by value="" */}
            <input type="text" placeholder="enter user id" onChange={userHandler}></input>{userError?<span>usernot valid</span>:""}
            <br></br>
            <input type="text" placeholder="enter user password" onChange={passwordHandler}></input>{
                passError?<span>password not valid</span>:""
            }
            <br></br>
            <button type="submit">login</button>
            </form>
        </div>
    )


}

export {S1,Verifi,Bvalidation};