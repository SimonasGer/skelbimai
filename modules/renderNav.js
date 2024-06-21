const renderNav = (loggedIn, name) => {
    if (loggedIn == true){
        return (
            `<form>
                <button class="btn btn-light m-1" id="logOutButton" type="button">Atsijungti</button>
            </form>
            <form>
                <button class="btn btn-light m-1" id="currentUser" type="button">${name.username}</button>
            </form>
            `        
        )
        
    } else {
        return (
            `
            <form>
                <button class="btn btn-light m-1" id="registerButton" type="button">Registruotis</button>
            </form>
            <form>
                <button class="btn btn-light m-1" id="loginButton" type="button" >Prisijungti</button>
            </form>
            `

        )
    }
}

export default renderNav;