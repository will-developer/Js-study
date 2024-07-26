let num = [5, 8, 2, 9, 3];

num.push(1);

// for (var i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

for (let i in num) {
    console.log(`a posição ${i} tem o valor ${num[i]}`);
}

console.log();

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

console.log();

console.log(num.indexOf(3));

console.log();
