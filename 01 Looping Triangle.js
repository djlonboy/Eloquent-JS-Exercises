/*

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

// Answer:

let outputText = "";
for (let hashLength = 0; hashLength <7; hashLength++) {
outputText += "#";
console.log(outputText + "\n")
}


// More Elegant Answer:

let outputText = "";
while (outputText.length <7) {
outputText += "#";
console.log(outputText + "\n");
}


// Variable Size Triangle Answer:

var triSize = prompt("How big do you want your triangle?");
let outputText = "";
while (outputText.length <triSize) {
	outputText += "#";
	console.log(outputText + "\n");
}
