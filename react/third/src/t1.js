import { Link,useParams,NavLink, useSearchParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import {Navbar } from "react-bootstrap";
import "./App.css"
import { useEffect, useState } from "react";


function Home(){
    const navigate = useNavigate();
    const navtopage = (url)=>{
        navigate(url)
        //we  can also add condition statement here just dont pass url in navtopage and write statement 
        // if(x){
        //     navigate('/about')
        // }else{
        //     navigate('/user')
        // }
    }
    return(
        <div>
        <h1>home page</h1>
        {/* making a navigate button */}
        <button onClick={()=>navtopage('/about')}>click to about</button>
        <button onClick={()=>navtopage('/user')}>click to user</button>
        </div>
    )
}

function About(){
    return(
        <h1>about page</h1>
    )
}

function Navba(){
    return(
        <div>
            {/* here to will redirect us to that path  */}
            {/* here we are only putting links not defining the path value of url or the content it is done in app.js route*/}
           <ul className="nav">
            {/* WE DONT give class name to link so use navlink  */}
            <li><NavLink className="nav-bar" style={{fontSize:'xx-large'}} to="/">Home</NavLink></li>
            {/* to make active link 2 methods one is in css file */}
            <li><NavLink className="nav-bar" style={({isActive})=>{return{color: isActive? 'skyblue' : ''}}} to="/about">About</NavLink></li>
            <li><NavLink className="nav-bar" style={({isActive})=>{return{color: isActive? 'skyblue' : ''}}} to="/user">User</NavLink></li>
            {/* sending somedata or function or expression, here we are passing object with state and we can check that with uselocation hook*/}
            <li><NavLink className="nav-bar" style={({isActive})=>{return{color: isActive? 'skyblue' : ''}}} to="/contact" state={{name:'aditya'}}>contact</NavLink></li>
            <li><NavLink className="nav-bar" style={({isActive})=>{return{color: isActive? 'skyblue' : ''}}} to="/login" >Login</NavLink></li>
            <li><NavLink className="nav-bar" style={({isActive})=>{return{color: isActive? 'skyblue' : ''}}} to="/profile" >profile</NavLink></li>
           </ul>
           
            
        </div>
    )
}

function Page404(){
    return(
        <div>
            <h1>page not found</h1>
            <Link to="/">go to home page</Link>
        </div>
    )
}

function User(){
    return(
        <div>
            <Filter />
            <Link to="/userin/anil">anil</Link>
            <br/>
            <Link to="/userin/peter">peter</Link>
        </div>
    )
}

function Userin(){
    const para = useParams();
    //here name is parameter taken from url defined in app.js route line and in about user() we are declaring it with a value /anil
    const {name} = para;
    return(
        <div>
            <h1>this is {name} page</h1>
        </div>
    )
}

//filter search

function Filter(){
    const[searchparams,setsearchparams]=useSearchParams();
    const name = searchparams.get('name');
    const age = searchparams.get('age');
   

    return(
        <div>
            <h1>filter</h1>
            <h3>name is : {name}</h3>
            <h3>age is : {age}</h3>

            
            
           
            <input id="h" type="number" onClick={(e)=>setsearchparams({age:e.target.value,name:'anil'})} placeholder="enter age for anil"/>
            <br></br>
       
            <input id="h" type="number" onClick={(e)=>setsearchparams({age:e.target.value,name:'peter'})} placeholder="enter age for peter"/>
            <br></br>
            
            <button>save</button>
        </div>
    )
}

//nested routing 

function Contact(){
    const loaction=useLocation();
    console.log(loaction)
    return(
        <div>
            <h1>this is contact page</h1>
            <p1>below is our dedicate page for the services</p1>
            <br></br>
            <Link to="company">company</Link>
            <br></br>
            <Link to="channel">channel</Link>
            <br></br>
            <Link to="other">other</Link>
            <Outlet/>
        </div>
    )
}

function Company(){
    return(
        <div>
            <h1>this is company contact page</h1>
        </div>
    )
}
function Channel(){
    return(
        <div>
            <h1>this is channel contact page</h1>
        </div>
    )
}
function Other(){
    return(
        <div>
            <h1>this is other contact page</h1>
        </div>
    )
}



//protected routing ex- if user not login then it cant access some routes and get redirected to login
function Protected(props){
    const{ Component } = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    });

    return(
        <div>
            <Component />
        </div>
    )
}

function Login(){
    
    const Login =()=>{
        localStorage.setItem('login',true);
        navigate('/')
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    });
    return(
        <div>
            <input type="text"/><br/>
            <input type="text"/><br/>
            <button onClick={Login}>login</button>
        </div>
    )
}

function Profile(){
    return(
        <div>
            name:
            age:
        </div>
    )
}



export{Home,About,Navba,Page404,User,Userin,Filter,Company,Channel,Contact,Other,Profile,Login,Protected};