const registrationForm = () => {
    return(
        `
        <div class="container text-center w-25 p-3">
        <h3>Register</h3>
        <form id="registerForm">
            <div class="form-group mb-2">
                <input type="text" id="username" class="form-control" autocomplete="username" placeholder="Username"
                    required>
            </div>
            <div class="form-group mb-2">
                <input type="email" id="email" class="form-control" autocomplete="email" placeholder="Email" required>
            </div>
            <div class="form-group mb-2">
                <input type="password" id="password" class="form-control" autocomplete="current-password"
                    placeholder="Password" required>
            </div>
            <div class="form-group mb-2">
                <button type="submit" class="btn btn-primary mb-2">Sign Up</button>
            </div>

        </form>
        </div>
        `)
}
export default registrationForm;