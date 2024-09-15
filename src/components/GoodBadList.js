function GoodBadList() {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col text-center mb-4">
        <div className="row">
          <h2>Entry List</h2>
          <hr />
        </div>
        <div className="row">
          <table className="table table-hover">
            <tbody id="goodlist">
              
            </tbody>
          </table>
        </div>
      </div>
      <div className="col text-center mb-4">
        <div className="row">
          <h2>Bad List</h2>
          <hr />
        </div>
        <div className="row">
          <table className="table table-hover">
            <tbody id="badlist">
              
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="alert alert-danger" role="alert">
            You could have saved = <span id = "badHours"></span>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="alert alert-success" role="alert" >
        total hours allocated = <span id = "totalHours"></span>
      </div>
    </div>
  </div>
  );
}

export default GoodBadList;