const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArray = []

function askQuestions () {
    inquirer.prompt( [
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
        }

        ])

        .then((answers)=> {
            if (answers.employeeType === 0){
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
                    employeeArray.push(newManager);
                    if(answers.addEmployee === 0){
                        console.log("add Emp");
                        askQuestions();
                    } else {
                        // console.log("Finished");
                        fs.writeFile("team.html", render(employeeArray), error => {
                            if (error){
                                // console.log ("ERROR");
                            } else {
                                // console.log ("Sucsess");
                            }
                        })
                    }
                })
                

            

            } if (answers.employeeType === 1){
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
                    if(answers.addEmployee === 0){
                        console.log ("ADD EMP");
                        askQuestions();
                    } else {
                        fs.writeFile("team.html", render(employeeArray), error => {
                            if (error){
                                console.log("error");
                            } else {
                                console.log("succsess");
                            }
                        })
                    }
                })

                // if (answers.addEmploee2 = true)
                // questions();
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
                    if (answers.addEmployee === 0){
                        console.log("add");
                        askQuestions();
                    } else {
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
askQuestions();

// const newEmployee = new Intern(response2.name, response2.id, response2.email, response3.school);
// empArr.push(newEmployee);





    
    
        
   

    



   

    


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
