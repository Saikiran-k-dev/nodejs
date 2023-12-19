import readline from "readline";

const solution = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      const maxNumber = Number(num1) > Number(num2) ? num1 : num2;
      console.log(`Maximum number is: ${maxNumber}`);
      rl.close();
    });
  });
};

solution();
export default solution;
