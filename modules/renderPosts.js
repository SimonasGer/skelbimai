const renderPosts = (title, price, desc, user, img, nr) => {
    return(
        `
        <div class="card col-2 m-3 " id="${nr}" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${desc}</p>
                <p class="card-text">${user}</p>
                <a href="#" class="cardBtn btn btn-primary">${price}</a>
            </div>
        </div>
             
        `
    )
}

export default renderPosts;