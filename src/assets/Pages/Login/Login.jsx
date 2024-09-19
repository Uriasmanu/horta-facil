import LoginComponent from '../../Components/LoginComponent/LoginComponent';
import './_Login.scss'

import banner from '../../../image/horta.png'

const Login = () => {
    return (
        <div className="container-login">
            <LoginComponent />
            <img src={banner} alt="" />
        </div>
    )
}

export default Login;