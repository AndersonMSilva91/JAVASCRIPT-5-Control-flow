const prompt = require ('prompt-sync')();

const AString = prompt('Insert the value of A: ');
const BString = prompt('Insert the value of B: ');
const CString = prompt('Insert the value of C: ');

const a = Number(AString);
const b = Number(BString);
const c = Number(CString);

if(a > b && b > c){
    console.log(`${a}, ${b}, ${c} .`);
            }
        else if(a > c && c > b){
    console.log(`${a}, ${c}, ${b} .`);
            }
        else if(b > a && a > c){
    console.log(`${b},${a},${c} .`);
            }
        else if(b > c && c > a){
    console.log(`${b}, ${c}, ${a} .`);
            }
        else if(c > a && a > b){
    console.log(`${c}, ${a}, ${b} .`);
            }
        else if(c > b && b > a){
    console.log(`${c}, ${b}, ${a} .`);
            }