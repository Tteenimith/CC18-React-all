//Parent

function App() {
  const user = [
    { name: "Andy", age: 25, role: "admin" },
    { name: "Bob", age: 25, role: "user" },
    { name: "candy", age: 25, role: "user" },
  ];

  return (
    <div className="app">
      App
      {/* <UserInfoBox
        name="Son H.M"
        age={25}
        isAdmin={true}
        obj={{ name: "john" }}
        arr={[1, 3, 5]}
      /> */}
      <Header />
      <UserInfoContainer user={user} />
    </div>
  );
}

///Children

function UserInfoContainer(props) {
  const { user } = props;
  //   console.log(props);
  return (
    <div className="user-container" style={{ display: "flex", gap: "6px" }}>
      {/* <UserInfoBox name={user[0].name} age={user[0].age} role={user[0].role} />
      <UserInfoBox name={user[1].name} age={user[1].age} role={user[1].role} />
      <UserInfoBox name={user[2].name} age={user[2].age} role={user[2].role} /> */}

      {user.map((el) => (
        <UserInfoBox name={el.name} age={el.age} role={el.role} />
      ))}

      {user.map((el) => (
        <UserInfoBox2 item={el} />
      ))}
    </div>
  );
}

function UserInfoBox2(props) {
  console.log(props);
  const { item } = props;
  return (
    <div className="card">
      <img
        src="https://www.svgrepo.com/show/530412/user.svg"
        alt="John"
        style={{ width: "100%" }}
      />
      <h1>
        {item.name} , {item.age}
      </h1>
      <p className="title">{item.role}</p>
      <p>Harvard University</p>

      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}
function UserInfoBox(props) {
  const { name, age, role } = props;
  //   console.log(props);
  return (
    <div className="card">
      <img
        src="https://www.svgrepo.com/show/530412/user.svg"
        alt="John"
        style={{ width: "100%" }}
      />
      <h1>
        {name} , {age}
      </h1>
      <p className="title">{role}</p>
      <p>Harvard University</p>

      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}

function Header() {
  return (
    <header style={{ backgroundColor: "gold" }}>
      <h2>Logo</h2>
      <nav>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACTT</a>
      </nav>
    </header>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
