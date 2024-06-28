#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

 class Student {
    name : string
    constructor(n:string){
    this.name= n
    }
 }

 class Persons{
    students:Student[]=[]
    addStudent(obj:Student){
    this.students.push(obj)
    }
 }

 const persons = new Persons()

 const programStart =async(persons : Persons)=>{
    do{
    console.log(chalk.yellow("\n\t Welcome !!!!\n\t"));

    const ans = await inquirer.prompt([
        {
            name : "select",
            type : "list",
            message : chalk.bgBlueBright("Whom would you like to interect with"),
            choices : ["Staff" , "Student" , "Exit"]
        }
    ])
    if(ans.select == "Staff"){
        console.log("You approach the staff room , Please feel free to ask any question");
        
    }else if(ans.select == "Student"){
        const ans = await inquirer.prompt([
            {
                name : "student",
                type: "input",
                message: chalk.blue("\n\t Enter the Student's name you wish to engage with : ")
            }
        ])
        const student = persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(chalk.green(`\n\t Hello!!!! I am ${name.name} Pleasure to connect with you`));
            console.log(chalk.red("\n\t New student have added successfully!!!!"));
            console.log(chalk.bold.italic("\n\t CURRENT STUDENT LIST"));
            console.log(persons.students);
        }else{
            console.log(chalk.green(`\n\t Hello!!!! I am ${student.name} Lovely to reconnect with you`));
            console.log(chalk.bold.italic("\n\t EXISTING STUDENT LIST :"));
            console.log(persons.students);
        }
    }else if(ans.select == "Exit"){
        console.log(chalk.black("Existing the program"));
        process.exit()
    }
}while(true)
 }
 programStart(persons)