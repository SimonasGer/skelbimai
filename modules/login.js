import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const logIn = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyB7UD7ZASLB8yLwLQS7G_Qyybe_HbhntlA",
        authDomain: "project1-9a622.firebaseapp.com",
        projectId: "project1-9a622",
        storageBucket: "project1-9a622.appspot.com",
        messagingSenderId: "276140792515",
        appId: "1:276140792515:web:09d2f4940c844c8a916076",
        databaseURL: "https://musudatabaseprojektas-default-rtdb.europe-west1.firebasedatabase.app/"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      
      const db = getDatabase(app);
      const logIn = document.querySelector("#logInForm");
      let inputName = document.querySelector("#name");
      let inputPass = document.querySelector("#pass");
      let errorPass = document.querySelector("#errorPass");

      logIn.addEventListener("click", (event) => {
          event.preventDefault();
          const dbRef = ref(getDatabase());
          errorName.innerHTML = "";
          errorPass.innerHTML = "";
          get(child(dbRef, `users/`))
          .then((snapshot) => {
              if (snapshot.exists()) {
                  let user = snapshot.val();
                  for (let i in user){
                      if (inputName.value === user[i].username && inputPass.value === user[i].password){
                            localStorage.setItem("loggedIn", "True")
                            errorPass.innerHTML = "Logged In";
                            localStorage.setItem("user", JSON.stringify(user[i]));
                            location.reload();
                            break;
                      }
                      if (inputName.value !== user[i].username || inputPass.value !== user[i].password){
                            errorPass.innerHTML = "Wrong username or password";
                      }
                  }
              }
          })
      }) 
}

export default logIn;

