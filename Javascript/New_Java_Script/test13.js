function* generatorFunc() {
    yield 'First output';
    yield 'Second output';
    return 'Done';
}

let gen = generatorFunc();

console.log(gen.next().value); // First output
console.log(gen.next().value); // Second output
console.log(gen.next().value); // Done
console.log(gen.next().value); // undefined
