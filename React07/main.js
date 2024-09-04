function App() {
  const [allInput, setallInput] = React.useState("");
  return (
    <div className="app">
      <h1>User Form</h1>
      <hr />
      <UserForm setallInput={setallInput} />
      <hr />
      <p>You input = {allInput}</p>
    </div>
  );
}

function UserForm(props) {
  const { setallInput } = props;
  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputRole, setInputRole] = React.useState("");

  const hdlSubmit = (e) => {
    e.preventDefault();
    console.log(inputName);
    console.log(inputEmail);
    setallInput(`${inputName} , ${inputEmail}, ${inputRole}`);
    const sendData = {
      name: inputName,
      email: inputEmail,
      role: inputRole,
    };
    console.log(sendData);
  };

  return (
    <div className="input">
      <form onSubmit={hdlSubmit}>
        <label>
          Name :
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email :
          <input
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </label>

        <br />
        <br />
        <select onChange={(e) => setInputRole(e.target.value)}>
          <option value="" disable="true">
            Pls Select..
          </option>
          <option>Admin</option>
          <option>User</option>
          <option>Guest</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
