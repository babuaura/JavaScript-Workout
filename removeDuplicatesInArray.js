let array = [1,2,2,3,5,5,7,1,9,8];

//"set" => Pre Defined method
console.log("Set Before : " + array);
console.log("SET : " + [...new Set(array)]);
console.log("After SET : " + array);

//"filter" & "indexOf" => Pre Defined method
console.log("\n Filter & Index");
console.log(array.filter((value, index, self) => {
    return self.indexOf(value) == index
}));

// "reduce" & "includes"
console.log("\nReduce & Includes :");
console.log(array.reduce((prevValue, item) => {
    return prevValue.includes(item) ? prevValue : [...prevValue, item];
}, []));