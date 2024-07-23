import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    // Form Inputlarını Sıfırlama
    setLoginData({})
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <form
        className="loginWrapper p-5 border rounded shadow w-50 d-flex flex-column gap-3"
        onSubmit={handleFormSubmit}
      >
        <h1>Giriş Yap</h1>
        <hr />
        <div className="inputGroup mb-3">
          <label htmlFor="username" className="form-label">
            Kullanıcı Adınız
          </label>
          <input
            id="username"
            type="text"
            placeholder="Kullanıcı Adınızı Giriniz"
            className="form-control"
            onChange={handleInputChange}
            name="username"
            value={loginData.username||""}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="form-label">
            Şifreniz
          </label>
          <input
            id="password"
            type="password"
            placeholder="Şifrenizi Giriniz"
            className="form-control"
            onChange={handleInputChange}
            name="password"
            value={loginData.password||""}
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
