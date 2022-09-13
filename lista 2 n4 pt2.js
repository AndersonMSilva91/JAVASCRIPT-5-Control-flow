const prompt = require ('prompt-sync')();

const n1Text = prompt ('Insert a number: ');

const n1 = Number(n1Text);

if(n1 % 2 == 1){
    console.log(`It's odd`);
    const n1p = Math.pow(n1,2);
    console.log(`This is your potency: ${n1p}`);
}
else if(n1 % 2 == 0){
    console.log(`this number is even`);
    const n2p = Math.sqrt(n1,2);
    console.log(`This is your square root: ${n2p}`);

}

