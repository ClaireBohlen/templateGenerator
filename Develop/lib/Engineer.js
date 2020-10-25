// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// In addition to Employee's properties and methods, Engineer will also have:

const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super (name, id, email)
        this.role = "Engineer";
        this.github = github; // github // GitHub username
    }

    getGithub (){
        return this.github;
    } // getGithub()

    

}

module.exports = Engineer;





