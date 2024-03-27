
//Q10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Komal Abbasi , March 5, 2024
//This program prints a personal message.
let Name: string = "Komal Abbasi";
console.log(`Hello ${Name}, would you like to learn some TypeScript today?`);
//Komal Abbasi March 5, 2024
// This program perform Addition, Subtraction, Multiplication & Division that results in number 8.
console.log("4 + 4 = ", 4 + 4);
console.log("2 * 4 = ", 2 * 4);
console.log("10 - 2 = ", 10 - 2);
console.log("16 / 2 = ", 16 / 2);
//Q11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let my_friends: string[] = ["Uroosa", "Raza", "Almeera", "Sabahat"];
for (let i: number = 0; i < my_friends.length; i++) {
    console.log(my_friends[i]);
}
//Q12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names: string[] = ["Uroosa", "Raza", "Almeera", "Sabahat"];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, would you like to learn some TypeScript today?`)
}