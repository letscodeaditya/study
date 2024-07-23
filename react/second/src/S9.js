import React, { PureComponent, useState, useMemo,createRef,useRef } from "react";

//////pure component is used for class component
//it is used to enhance the performance of our page by not always rendering the page if there is not change of state etc


/////in this render will be loaded every time when we click the button even if there is no changes made

// class Pure extends Component{
//     constructor(){
//         super();
//         this.state={
//             count:1
//         }
//     }

//     render()
//     {
//         console.log("checking")
//         return(
//             <div>
//                 <h1>pure component {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:2})}>update count</button>
//             </div>
//         )
//     }
// }

//it will only re-render when something is changed
class Pure extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    render() {
        console.log("checking")
        return (
            <div>
                <h1>pure component {this.state.count}</h1>
                <button onClick={() => this.setState({ count: 2 })}>update count</button>
            </div>
        )
    }
}


//pure component with props
class UserP extends React.PureComponent {
    render() {
        console.log("user check")
        return (
            <div>
                <h1>user component {this.props.count}</h1>
            </div>
        )
    }
}





/////we use usememo hook to acheive this in function component

function Memo() {
    const [count, setcount] = useState(0);
    const [item, setitem] = useState(10);

    //IN this this multi count will call everytime event when we update only item not the count bec it is called inside thye return will be re-render everytime a change is made in its component

    // function multicount() {
    //     console.log("multi called")
    //     return count * 5
    // }


    //so use hook called usememo it take to parameter first the function itself and second the item which is gonna get update so it will re-render only when that item is rendering

    const multiname = useMemo(function multicount() {
        console.log("multi called")
        return count * 5
    },[count])

    return (
        <div>
            <h1>usememo in hook</h1>
            <h2>count: {count}</h2>
            <h2>item: {item}</h2>
            <h2>{multiname}</h2>
            <button onClick={() => setcount(count + 1)}>update count</button>
            <button onClick={() => setitem(item * 10)}>update item</button>
        </div>
    )
}



//////////ref - it directly manupulate the DOM


class Ref extends React.Component {
    constructor()
    {
        super();
        //by this var now we can property directly
        this.inputr = createRef();
    }
    componentDidCatch(){
        // console.log(this.inputr.current.value="100")
    }
    getval()
    {
        console.log(this.inputr.current.value)
        this.inputr.current.style.color="red"
        this.inputr.current.style.backgroundcolor = "black"
    }
    render(){
        return(
            <div>
                <h1>ref in react</h1>
                {/* by ref we can call that var  */}
                <input type="text" ref={this.inputr}></input>
                <button onClick={()=>this.getval()} >check ref</button>
            </div>
        )
    }
}

//for function com

function Reff(){
    let inputref = useRef(null)
    function handleinp()
    {
        console.log("function called")
        inputref.current.value="1000"
        inputref.current.focus();
        inputref.current.style.display="none"
        
    }
    return(
        <div>
            <h1>useref in react</h1>
            <input type="text" ref={inputref}></input>
            <button onClick={handleinp}>handle input</button>
        </div>
    )
}





export { Pure, UserP, Memo };