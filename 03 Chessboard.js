/*

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it 
works for any size, outputting a grid of the given width and height.

*/


//Answer: (I used a double space as it looks better in the console)

let squareType = false;
let outPut = "";
let gridSize = 8;
gridSize = prompt("Please enter a grid size");

for (let rowNum = 0; rowNum < gridSize; rowNum++) {
  if (rowNum % 2 == 0) {
    squareType = false;
  }
  else {
    squareType = true;
  }
  for (let colNum = 0; colNum < gridSize; colNum++) {
	outPut += (squareType ? "  " : "#");
	squareType = squareType ? false : true;
		}
  outPut += "\n";
  }
console.log(outPut);
