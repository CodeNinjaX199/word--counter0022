import inquirer from "inquirer";

let answers:{
    Sentence: string

} = await inquirer.prompt([

    {
          name: "Sentence",
          type: "input",
          message: "Enter your Sentence to count the word:",

    }
])

let word = answers.Sentence.trim().split(" ")

console.log(word);

console.log(`Your sentence word count is ${word.length}`);





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////