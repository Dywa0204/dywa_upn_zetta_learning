const text = "Learning Typescript is different than Javascript";
const n = 9;
const m = 19;

const sliceText = (text: String, n: number, m: number): String => {
    return text.slice(n, m);
}

console.log(sliceText(text, n, m));