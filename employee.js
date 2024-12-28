export class Employee {
    static name = "Aura";
    static #salary = 500000;

    static set employeeSalary(salary){
        Employee.#salary = salary;
    }

    static get employeeSalary(){
        return this.#salary;
    }
}
