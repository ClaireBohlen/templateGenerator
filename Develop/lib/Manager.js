// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// In addition to Employee's properties and methods, Manager will also have:

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;

    }

    getRole(); // getRole() // Overridden to return 'Manager'

    getOfficeNumber();


}




// const rectangle = new Rectangle(12, 9);
// rectangle.printInfo();