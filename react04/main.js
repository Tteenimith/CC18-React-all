

function UserInfo() {
    console.log('run...')
    // const user = { name: 'andy', birthYear: 1995, isLoggin: false}
    const [user, setUser] = React.useState({
        name: 'andy',
        birthYear: 1995,
        isLoggin: false,
        point: 1000,
        loginCount: 0
    })



    const hdlLogin = () => {
        const x = { ...user }
        x.isLoggin = true
        x.loginCount += 1
        if (x.loginCount % 5 == 0) {
            x.point += 100
        }
        setUser(x)
        console.log(x.loginCount)
    }

    const hdlLogout = () => {
        const newUser = { ...user }
        newUser.isLoggin = false
        setUser(newUser)
    }

    const hdlAddpoint = () => {
        // const newUser = { ...user }
        // newUser.point += 10
        // setUser(newUser)
        setUser(newUser=>({...newUser, point: newUser.point+10}))
    }

    return (
        <div>

            <p>Userinfo</p>
            <p>Name : {user.name}</p>
            <p>Age : {new Date().getFullYear() - user.birthYear}</p>
            <p>Point : {user.point}</p>
            <p>Count : {user.loginCount}</p>

            {user.isLoggin
                ?   (<React.Fragment>
                    <button onClick={hdlLogout}>Logout</button>
                    <button onClick={hdlAddpoint}>AddPoint</button>
                    </React.Fragment>
                    )
                : <button onClick={hdlLogin}>Login</button>
            }
            <hr />
            {/* Login state */}
            {user.isLoggin
                ? <p>Welcome {user.name}</p>
                : <p>Please Login</p>
            }


        </div>
    )
}

function App() {
    return (
    <div className='app'>
        <UserInfo />
    </div>
    )
}




const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App />)




// ANS

// const loginState = (state) => {
//     const newUser = {...user}
//     newUser.isLoggin = state
//     setUser(newUser)
// }


// const hdlLogin = () => loginState(true)
// const hdlLogout = () => loginState(false)

// ANS