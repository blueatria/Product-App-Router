import {useState} from 'react'

const LoginForm = ({setLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        const userInfo = username
        setLogin(userInfo)
    }

    const contentStyle = {
        backgroundColor: 'white',
        color: '#800000',
        padding: 10,
        margin: 20,
        fontSize: 16
    }
    
    const inputStyle = {
        backgroundColor: 'white',
        color: 'black',
        padding: 5,
        margin: 0,
        fontSize: 16,
        borderRadius: 12
    }
    
    const buttonStyle = {
        backgroundColor: 'white',
        color: 'black',
        padding: 4,
        margin: 4,
        fontSize: 16,
        cursor: 'pointer',
        fontStyle: 'italic',
        borderRadius: 12
    }    

    return(
        <div style={contentStyle}>
            <strong> Please login </strong>
            <form onSubmit={handleLogin}>
                <div style={inputStyle}>
                <span> Username: </span>
                    <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({target}) => setUsername(target.value)}
                />
                </div>
                <div style={inputStyle}>
                <span> Password: </span>
                    <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                </div>
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    )   
}

export default LoginForm