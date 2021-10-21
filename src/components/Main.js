import { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

function Main(props){
    const login = useSelector(state=>state.login);
    const password = useSelector(state=>state.password);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [isLoginCorrect, setIsLoginCorrect] = useState(false);
    
    function handleLoginInput(inputLogin){
        inputLogin===login?setIsLoginCorrect(true):setIsLoginCorrect(false);
    }
    function handlePasswordInput(inputPassword){
        inputPassword===password?setIsPasswordCorrect(true):setIsPasswordCorrect(false);
    }
    function handleLogin(){
        props.history.push('/profile')
    }
    
    return(
        <div id='loginForm'>
            <input placeholder='Логин' onChange={e=>handleLoginInput(e.target.value)} type='text'/>
            <input placeholder='Пароль' onChange={e=>handlePasswordInput(e.target.value)} type='text'/>
            <input disabled={!(isLoginCorrect&&isPasswordCorrect)} type='button'  value='Войти' onClick={()=>handleLogin()}/>
        </div>
    )
}
export default withRouter(Main);