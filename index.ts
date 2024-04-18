#! /usr/bin/env node
import inquirer from "inquirer";

let currencies: any = {
    Pkr: {
        Usd: 0.0062,
        Pkr: 1,
        Gbp: 0.0029
    },
    Usd: {
        Pkr: 277.90,
        Usd: 1,
        Gbp: 0.80 
    },
    Gbp: {
        Pkr: 346.13,
        Usd: 1.25,
        Gbp: 1 
    },

}

let answer = await inquirer.prompt([
    {
        message: "Select Crrency you want to convert",
        type: "list",
        choices: [`Pkr`, `Usd`, 'Gbp'],
        name:"from"
    },
    {
        message: "Select Crrency you want to convert in",
        type: "list",
        choices: ["Pkr", "Usd","Gbp"],
        name:"to"
    },
    {
        message: "enter amount",
        type: "number",
        name:"amount"
    },

])
let {from,to} = answer
console.log( `${answer.amount} ${from} = ${currencies[from][to] * answer.amount} ${to}`);
// console.log();

