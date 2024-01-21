import chattyLogo from "../../images/logo-no-background.png"

function Login() {
    return (
        <div class="box">
            <form>
                <span class="text-center">login</span>
                <div class="input-container">
                    <input type="text" required="" />
                    <label>Full Name</label>
                </div>
                <div class="input-container">
                    <input type="mail" required="" />
                    <label>Email</label>
                </div>
                <button type="button" class="btn">submit</button>
            </form>
        </div>
    );
}

export default Login;