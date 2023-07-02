// задача 1

let t = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));

function Faren(t){
    let f = (9 / 5) * t + 32;
    return Math.round(f*100)/100;
} 

alert (`${t} градус Цельсия соответствует ${Faren(t)} градусам по Фаренгейту`);

