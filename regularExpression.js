// const pattern = /^[a-d]{2,}[0-5]/ ;
const pattern = /^[\w.]+@[\w.]+.[\w]+$/;
const input = 'b abu@g mail.com';

console.log(pattern.test(input));
console.log(input.replace(/\s+/g,''));