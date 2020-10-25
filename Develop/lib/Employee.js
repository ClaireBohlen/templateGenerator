// TODO: Write code to define and export the Employee class

class Employee {  // The first class is an Employee parent class with the following properties and methods:
    constructor(name, id, email){
        this.name = name; // name
        this.id = id; // id
        this.email = email; 
        this.role = "Employee";

    }

    getName(){  
        return this.name;    // getName()

    }

    getId(){    
        return this.id;
         // getId()

    }

    getEmail(){   
        return this.email;
         // getEmail()

    }

    getRole(){   
        return this.role;
          // getRole() // Returns 'Employee'

    }
}

module.exports = Employee;



