$("h1").each(() => {
    alert($(this).text());
}) 
var faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];

function OwoifyText(v) {
    v = v.replace(/(?:r|l)/g, "w");
    v = v.replace(/(?:R|L)/g, "W");
    v = v.replace(/n([aeiou])/g, 'ny$1');
    v = v.replace(/N([aeiou])/g, 'Ny$1');
    v = v.replace(/N([AEIOU])/g, 'Ny$1');
    v = v.replace(/ove/g, "uv");
    //v = v.replace(/\!+/g, " " + faces[Math.floor(Math.random() * faces.length)] + " ");
    console.log(v);
    return v;
};