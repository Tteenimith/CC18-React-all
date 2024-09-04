


function App() {
    const genRandom = () => Math.floor(Math.random() * 100)
    const st1 = { color: 'red', backgroundColor: 'lime' }
    const disp = { display: 'flex', justifyContent: 'space-between',alignItems:'baseline'}
    return (
        <div style={disp}>

            <h1 style={st1}>Codecamp18 :{new Date().toTimeString()}</h1>
            {/* <h1 style={st1}>Codecamp18 :{new Date().toTimeString().split(' ')[0]}</h1> */}
            <h3 style={{ color: 'deeppink', backgroundColor: 'gold' }}>Lucky Number = {genRandom()}</h3>
            <p className='underline'>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}


// text align


ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)

// console.log(React)
// console.log(ReactDOM)
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// const root = ReactDOM.createRoot(document.querySelector('#root')).render(<h1>Codecamp18 :{new Date().toTimeString()}</h1>)




