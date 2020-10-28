const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Require all packages

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//empty array to store data from user
let employeeArray = []

//Inquirer warpped in one function to call function when user selects to add a new employee 
function askQuestions () {
    inquirer.prompt( [  //first set of questions that apply to all types of employees 
        {
            type: "input",
            message: "What is the name of the employee?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },
        {
            type: "list",
            message: "What is the employee's title?",
            name: "employeeType",
            choices: [{ name: "Manager", value: 0 }, { name: "Engineer", value: 1 }, { name: "Intern", value: 2}]
        }  //using values so that I can compare answers below

        ])

        .then((answers)=> {
            if (answers.employeeType === 0){  // if the user selects manager the following wlll prompt the user 
                // console.log("Manager");
                inquirer.prompt([
                    {
                    type:"input",
                    message: "What is your office number?",
                    name: "officeNumber"
                    },
                    
                    
                    {
                    type: "list",
                    message: "Would you like to add another employee?",
                    name: "addEmployee",
                    choices: [{ name: "Yes", value: 0 }, { name: "No", value: 1 }]
                    }
                

                ]) .then((answers)=>{
                    const newManager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
                    employeeArray.push(newManager); //storing the users input into the manager class
                    if(answers.addEmployee === 0){
                        console.log("add Emp"); // asking the user if they would like to add another employee
                        askQuestions();
                    } else {
                        // console.log("Finished");
                        render(employeeArray); // if finished the information will be stored in the empty array
                        fs.writeFile("team.html", render(employeeArray), error => { // writing the html file
                            if (error){
                                // console.log ("ERROR");
                            } else {
                                // console.log ("Sucsess");
                            }
                        })
                    }
                })
                

            

            } if (answers.employeeType === 1){ // if the employee is an engineer 
                console.log ("Engineer");

                inquirer.prompt([
                    {
                    type: "input",
                    message: "What is the employee's Github username?",
                    name: "gitHub"
                    },
                    {
                    type: "list",
                    message: "Would you like to add another employee?",
                    name: "addEmployee",
                    choices: [{ name: "Yes", value: 0 }, { name: "No", value: 1 }]
                    }
                ])
                .then ((answers) => {
                    const newEngineer = new Engineer (answers.name, answers.id, answers.email,  answers.gitHub);
                    employeeArray.push(newEngineer);
                    if(answers.addEmployee === 0){
                        console.log ("ADD EMP");
                        askQuestions();
                    } else {
                        render(employeeArray);
                        fs.writeFile("team.html", render(employeeArray), error => {
                            if (error){
                                console.log("error");
                            } else {
                                console.log("succsess");
                            }
                        })
                    }
                })

                
            }

            else if (answers.employeeType === 2){
                console.log ("Intern");
                inquirer.prompt([
                    {
                    type: "input",
                    message: "What school does this intern attend?",
                    name: "school"
                    },
                    {
                    type: "list",
                    message: "Would you like to add another employee?",
                    name: "addEmployee",
                    choices: [{ name: "Yes", value: 0 }, { name: "No", value: 1 }]
                    }
                ])
                .then((answers) => {
                    const newIntern = new Intern (answers.name, answers.id, answers.email,  answers.school);
                    employeeArray.push(newIntern);
                    if (answers.addEmployee === 0){
                        console.log("add");
                        askQuestions();
                    } else {
                        render(employeeArray);
                        fs.writeFile("team.html", render(employeeArray), error => {
                            if (error){
                                console.log ("EERR");
                            } else {
                                console.log ("YES");
                            }
                        })
                    }
                })

            }
            
        })

        
                





}
askQuestions(); // calling the function 







    
    
        
   

    



   

    



