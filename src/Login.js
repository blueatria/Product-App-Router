import LoginForm from "./LoginForm"

const Login = ({user, setLogin}) => {
    return(
        user === null 
        ?<LoginForm setLogin={setLogin}/>
        // ?<p>Please login first</p>
        :null
    )
}

export default Login