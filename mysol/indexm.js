const readline = require("readline");

const Solution = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
      if (Number(num1) > Number(num2)) {
        console.log("The maximum of the two numbers is: " + num1);
      } else {
        console.log("The maximum of two the numbers is: " + num2);
      }
      rl.close();
    });
  });
};

Solution();
module.exports = Solution;
