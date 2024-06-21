const render = (renderArea, renderText, add) => {
        const pageContents = document.querySelector(renderArea);
        if (add){
                pageContents.innerHTML += renderText;
        } else {
                pageContents.innerHTML = renderText;
        }
        
}

export default render