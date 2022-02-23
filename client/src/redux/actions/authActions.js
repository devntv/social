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
  } catch (error) {}
};
