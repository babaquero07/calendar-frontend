import { useForm } from "../../hooks";
import "./login.css";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPasswordRepeat: "",
};

export const LoginPage = () => {
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPasswordRepeat,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const loginSubmit = (e) => {
    e.preventDefault();
  };

  const registerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1 ">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group mb-2">
              <input
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                name="registerName"
                value={registerName}
                onChange={onRegisterInputChange}
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group mb-2">
              <input
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
                type="email"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group mb-2">
              <input
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisterInputChange}
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div className="form-group mb-2">
              <input
                name="registerPasswordRepeat"
                value={registerPasswordRepeat}
                onChange={onRegisterInputChange}
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
