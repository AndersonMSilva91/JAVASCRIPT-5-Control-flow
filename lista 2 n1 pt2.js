const prompt = require ('prompt-sync')();

const AString = prompt('Insert the value of A: ');
const BString = prompt('Insert the value of B: ');
const CString = prompt('Insert the value of C: ');

const a = Number(AString);
const b = Number(BString);
const c = Number(CString);

if (a > b && a > c) {
    console.log(`This is the bigest value is A: ${a}`);
}
else if (b > a && b > c) {
    console.log(`This is the bigest value is B: ${b}`);
}
else if (c > a && c > b) {
    console.log(`This is the bigest value is C: ${c}`);
}