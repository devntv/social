import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import Appstore from "../images/appstore.png";
import Googleplay from "../images/googleplay.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import globalPageStyle from "./globalPageStyle.module.css";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = React.useState(initialState);
  const { email, password } = userData;

  const isInvalid = password.length < 6 || email === "";
  const isInputEmail = email !== "";
  const isInputPassword = password !== "";
  //handle UI
  const [displayPass, setDisplayPass] = React.useState(true);
  const [randomImage, setRandomImage] = React.useState(s1);
  const [loadingBtn, setLoadingBtn] = React.useState(false);
  const [loginFb, setLoginFb] = React.useState(false);
  React.useEffect(() => {
    const slideMobileScreen = setInterval(() => {
      const imgArray = [s1, s2, s3, s4, s5];
      const randomIndex = Math.floor(Math.random() * imgArray.length);
      const randomImg = imgArray[randomIndex];
      setRandomImage(randomImg);
    }, 3500);
    return () => {
      clearInterval(slideMobileScreen);
    };
  }, []);
  const handleDisplay = () => setDisplayPass(!displayPass);
  const handleLoginFb = () => setTimeout(() => setLoginFb(true), 800);
  // FORM
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <div className="container flex mx-auto max-w-screen-md items-center h-full mb-12 xs-res2:mt-24 xs-res2:mb-8">
        <div className="relative -ml-10 -mr-5 bg-cover h-auto hidden md-res2:flex">
          <img
            className="max-w-full animate-mobileScreen"
            src={randomImage}
            alt="login phone mobile"
          />
        </div>

        <div className="flex flex-col md-res2:w-6/12 my-0 mx-auto max-w-maxwidth350">
          <div className="flex flex-col items-center p-6 pb-12 border-gray-primary mt-0 xs-res2:border xs-res2:bg-white xs-res2:mb-2 xs-res2:pb-3 ">
            <h1 className="justify-center ">
              <img
                className=" mt-4 h-16 w-48 mx-auto mb-4"
                src="/images/vsgLogo.png"
                alt="DinhstagramLogo"
              />
            </h1>

            <form className="relative">
              {isInputEmail && (
                <p className="text-xs -mt-1 text-gray-graybold h-0 absolute top-1 left-2 animate-scaletext">
                  Email :
                </p>
              )}
              <input
                aria-label="Nhập vào địa chỉ Email"
                type="text"
                onFocus={(e) => {
                  e.target.placeholder = "nhập vào địa chỉ Email";
                }}
                onBlur={(e) => {
                  e.target.placeholder = "Địa chỉ Email";
                }}
                placeholder="Địa chỉ Email"
                className={`text-xs focus:outline-none text-gray-base w-full mr-3 py-4 px-4 h-10 border border-gray-primary
                            rounded mb-2 bg-gray-background ${
                              isInputEmail &&
                              `text-xs pt-3 pr-0 pb-1 pl-2 text-black-light font-medium`
                            }`}
                value={email}
                onChange={handleChange}
                name="email"
              />
              {isInputPassword && (
                <span className="text-xs mt-0.5 text-gray-graybold absolute top-12 left-2 animate-scaletext">
                  Mật khẩu :
                </span>
              )}
              <input
                aria-label="Nhập vào password"
                type={!displayPass ? "text" : "password"}
                onFocus={(e) => {
                  e.target.placeholder = "nhập vào mật khẩu";
                }}
                onBlur={(e) => {
                  e.target.placeholder = "mật khẩu";
                }}
                placeholder="Mật khẩu"
                className={`text-xs focus:outline-none text-gray-base w-full mr-3 py-4 px-4 h-10 border border-gray-primary
                            rounded mb-3 bg-gray-background ${
                              isInputPassword &&
                              `text-xs pt-3 pr-0 pb-1 pl-2 text-black-light font-medium`
                            }`}
                onChange={handleChange}
                value={password}
                name="password"
              />
              <div className="flex justify-end h-0">
                <button
                  type="button"
                  className="relative font-semibold bottom-10 right-2 text-sm cursor-pointer focus:outline-none"
                  onClick={handleDisplay}
                >
                  {" "}
                  {password === ""
                    ? ""
                    : "Hiển thị" && displayPass
                    ? "Hiển thị"
                    : "Ẩn"}
                </button>
              </div>

              <button
                type="submit"
                disabled={isInvalid}
                className={`bg-blue-medium text-white w-full rounded h-9 font-semibold ${
                  isInvalid && `opacity-50 cursor-default`
                }`}
              >
                {loadingBtn ? (
                  <PulseLoader
                    className="flex items-center justify-center"
                    color="#f7f7f7"
                    loading={loadingBtn}
                    size={10}
                  />
                ) : (
                  "Đăng nhập"
                )}
              </button>
            </form>

            <div className="flex text-gray-graybold w-88-percent font-medium text-xs uppercase mx-10 mt-3 mb-5 relative flex-row justify-around items-center">
              <div className="bg-gray-primary h-px relative top-0.5 flex-grow -left-4" />
              <div className="flex-grow-0 text-sm">Hoặc</div>
              <div className="bg-gray-primary h-px relative top-0.5 flex-grow -right-4" />
            </div>

            <div>
              <button
                type="button"
                className="font-semibold text-blue-bold text-sm flex items-center"
                onClick={handleLoginFb}
              >
                {!loginFb && (
                  <span className="text-xl mr-1">
                    <AiFillFacebook />
                  </span>
                )}
                {loginFb ? (
                  <span className="opacity-40">hiện đang bảo trì...</span>
                ) : (
                  <span>Đăng nhập bằng Facebook</span>
                )}
              </button>
            </div>

            {/* {error && (
              <p className="mt-3.5 text-center text-sm text-red-primary">
                {error}
              </p>
            )} */}

            <div className="mt-3.5">
              <a
                href="https://www.facebook.com/Dinh.nt1097"
                className="text-xs text-blue-bold"
              >
                Quên mật khẩu?
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col w-full  border-gray-primary pb-10 xs-res2:bg-white xs-res2:p-5 xs-res2:border">
            <p className="text-sm">
              bạn chưa có tài khoản?
              <Link
                to="/register"
                className="font-semibold text-blue-medium ml-1"
              >
                Đăng ký
              </Link>
            </p>
          </div>

          <div className="flex flex-col relative items-center justify-center mt-3.5">
            <p className="text-sm text-black-dowload my-2.5 mx-5 text-center">
              Tải ứng dụng.
            </p>

            <div className="flex justify-around my-2.5 mx-0">
              <a
                href="apps.apple.com/us/developer/instagram-inc/id389801255"
                className="mr-2"
              >
                <img
                  className={globalPageStyle.imgDowload}
                  src={Appstore}
                  alt="AppStore"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=vi&gl=US"
                className="mr-0"
              >
                <img
                  className={globalPageStyle.imgDowload}
                  src={Googleplay}
                  alt="AppStore"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
