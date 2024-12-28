const findMissingNumber = (arr) => {
    const n = arr.length + 1;

    // sum of numbers from 1 to n
    const sumOfN = (n * (n+1)) / 2;

    //sum of numbers in array

    const sumOfArray = arr.reduce((total, current) => total + current);

console.log(sumOfN - sumOfArray);
};

findMissingNumber([1,3, 4,5,6]);