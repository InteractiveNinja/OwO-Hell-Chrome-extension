// var faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];
// function OwoifyText(v) {
//     v = v.replace(/(?:r|l)/g, "w");
//     v = v.replace(/(?:R|L)/g, "W");
//     v = v.replace(/n([aeiou])/g, 'ny$1');
//     v = v.replace(/N([aeiou])/g, 'Ny$1');
//     v = v.replace(/N([AEIOU])/g, 'Ny$1');
//     v = v.replace(/ove/g, "uv");
//     v = v.replace(/\!+/g, " " + faces[Math.floor(Math.random() * faces.length)] + " ");
//     return v;
// };


// //Wechselt das Suchlogo
// $(".logo > a > img").attr("src", chrome.extension.getURL("imgs/logo.png"));
// //Wechselt das Google Startseiten Logo
// $("canvas").after("<img src='"+ chrome.extension.getURL("imgs/logo.png") +"'></img>").remove();

// // Verwandelt die Elemente in OwO Text

// $('div').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));
// });

// $('h1').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

// });

// $('h2').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

// });

// $('h3').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

// });

// $('span').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

// });

// $('p').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

// });


// $('button').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

// });

// $('input').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

// });

// $('li').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));
    
// });

// $('a').contents().filter(function () {
//     return this.nodeType == 3
// }).each(function () {
//     this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));
// });
console.log("test")