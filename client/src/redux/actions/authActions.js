import { postData } from "../../untils/fetchData";

export const TYPES = {
  AUTH: "AUTH",
};

export const Login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "NOTICE",
      payload: { loading: true },
    });
    // route from router.post("/login", authController.login);
    const res = await postData("login", data);
    console.log(res);
    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });
    localStorage.setItem("loginfirsttime", true);
    dispatch({
      type: "NOTICE",
      payload: {
        success: res.data.msg,
      },
    });
  } catch (error) {
    dispatch({
      type: "NOTICE",
      payload: { error: error.response.data.msg },
    });
  }
};
