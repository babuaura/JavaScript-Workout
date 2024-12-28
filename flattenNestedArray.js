const nestedArray = [1,[2,[3,4],5],6,[7,[8,9]]];

// using flat()
// console.log(nestedArray.flat(3));

// forEach
const flattenArray = (arr) => {
    let flatArr = [];

    arr.forEach(element => {
        if(Array.isArray(element)) flatArr = 
            flatArr.concat(flattenArray(element));
        else flatArr.push(element);
    });

    return flatArr;
}

console.log(flattenArray(nestedArray));
