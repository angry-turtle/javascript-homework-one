const a = parseFloat(prompt('Введіть число А'));

const b = parseFloat(prompt('Введіть число B'));

const c = parseFloat(prompt('Введіть число C'));

const result = solveQuadrEq(a, b, c);

if (Number.isNaN(a, b, c)) {
    alert('Неправильні дані');
}

alert(' Ви ввели : A=' + a + ', B=' + b + ', C=' + c);
alert('Вирішення рівняння : ' + result);


function solveQuadrEq(a, b, c) {
    if (a == 0)
        return ' Значення А не може дорівнювати нулю!';
    const d = calcDiscr(a, b, c);
    let x1, x2;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d) / (2 * a));
        x2 = (-b - Math.sqrt(d) / (2 * a));
        return 'Рішення: X1=' + x1 + ', X2=' + x2;
    }
    else if (d === 0) {
        x1 = b / 2 * a;
        return 'Рішення: X1=' + x1;
    }
    else if (d < 0)
        return ' Немає рішення. D=' + d;

}

function calcDiscr(a, b, c) {
    return (b * b) - (4 * a * c);

}
