import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count",
    }
]);
let word = answers.Sentence.trim().split(" ");
console.log(word);
console.log(`Your sentence word count is ${word.length}`);
