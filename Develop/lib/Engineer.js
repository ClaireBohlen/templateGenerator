// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// In addition to Employee's properties and methods, Engineer will also have:

const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super (name, id, email)
        this.name = name;
        this.id = id;
        
        this.github = github; // github // GitHub username
    }

    getGithub (); // getGithub()

    getRole ();  // getRole() // Overridden to return 'Engineer'

}

const Employee = new Employee()
Employee.printInfo();




