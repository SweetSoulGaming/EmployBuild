// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    // getters and setters
   getName() {
       return this.name;
   }

   getId() {
       return this.id;
   }

   getRole() {
       return "Employee";

   }
}

module.exports = Employee;