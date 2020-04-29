import axios from "axios";

const BACKEND_URL = "";

const LOGIN_API = `${BACKEND_URL}/apis/authentication/login`;
const REGISTER_API = `${BACKEND_URL}/apis/authentication/register/email`;

// Request
export const loginRequest = ({ email, password }) => {
  //   const loginRequestJSONTransform = json => {
  //     const token = json.data.token;
  //     const { username, allowedOperations, userType, _id } = json.data.userInfo;

  //     return { userId: _id, username, allowedOperations, userType, token };
  //   };

  // DEV: fake login
  const isDev = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "custom";

  if (isDev) {
    switch (password) {
      case "error": {
        return Promise.reject({ error: "incorrect" });
      }
      case "super": {
        return Promise.resolve({
          userType: "superAdmin",
          token: "abc123",
          userId: "abc123",
          username: "abc123"
        });
      }

      default: {
        return Promise.resolve({
          userType: "normalAdmin",
          token: "abc123",
          userId: "abc123",
          username: "abc123"
        });
      }
    }
  }

  //   return new Promise((resolve, reject) => {
  //     axios({
  //       method: "post",
  //       url: LOGIN_API,
  //       data: {
  //         email,
  //         password
  //       }
  //     })
  //       .then(json => {
  //         if (json.status !== 200) {
  //           return reject({ msg: "Internal Error" });
  //         }

  //         return resolve(loginRequestJSONTransform(json));
  //       })
  //       .catch(reject);
  //   });
};

// TODO: determine the registration flow
export const registerRequest = ({ email, password, userType, username }) => {
  const allowedOperations = ["cars", "users", "insurances", "transactions"];

  return axios({
    method: "post",
    url: REGISTER_API,
    data: {
      email,
      password,
      userType,
      username,
      allowedOperations,
      isActive: true
    }
  });
};
