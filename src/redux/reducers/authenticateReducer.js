const initialState = {
  id: "",
  password: "",
  authenticate: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("log in success reducer");
      console.log(payload.id, payload.password);

      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOGOUT":
      return initialState;

    default:
      return { ...state };
  }
};
