const renderPostForm = (title, price, desc, img) => {
    return(
        `
        <div class="container text-center w-25 p-3">
            <h3>Iveskite skelbimo duomenis</h3>
            <form>
                <fieldset class="form-group mb-2">
                    <input class="form-control" id="postTitle" type="text" placeholder="Skelbimo pavadinimas" value="${title}">
                </fieldset>
                <fieldset class="form-group mb-2">
                    <input class="form-control" id="postPrice" type="text" placeholder="Skelbimo kaina" value="${price}">
                </fieldset>
                <fieldset class="form-group mb-2">
                    <textarea name="postDesc" id="postDesc" placeholder="Skelbimo aprasymas">${desc}</textarea>
                </fieldset>
                <fieldset class="form-group mb-2">
                    <input class="form-control" id="postImg" type="text" placeholder="Skelbimo nuotraukos nuoroda" value="${img}">
                </fieldset>
                <p id="success"></p>
                <button id="publishPost" type="submit" class="btn btn-primary mb-2" >Ikelti skelbima</button>
            </form>
        </div>
        `
    )
}

export default renderPostForm;