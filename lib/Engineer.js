const Employee = require("./Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email,github) {
        super(name, id, email);
        this.github = github;

    }
   //getters and setters
   getGithub() {
       //access github
       return this.github;
   }
 getRole() {
     // overides previous role
     return "Engineer";
 }
}

module.exports = Engineer;
