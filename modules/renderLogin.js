const renderLogin = () => {
    return(
        `
        <div class="container text-center w-25 p-3">
        <h3>Log In</h3>
        <form>
            <fieldset class="form-group mb-2">
                <input class="form-control" id="name" type="text" placeholder="Username">
                <p id="errorName"></p>
            </fieldset>
            <fieldset class="form-group mb-2">
                <input class="form-control" id="pass" type="password" placeholder="Password">
                <p id="errorPass"></p>
            </fieldset>
            <button id="logInForm" type="submit" class="btn btn-primary mb-2" >Log In</button>
        </form>
        </div>
        `
    )
}

export default renderLogin;