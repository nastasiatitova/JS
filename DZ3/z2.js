
function greeting() {
    let name = prompt("Введите ваше имя");
    let message = 'Доброго дня, ' + name + ' !';
    return message;
}

console.log(greeting());