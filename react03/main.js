// console.log(React)

function App() {
    console.log('App Run...')
    const [count, setCount] = React.useState(0)

    function multi(ten) {
        if (ten == '+10') {
            setCount(count + 10)
        }
    }

    return (
        <div>

            <button onClick={() => multi('+10')}>+10</button>
            <h1>Counter App</h1>
            <Counter
                count={count}
                setCount={setCount}
                className={`big-text counter ${count > 0 ? 'bg-red' : 'bg-white'}`}
                numberStyle={{ fontSize: '60px', color: 'coral' }}
            />
        </div>

    )

}


function Counter(progs) {
    console.log(progs)
    console.log('Counter Run...')


    const hdlClick = (nums) => {
        if (nums == '-') {
            if (progs.count - 1 < 0) {
                return
            }
            progs.setCount(progs.count - 1)
        } else if (nums == '+') {
            progs.setCount(progs.count + 1)
        }
        else if (nums == 'C') {
            progs.setCount(0)
        }

    }

    return (
        <div className={progs.className} >
            <button onClick={() => hdlClick('-')}>-</button>
            <h2 style={{ ...progs.numberStyle, color: progs.count > 10 ? 'lime' : 'coral' }}>{progs.count}</h2>
            <button onClick={() => hdlClick('+')}>+</button>
            <button onClick={() => hdlClick('C')}>C</button>
        </div>
    )
}







ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)



