import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
const getTimeEpoch = () => {
  return new Date().getTime().toString();                             
}

function writeCat() {
    const firebaseConfig = {
        apiKey: "AIzaSyB7UD7ZASLB8yLwLQS7G_Qyybe_HbhntlA",
        authDomain: "project1-9a622.firebaseapp.com",
        projectId: "project1-9a622",
        storageBucket: "project1-9a622.appspot.com",
        messagingSenderId: "276140792515",
        appId: "1:276140792515:web:09d2f4940c844c8a916076",
        databaseURL: "https://musudatabaseprojektas-default-rtdb.europe-west1.firebasedatabase.app/"
      };
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    let inputTitle = document.querySelector("#catName");

    set(ref(db, 'categories/' + inputTitle.value), {
      category: inputTitle.value,
    });
}

export default writeCat;