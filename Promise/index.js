let userData = [
    {name: "Babu", age:30}
];

const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ans = "Babu";
        if (ans) resolve(ans);
        else reject('No Data Preset')

    }, 5000);
});

console.log(userData);
console.log(data);

function getUserDetails(result){
    const userDetails = new Promise((resolve, reject) =>{
        setTimeout(() => {
            const user = userData.find(user => user.name == result);
            if(user) resolve(user);
            else reject('Error Occured')
        }, 1000);
    }) 
    return userDetails;
}

data.then((result) => {
    console.log(result);
        return getUserDetails(result);
    }).then((userDetail) => {
        console.log(userDetail); 
    }).catch((error) => {
        console.log(error);
    }).finally((finalResult) => {
        console.log("Test");
    });
