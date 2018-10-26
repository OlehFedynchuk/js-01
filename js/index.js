/*let greetings = 'Hello';
alert(greetings);
greetings = 'World';
alert(greetings);

let price = 42;

let product = true;

//null
//undefined46


const userName = prompt('Enter your name ?');
greetings = addHello(userName);
alert(greetings);

const userAge = parseInt(prompt('enter your name'));
const newAge = userAge + 1;
alert('next' + newAge);

function addHello (text) {
    const result = 'hello' + text ;
    return result ;
}

Math.sqrt(4);
*/

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

solveQuadrEq(a, b, c);

function solveQuadrEq(a, b, c) {
    const d = diskr(a, b, c);

   if (d > 0) {
       
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        const result = alert ('x1 =' + x1 + 'x2 =' + x2) ;
    }
    if (d == 0) {
        const x = (-b) / 2 * a ;
        const result = alert ('x =' + x ) ;
    } else {
        const result = alert ('has no valid roots')
    } 
    return
}

function diskr(a, b, c) {

    return b * b - 4 * a * c;
}
