//life cycle in react js (check pic)
import React from "react";

class Com extends React.Component {
    constructor(){
        super();
        this.state={
            count:0,
            count2:0
        }
        console.log("cons called 1st")
    }

    //comdidmount is good for calling api as it is loaded after all html css 

    //when we update anystate in our page comdidmount dont get reloaded only render is loaded again, check this by using the button
    componentDidMount()
    {
        console.log("cpmdidmount called after html etc is loaded")
        
    }



    //it is called only when state or props is change or updated 

    //preprops and prestate gives the original value before update
    
    //to stop comdidupdate() if shouldcomponentupdate() return false 
    componentDidUpdate(preProps,preState,snapShot)
    {
        console.log("componentdidupdate",preState.count,this.state.count)
        if(preState.count===this.state.count)
        {
            alert("data is already same")
        }
    }





    //it is by default set to false means it wont let render to reload even after the state is change so you wont see any changes on screen but data will be change 
    //we can set condition for true and check statement
    shouldComponentUpdate()
    {
        console.log("shouldcomupdate",this.state.count2);
        if(this.state.count2>5 && this.state.count2<10)
        {
            return true;
        }
    }




    //it is called when a comp is removed
    componentWillUnmount()
    {
        console.log("comunmount called")
    }




    

    //we should never call any update state in render directly bec it always get called
    render()
    {
        console.log("render is called in 3rd")
        return(
            <div>
                <h1>component did mount {this.state.count} {this.state.count2}</h1>
                <button onClick={()=>{this.setState({count:1,count2:this.state.count2+1})}}>update name</button>
            </div>
        )
    }
}

export {Com};