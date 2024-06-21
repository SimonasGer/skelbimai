const renderAdmin = () => {
    return(
        `
        <div class="container text-center w-25 p-3">
        <h3>Prideti kategorija</h3>
        <form>
            <fieldset class="form-group mb-2">
                <input class="form-control" id="catName" type="text" placeholder="Kategorijos pavadinimas">
            </fieldset>
            <button id="catSubmit" type="submit" class="btn btn-primary mb-2" >Ideti kategorija</button>
        </form>
        </div>
        `
    )
}

export default renderAdmin;