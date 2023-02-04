import "./App.css";

function App() {
  return (
    <div className="form-div">
      <form className="user-form">
        <input
          className="form-field"
          type="text"
          placeholder="First Name"
        ></input>
        <input
          className="form-field"
          type="text"
          placeholder="Last Name"
        ></input>
        <input className="form-field" type="text" placeholder="Email"></input>
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
