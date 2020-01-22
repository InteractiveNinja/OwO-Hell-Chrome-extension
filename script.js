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

$('div').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));
});

$(".logo > a > img").attr("src", chrome.extension.getURL("imgs/logo.png"));

// var canvas = $("#hplogo > canvas")[0]; // only get first one
// var context = canvas.getContext("2d");
// var img = new Image();
// img.src = chrome.extension.getURL("imgs/logo.png");
// img.onload = function() {
// context.drawImage(img, 50, 50);
// };

// //$(".logo").children().attr("src", chrome.extension.getURL("imgs/logo.png"))


//$("#hplogo").empty();
$('h1').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

});

$('h2').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

});

$('h3').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

});

$('span').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

});

$('p').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

});


$('button').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

});

$('input').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));

});

$('li').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));
    
});

$('a').contents().filter(function () {
    return this.nodeType == 3
}).each(function () {
    this.textContent = this.textContent.replace(this.textContent, OwoifyText(this.textContent));
});