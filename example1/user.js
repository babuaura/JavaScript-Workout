export class User {
    #id = undefined;
    #name = undefined;
    #doj = undefined;
    #userType = undefined;

    constructor ({id, name, doj, userType}){
        this.#id = id;
        this.#name = name;
        this.#doj = doj;
        this.#userType = userType;
    }

    get myName (){
        return this.#name;
    }

    get myId (){
        return this.#id;
    }

    get myDateOfJoining (){
        return this.#doj;
    }

    get myUserType (){
        return this.#userType;
    }
    set myName (name){
        return this.#name;
    }

    set myId (id){
        return this.#id;
    }

    set myDateOfJoining (doj){
        return this.#doj;
    }

    set myUserType (userType){
        return this.#userType;
    }

}

