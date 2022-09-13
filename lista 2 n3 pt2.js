const prompt = require ('prompt-sync')();

const ageText = prompt ('What is your age ? ');
const age = Number(ageText);

if(age >= 10 && age <= 14){
    console.log(`Children's category`);
}
else if(age >= 15 && age <= 17){
    console.log(`Juvenile category`);
}
else if(age >= 18 && age <= 25){
    console.log(`Adult's category`);
}
else if(age <= 9 && age >= 26){
    console.log(`Does not fit for activities wait for new vacancies to open`);
}