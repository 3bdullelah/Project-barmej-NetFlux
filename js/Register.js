import logo from "../images/logo.svg";
const Register = function render() {
  return `<section class="login">
        <img class="logo" src="${logo}" width="126">
        <form id="loginForm">
            <span class="form-field">
                <label For="email"></label>
                <input  type="email" id="email"/>
            </span>
            <span class="form-field">
                <label For="password">كلمة السر</label>
                <input  type="password" id="password"/>
            </span>
            <span class="form-field">
                <label For="password">إعادة كلمة السر</label>
                <input  type="password" id="password"/>
            </span>
            <span class="form-field">
                <input type="submit" value="إنشاء حساب جديد"/>
                <a class="form-switch" href="#/login">تسجيل الدخول</a>
            </span>
        </form>
    </section>`;
};
export default Register;
