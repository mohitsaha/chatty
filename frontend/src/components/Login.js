import "./Login.css"
function Login(){
    return(
         <form> 
            <input type="text" class="username"></input>
            <input type="password" class="password"></input>
            <button class="submitButton">submit</button>
            <button class="submitButton">signUp</button>
         </form>
    );
}

export default Login;