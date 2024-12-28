// const romanToText = (romanLetter) => {
//     const romanMap = {
//         'I' : 1,
//         'V' : 5,
//         'X' : 10,
//         'L' : 50,
//         'C' : 100,
//         'D' : 500,
//         'M' : 1000
//     };
    
//     let total = 0

//     for (const element of romanLetter) {
//         const romanValue = romanLetter(element);
            
        
//     }
// }

let a = [10,20,30];
console.log(a);
let b = [...a];
console.log(b);
b[1] =200;
console.log(a);
console.log(b);

let c = { size : "large", top : ["peper" , "sausage"]};
console.log(c);
// let d = JSON.parse(JSON.stringify(c));
let d = structuredClone(c);
console.log(d)
d.top[0] = "hot";
console.log(c);
console.log(d);



