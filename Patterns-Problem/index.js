// let out = '';
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         out += '* ';       
//     }
//     out += '\n';
// }
// console.log(out);

    // Output

            // * 
            // * * 
            // * * * 
            // * * * * 
            // * * * * * 

// let out = '';
// for (let i = 1; i <= 5; i++) {
//     let temp = i * 2 -1;
//     for (let j = 1; j <= temp; j++) {
//         out += '* ';
//     }
//     out += '\n';
// }
// console.log(out);

//     Output

//         * 
//         * * * 
//         * * * * * 
//         * * * * * * * 
//         * * * * * * * * * 

// let out = '';
// for (let i = 5; i >= 0; i--) {  
//     for (let j = 1; j <= i; j++) {
//         out += '* ';
//     }
//     out += '\n';
// }
// console.log(out);

    // Output

            // * * * * * 
            // * * * * 
            // * * * 
            // * * 
            // * 

// let out = '';
// for (let i = 9; i >= 0; i--) {    
//     for (let j = 1; j <= i; j++) {
//         out += '  ';
//     }
//     for (let k = i; k < 10; k++) {
//         out += '* ';
//     }
//     out += '\n';
// }
// console.log(out);

    // Output
        //                   * 
        //                 * * 
        //               * * * 
        //             * * * * 
        //           * * * * * 
        //         * * * * * * 
        //       * * * * * * * 
        //     * * * * * * * * 
        //   * * * * * * * * * 
        // * * * * * * * * * * 

// let out = '';
// for (let i = 0; i < 10; i++) {   
//     for (let j = 0; j < i; j++) {
//         out += '  ';
//     }
//     for (let k = i; k < 10; k++) {
//         out += '* ';
//     }
//     out += '\n';
// }
// console.log(out);

// output
        // * * * * * * * * * * 
        //   * * * * * * * * * 
        //     * * * * * * * * 
        //       * * * * * * * 
        //         * * * * * * 
        //           * * * * * 
        //             * * * * 
        //               * * * 
        //                 * * 
        //                   * 

// let out = '';
// for (let i = 9; i > 0; i--) {
//     const temp = (i*2) - 1;
//     console.log(temp);
    
//     for (let j = 1; j < i; j++) {
//         out += '  ';
//     }
//     for (let k = temp; k <=17; k++) {
//         out += '* ';
//     }
//     out += '\n';
// }
// console.log(out);

// console.log('upPattern');

// function upPattern(input){
//     let out = '';
//     let value = input - 1;

//     for (let i = value; i >= 0; i--) {
//         let temp = (i * 2) - 1;
    
//         for (let j = 0; j < i; j++) {
//             out += '  ';
//         }

//         for (let k = temp; k <= (value * 2) - 1; k++) {
//             out += '* ';
//         }

//         out += '\n';
//     }
//     console.log(out);
// }
// upPattern(10);

// console.log('downPattern');

// function downPattern(input){
//     let out = '';
//     let value = input - 1;

//     for (let i = 0; i <= value; i++) {
//         let temp = (i * 2) - 1;

//         for (let j = 0; j < i; j++) {
//             out += '  ';
//         }
//         for (let k = temp; k <= (value * 2) - 1; k++) {
//             out += '* ';       
//         }
//         out += '\n';
//     }
//     console.log(out);
// }
// downPattern(10);


function diamondPattern(input){

    let out = '';
    let value = input -1;

    for (let i = value; i >0; i--) {

        for (let j = 0; j < i; j++) {
            out += '  ';
        }

        for (let k = (i * 2) -1; k <= (value * 2) -1; k++) {
            // out +='* ';
            if(k == (i * 2) -1 || k == (value * 2) -1) out += '* ';
            else out += '  ';
        }
        out += '\n';
    }

    for (let i = 0; i <= value; i++) {

        for (let j = 0; j < i; j++) {
            out += '  ';            
        }

        for (let k = (i *2) -1; k < (value * 2); k++) {
            // out +='* ';
            if(k == (i *2) -1 || k == (value * 2)-1) out +='* ';
            else out += '  ';   
        }
        out += '\n';
    }
    return out;
    // console.log(out);
}
const output = diamondPattern(10);
console.log(output);

console.log("-----End of excution-----");
