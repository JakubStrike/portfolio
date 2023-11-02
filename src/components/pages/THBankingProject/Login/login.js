import './login.css';


const Login = () => {
    return (
    <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Login</h1>
                <span className="contactDesc">Hint: you can use account below to login</span><br></br>
                <span className="contactDesc">login: User</span><br></br>
                <input type="text" className="name" placeholder='login' name='login' />
                <span className="contactDesc">Passsword: Password!</span><br></br>
                <input type="text" className="email" placeholder='password' name='password' />
                <button type="submit" value="Send" className='submitBtn'>Submit</button>

        </div>
    </div>
    );
}

export default Login;