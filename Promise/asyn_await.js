let userData = [
    {name: "Babu", age:30}
];

const data1 = fetch
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
            console.log('start');
            const user = userData.find(user => user.name == result);
            if(user) resolve(user);
            else reject('Error Occured')
        }, 1000);
    }) 
    return userDetails;
}

// async function res(){
    try {
        const data1 = await data;
        console.log("Test");
        console.log(data1)
        const userDetail = await getUserDetails(data1);
        console.log(userDetail);
        
    } catch (error) {
        console.log(error);
    } finally{
        console.log("Finally");  
    }
    console.log("last");  
// }
// res();