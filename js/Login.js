import logo from "../images/logo.svg";
const Login = function render() {
  return `<section class="login">
        <img class="logo" src="${logo}" width="126">
        <form id="loginForm" method="POST">
            <span class="form-field">
                <label For="email"></label>
                <input required type="email" id="email"/>
            </span>
            <span class="form-field">
                <label For="password">كلمة السر</label>
                <input required type="password" id="password"/>
            </span>
            <span class="form-field">
                <input required type="submit" value="تسجيل الدخول"/>
                <a class="form-switch" href="#/register">إنشاء حساب جديد</a>
            </span>
        </form>
    </section>`;
};
export default Login;
