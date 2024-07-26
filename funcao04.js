var res = function fatorial(x) {
    res = 1;
    for (var i = x; i > 0; i--) {
        res *= i;
    }
    return res;
};

var o = res // função
var i = res(3) // resultado da função (chamada + parametro)

console.log(o);
console.log(i);

// metodo recursiva
/* function fatorial(x) {
    if (x == 1) {
        return 1;
    } else {
        return x * fatorial(x - 1);
    }
}

console.log(fatorial(5)); */
