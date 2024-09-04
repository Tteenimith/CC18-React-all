//DATA//
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];
//DATA//

//Parent
function App() {
  const [scientist, setScientist] = React.useState(people);
  const professionList = [...new Set(people.map((el) => el.profession))];

  function ListClass(e) {
    console.log(e);
    setScientist(people.filter((el) => el.profession === e.target.textContent));
  }
  return (
    <div>
      {professionList.map((el) => (
        <button key={el} onClick={ListClass}>
          {el}
        </button>
      ))}
      <hr />
      <ul>
        {scientist.map((el) => (
          <PersonCard key={el.id} person={el} />
        ))}
      </ul>
    </div>
  );
}
//Parent

//Children

function PersonCard(props) {
  //   console.log(props)
  const {
    person: { name: sname, profession },
  } = props;

  return (
    <li>
      {sname} : {profession}
    </li>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

//------------------------------------------------------//
// function PersonCard(props) {
//     const {
//       person: { name: sname, profession },
//     } = props;

//     return (
//       <li>
//         {sname} : {profession}
//       </li>
//     );
//   }

//วิธีดึงของจาก array
//   const finalList = scientist.filter((el) => el.profession === "chemist");
//   console.log(finalList);
//   const professionList = new Set (scientist.map(el=>(el.profession)))
//   const professionList = Array. from(new Set((scientist.map((el) => el.profession))));
//   const professionList = [...(new Set((scientist.map((el) => el.profession))))];
