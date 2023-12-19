// Please don't change the pre-written code
// Import the necessary modules here

const fs = require("fs")
const Solution = () => {
  fs.writeFileSync("notes.txt","The world has enough coders")
  const data = fs.readFileSync("notes.txt").toString()
  console.log(data)
  fs.appendFileSync("notes.txt"," BE A CODING NINJA!")
  const data1 = fs.readFileSync("notes.txt").toString()
  console.log(data1)
};
Solution();
module.exports = Solution;
