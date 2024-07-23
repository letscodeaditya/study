function Todoitem2() {
    let todoName = "Go to College";
    let todoDate = "4/10/2023";
  
    return (
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
            DELETE
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Todoitem2;