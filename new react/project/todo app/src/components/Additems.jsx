function Additem(){
    return(
        <div className="container text-center mb-4 mt-4">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" placeholder="enter todo here"/>
                </div>
                <div className="col-4">
                    <input type="date" />
                </div>
                <div className="col-2 ">
                    <button type="button" class="btn btn-success kg-button">ADD</button>
                </div>
            </div>
        </div>
    );
}

export default Additem;