const combine = (text: (string | number)[]): string => {    
    return text.join(' ');
}

const case1 = combine([1, 'data', '3', 'result']);
const case2 = combine(['Bejo', 'has', '4', 'sport', 'car']);

console.log("Case 1 : " + case1);
console.log("Case 2 : " + case2);