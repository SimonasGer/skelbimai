import renderRegistration from "./modules/renderRegistration.js"
import renderLogin from "./modules/renderLogin.js";
import render from "./modules/render.js";
import registration from "./modules/registration.js";
import logIn from "./modules/login.js";
import renderNav from "./modules/renderNav.js";
import writePostData from "./modules/writePost.js";
import renderPostForm from "./modules/renderPostForm.js";
import { getPosts} from "./modules/getPosts.js"
import renderAdmin from "./modules/renderAdmin.js";
import writeCat from "./modules/admin.js";

let user = localStorage.getItem("user");
if (user !== "noUser"){
    user = JSON.parse(user);
}
let loggedIn;
if (localStorage.loggedIn === "True"){
    loggedIn = true;
} else {
    loggedIn = false;
}


console.log(user);
document.querySelector(".renderPage").innerHTML = "";
getPosts();

document.querySelector(".logo").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".renderPage").innerHTML = "";
    getPosts();
})    

render(".logReg", renderNav(loggedIn, user));
if (!loggedIn || loggedIn == null){
    document.querySelector("#registerButton").addEventListener("click", function(event){
        event.preventDefault();
        render(".renderPage", renderRegistration());
        registration();
    })

    document.querySelector("#loginButton").addEventListener("click", function(event){
        event.preventDefault();
        render(".renderPage", renderLogin());
        logIn();
    })    
} else {
    document.querySelector("#logOutButton").addEventListener("click", function(event){
        event.preventDefault();
        localStorage.setItem("loggedIn", "False")
        localStorage.setItem("user", "noUser");
        location.reload();
    })
    document.querySelector("#currentUser").addEventListener("click", function(event){
        if (user.role === "simple user"){
            event.preventDefault();
            render(".renderPage", renderPostForm("", "", "", ""));
            document.querySelector("#publishPost").addEventListener("click", function(event){
                event.preventDefault();
                writePostData();
            })
        } else {
            event.preventDefault();
            render(".renderPage", );
            render(".renderPage", renderAdmin());
            document.querySelector("#catSubmit").addEventListener("click", function(event){
                event.preventDefault();
                writeCat();
            })

        }
        
    })    
}

export {user};




