// Referencias de los botones
const bold = document.querySelector(".bold"),
    camelCase = document.querySelector(".toCase"),
    alingLeft = document.querySelector(".fa-align-left"),
    alingCenter = document.querySelector(".fa-align-center"),
    alingRight = document.querySelector(".fa-align-right"),
    fontSize = document.querySelector(".size-select"),
    fontFamily = document.querySelector(".family-select"),
    //Segunda linea de botones
    wordSpacing = document.querySelector(".spacing"),
    fontColor = document.querySelector(".font-color"),
    //Referencia de textarea
    textarea = document.querySelector(".textarea");

//Añadir escucho de eventos

fontColor.addEventListener("change", (e) => {
    textarea.setAttribute("style", `color:${fontColor.value}`);
});

wordSpacing.addEventListener("change", (e) => {
    textarea.setAttribute("style", `word-spacing:${wordSpacing.value}`);
});

fontFamily.addEventListener("change", (e) => {
    textarea.classList.remove("arial");
    textarea.classList.remove("georgia");
    textarea.classList.remove("courier");
    textarea.classList.remove("cursive");
    textarea.classList.remove("fantasy");
    textarea.classList.toggle(`${fontFamily.value}`);
});

fontSize.addEventListener("change", (e) => {
    textarea.classList.remove("h1"),
        textarea.classList.remove("h2"),
        textarea.classList.remove("h3"),
        textarea.classList.remove("h4"),
        textarea.classList.remove("h5"),
        textarea.classList.remove("h6"),
        textarea.classList.toggle(`${fontSize.value}`);
});

alingRight.addEventListener("click", (e) => {
    alingLeft.classList.remove("active");
    alingCenter.classList.remove("active");
    textarea.classList.remove("alignCenter");
    textarea.classList.remove("alignLeft");

    textarea.classList.toggle("alignRight");
    e.target.classList.toggle("active");
});

alingCenter.addEventListener("click", (e) => {
    alingLeft.classList.remove("active");
    alingRight.classList.remove("active");
    textarea.classList.remove("alignLeft");
    textarea.classList.remove("alignRight");

    textarea.classList.toggle("alignCenter");
    e.target.classList.toggle("active");
});

alingLeft.addEventListener("click", (e) => {
    alingRight.classList.remove("active");
    alingCenter.classList.remove("active");
    textarea.classList.remove("alignCenter");
    textarea.classList.remove("alignRight");

    textarea.classList.toggle("alignLeft");
    e.target.classList.toggle("active");
});

camelCase.addEventListener("click", (e) => {
    textarea.classList.toggle("upperCase");
    e.target.classList.toggle("active");
});

bold.addEventListener("click", (e) => {
    textarea.classList.toggle("bold");
    e.target.classList.toggle("active");
});
