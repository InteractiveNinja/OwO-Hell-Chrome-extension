var faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];
function OwoifyText(v) {
    v = v.replace(/(?:r|l)/g, "w");
    v = v.replace(/(?:R|L)/g, "W");
    v = v.replace(/n([aeiou])/g, 'ny$1');
    v = v.replace(/N([aeiou])/g, 'Ny$1');
    v = v.replace(/N([AEIOU])/g, 'Ny$1');
    v = v.replace(/ove/g, "uv");
    v = v.replace(/\!+/g, " " + faces[Math.floor(Math.random() * faces.length)] + " ");
    return v;
};


// //Wechselt das Suchlogo
// $(".logo > a > img").attr("src", chrome.extension.getURL("imgs/logo.png"));
// //Wechselt das Google Startseiten Logo
// $("canvas").after("<img src='"+ chrome.extension.getURL("imgs/logo.png") +"'></img>").remove();



let textElements : NodeListOf<Element> = document.querySelectorAll("p,h1,h2,h3,a");

let imageElements : NodeListOf<Element> = document.querySelectorAll("img");


textElements.forEach(e => {
    e.textContent = OwoifyText(e.textContent);
})

imageElements.forEach(e =>{
    // e.setAttribute("src",)
})

