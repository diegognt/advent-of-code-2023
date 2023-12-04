import getFirstAndLastDigitsFromLine from "./helpers.ts";

// Specify the path to your text file
const filePath = `${Deno.cwd()}/puzzles/trebuchet/input.txt`;
let result = 0;
let i = 0;
const file = await Deno.readTextFile(filePath);
const lines = file.split("\n");

while (lines[i]) {
  const digits = getFirstAndLastDigitsFromLine(lines[i]);
  result = result + parseInt(digits, 10);
  i++;
}

console.log(result);
