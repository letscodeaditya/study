function Todoitem1(){
    let todoname = "buy milk";
    let tododate = "4/10/2023";

    return(
        <div className="conatiner">
            <div className="row kg-row ">
                <div className="col-6">{todoname}</div>
                <div className="col-4 item">{tododate}</div>
                <div className="col-2">
                <button type="button" className="btn btn-danger kg-button ">DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default Todoitem1;