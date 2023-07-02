// задача 1

let t = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));

function Faren(t){
    let f = (9 / 5) * t + 32;
    return Math.round(f*100)/100;
} 

alert (`${t} градус Цельсия соответствует ${Faren(t)} градусам по Фаренгейту`);

// задача вывести окно с 2мя кнопками, при нажатии на ок - выволдит текст, при отмене тоже текст

//const ok = confirm("Вам хорошо живется?");
//if (ok == true) {
//    alert("Тогда мы идем к вам!");}
//else {
//    alert("Ну, вы держитесь!");}

//   задача
//const product = prompt("Введите фрукт");

//switch (product.toLocaleLowerCase()) {
 //   case "мандарины":
 //       alert("Мандарины стоят 109 руб/кг");
 //       break;
 //   case "бананы":
 //       alert("Бананы и груши стоят 79 руб/кг");
//        break;
//    case "груши":
 //       alert("Бананы и груши стоят 79 руб/кг");
 //       break;
 //   default:
 //       alert("Нет акого продукта");
//}

// задача + найти макс индекс


function getMaxEvenElement (arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2){
        if (arr[i] > max){
           max = arr[i];
        }
    }
    return max;
}
console.log(getMaxEvenElement([5,7,-1,12,3,0]));
console.log(getMaxEvenElement([4,-12,29,6,31,92,-50]));
