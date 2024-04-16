#! /usr/bin/env node 
//this line is called a shabang, it tells the OS to run 
// Import the 'inquirer' module 
import inquirer from "inquirer";
//Declare a constant 'answer' and assign it to the result of inquirer.promp function
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentece to count the words: "
    }
]);
const words = answer.Sentence.trim();
//Print the arrat of words to the console
console.log(words);
//Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
