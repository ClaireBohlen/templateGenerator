// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// In addition to Employee's properties and methods, Intern will also have:

const Employee = require("./Employee");


class Intern extends Emplyee {
    constructor(id, name, email, school){
        super (name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getSchool(); // getSchool()

    getRole(); // getRole() // Overridden to return 'Intern'

}

const Intern = new Intern ();
Intern.printInfo();






