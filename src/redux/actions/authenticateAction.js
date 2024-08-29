const login = (id, password) => {
  return (dispatch) => {
    console.log("login success action");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
};
const logout = () => {
  return (dispatch) => {
    console.log("logout action");
    dispatch({ type: "LOGOUT" });
  };
};

export default { login, logout };
