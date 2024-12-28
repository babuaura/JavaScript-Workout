import { User } from "./user.js";
import { users, department, departmentStaffs } from "./DB.js";

export class Staff extends User{
    constructor({id, name, doj, userType}){
        super({id, name, doj, userType});
    }
    
    get myHODName(){
        return "HOD";
    }

    get studentList(){
        return "Student";
    }

    get staffDepartmentName(){
        console.log("Staff Department");
        const departmentName = departmentStaffs.find((obj)=>obj.userId === this.id);
        console.log("Staff Department : "+ departmentName);

    }

}