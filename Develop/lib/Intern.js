// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// In addition to Employee's properties and methods, Intern will also have:

const Employee = require("./Employee");


class Intern extends Employee {
    constructor(id, name, email, school){
        super (name, id, email)
        this.school = school;
        this.role = "Intern";

    }

    getSchool(){
        return this.school;
    } // getSchool()
    

   

}

module.exports = Intern;







