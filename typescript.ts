const text = "Learning Typescript is different than Javascript";
const n = 9;
const m = 19;

const myFunction = function (text: String, n: number, m: number): String {
    return text.slice(n, m);
}

console.log(myFunction(text, n, m));