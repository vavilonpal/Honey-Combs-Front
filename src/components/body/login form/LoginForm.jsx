import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"
import Swal from "sweetalert2"
import {loginUser} from "../../../api/users-api/UserAuthAPI";
import {login} from "../../../service/authService";


function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const requestBody = {username, password}
            const response = await loginUser(requestBody);
            console.log(response)

            //Event listener for login check and set token
            login(response.data.token);
            console.log(localStorage.getItem("access_token"))
            navigate("/profile")
        } catch (eror) {
            console.log(eror)
            await Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: eror.response.data.message
            });
        }
    }


    return (
        <div className="container" style={{marginTop:"10vh"}}>
            <form onSubmit={handleLogin} method={"POST"}>
                <h2>Login to your account</h2>
                <p>Welcome back!</p>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input onChange={e => {setUsername(e.target.value)}} type="username" className="form-control" id="username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input onChange={e => {setPassword(e.target.value)}} type="password" className="form-control" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary">LOG IN</button>
                <p style={{marginTop:"2vh"}}>Don't have an account?<Link to={'/register'}>Create an account</Link></p>
            </form>
        </div>
    )

}
export default LoginForm;
