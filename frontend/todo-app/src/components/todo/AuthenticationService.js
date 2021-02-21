import axios from "axios";

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:4201/basicauth", {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }
  executeJwtAuthenticationService(username, password) {
    return axios.post("http://localhost:4201/authenticate", {
      username,
      password
    });
  }
  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  createJwtToken(token) {
    return "Bearer " + token;
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  registerSuccessfulLoginForJwt(username,token){
    sessionStorage.setItem("authenticatedUser",username);
    this.setupAxiosInterceptors(this.createJwtToken(token))
  }
  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }
  /*getLoggedInUserName = () => {
    let user = sessionStorage.getItem("authenticatedUser");
    console.log("USER::"+user)
    if (user === null) return " ";
    return user;
  }*/
  getLoggedInUserName = () => sessionStorage.getItem("authenticatedUser");

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}
export default new AuthenticationService();
