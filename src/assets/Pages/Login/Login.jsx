import LoginComponent from '../../Components/LoginComponent/LoginComponent';
import './_Login.scss'
import './_LoginMobile.scss'

import banner from '../../../image/horta.png'


const Login = () => {

    return (
        <div className="container-login">

            <div className='component'>
                <h1>Horta Facil</h1>
                <LoginComponent />
            </div>
            <img src={banner} alt="banner" className='banner' />
        </div>
    )
}

export default Login;