import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import render from "./render.js"
import renderPosts from "./renderPosts.js";
import renderPostForm from "./renderPostForm.js";
import { user } from "../app.js";
import deleteButton from "./deleteButton.js";

const getPosts = () => {
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
      let postList = []
      const dbRef = ref(getDatabase());
      render(".delete", "<div></div>");
      get(child(dbRef, `posts/`))
      .then((snapshot) => {
          if (snapshot.exists()) {
              let user = snapshot.val();
              for (let i in user){
                postList.push(user[i]);
              }
          }
      })
      .then(() => {
        for (let i of postList){
            render(".renderPage", renderPosts(i.title, i.price, i.desc, i.user, i.img, i.id), true);
        }
      })
      .then(() => {
        if (localStorage.loggedIn === "True"){
        document.querySelectorAll(".cardBtn").forEach(item => {
            item.addEventListener("click", ()=>{
                {
                let id = item.parentElement.parentElement.id
                get(child(dbRef, `posts/${id}`))
                .then((snapshot) => {
                    let post = snapshot.val();
                    if (user.username === post.user){
                        render(".renderPage", renderPostForm(post.title, post.price, post.desc, post.img));
                        render(".delete", deleteButton(), true);
                        document.querySelector("#deletePost").addEventListener("click", function(event){
                            event.preventDefault();
                            set(ref(db, 'posts/' + post.id), {});
                            render(".delete", "<div></div>");
                        })
                        document.querySelector("#publishPost").addEventListener("click", function(event){
                            event.preventDefault();
                            document.querySelector("#success").innerHTML = ""
                            let inputTitle = document.querySelector("#postTitle");
                            let inputPrice = document.querySelector("#postPrice");
                            let inputDesc = document.querySelector("#postDesc");
                            let inputImg = document.querySelector("#postImg");

                            set(ref(db, 'posts/' + post.id), {
                                title: inputTitle.value,
                                price: inputPrice.value,
                                desc: inputDesc.value,
                                img: inputImg.value,
                                id: post.id,
                                user: post.user
                            });
                            document.querySelector("#success").innerHTML = "Skelbimas patalpintas"
                    })}
                })
            }})
        });
    }})                 
}
export{ getPosts };