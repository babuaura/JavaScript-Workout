const isBalanced = (str) =>{

    const stack = [];

    for (const char of str) {

        if(char == '(' ) stack.push(char);
        else if(char == ')' ) {
            if (!stack.length) return false;
            stack.pop(); 
        }
    }

    return stack.length == 0;
};

console.log(isBalanced("((())"));