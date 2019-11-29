class AppSession {

    storeSession(storeData) {
        const dateTime = new Date();
        const {userId, userRole, token, userUpdateAt} = storeData;
        localStorage.setItem('userId', userId);
        localStorage.setItem('authority', userRole);
        localStorage.setItem('userLastUpdate', userUpdateAt);
        localStorage.setItem('token', token);
        localStorage.setItem('loginTime', dateTime);
    }

    getUserRole() {
        // const authValue = localStorage.getItem('authority');
        // if (authValue) {
        //   // return NaN when can't parse, disable eslint old rule of es5
        //   return parseInt(authValue); 
        // }
        return localStorage.getItem('authority');;
      }
    
      getUserToken() {
        var a = localStorage.getItem('token');
        return a;
      }
    
      getUserId() {
        return localStorage.getItem('userId');
      }
    
      getLoginTime() {
        return localStorage.getItem('loginTime');
      }
    
      getUserUpdatedAt() {
        return localStorage.getItem('userLastUpdate');
      }
    
      checkUserLogin() {
        // user logged when have userId, userRole, token in localstorage
        console.log("userId:", this.getUserId());
        console.log("getUserToken:", this.getUserToken());
        console.log("getUserRole:", this.getUserRole());
        console.log("all:", this.getUserId() && this.getUserToken() && this.getUserRole());
        return this.getUserId() && this.getUserToken() && this.getUserRole();
      }
    
      removeSession() {
        localStorage.removeItem('userId');
        localStorage.removeItem('authority');
        localStorage.removeItem('userLastUpdate');
        localStorage.removeItem('token');
        localStorage.removeItem('loginTime');
      }
}
export default AppSession;