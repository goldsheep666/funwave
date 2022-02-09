import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import logo from '../../data/images/FunwaveLogo-black2.png';
import '../../styles/component.scss';

function Login(props) {
  const [showModal, setshowModal] = useState(false);
  const openSignUp = () => {
    setshowModal((prev) => !prev);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-sm-12 p-0 leftSignUp">
            <div className="demo vh-100 d-flex justify-content-center align-items-center">
              <div>
                <h3 className="text-white fw-bold text-center mb-3">
                  加入FUNWAVE會員
                </h3>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary text-white fw-bold signupBtn"
                    onClick={openSignUp}
                  >
                    快速註冊
                  </button>
                </div>
                <div className="text-white fw-bold text-center mt-5">
                  這裡有一群熱情的浪友們，加入FUNWAVE會員，
                  <br />
                  跟我們一起FUN，一起浪！
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 vh-100 d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
              <li className="d-flex justify-content-center">
                <div className="fs-2 loginTitle">登入會員</div>
              </li>
              <li className="mt-3">
                <label className="fw-bold">電子信箱</label>
                <input
                  className="form-control mt-1"
                  type="text"
                  name="email"
                  id=""
                />
              </li>
              <li className="mt-3">
                <label className="fw-bold">密碼</label>
                <input
                  className="form-control mt-1"
                  type="text"
                  name="password"
                  id=""
                />
                <div className="d-flex justify-content-between mt-1">
                  <Link to="/" className="forgetPassword mt-2">
                    忘記密碼?
                  </Link>
                  <div>
                    <input
                      className="mt-2 me-1 form-check-input"
                      type="checkbox"
                      name="remember"
                      id=""
                    />
                    <label className="mt-1 form-check-label">記住我</label>
                  </div>
                </div>
              </li>
              <li className="mt-4 d-flex justify-content-center">
                <button className="btn btn-primary text-white loginBtn">
                  登入
                </button>
              </li>
              <Modal showModal={showModal} setshowModal={setshowModal} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;