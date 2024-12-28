let a = [1,2,3];
let b= [4,5,6];
console.log([...a,...b]);

let c = {s:2,e:5,r:1}

// for (const key in c) {
//     // for (const [key, value] in Object.entries(c)) {
//     // for (const key in Object.entries(c)) {

//     console.log(key);
//     // console.log(a[key]);
//     // console.log(key + c[key]);
//     // console.log(value);
    
//     // if (Object.prototype.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];
        
//     // }
// }

for (const ele of b) {
    // for (const [key, value] of Object.entries(c)) {

    console.log(ele);
    
}

