let n = parseInt(prompt("enter the array size: "));
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(parseInt(prompt(`enter element ${i + 1} : `)));
}

let hash = new Array(13).fill(0);
for (let i = 0; i < n; i++) {
  hash[arr[i]] += 1;
}

let q = parseInt(prompt("enter the number of query: "));

for (let i = 0; i < q; i++) {
  let number = parseInt(prompt(`enter ${i + 1} no. to find: `));
  console.log(`the number is present ${hash[number]} times`);
}

/////////////////for chara lowercase

// Function to get input in a browser environment
function getInput(message) {
  return prompt(message);
}

// Read the input string
let s = getInput("Enter the string:");

// Precompute
let hash = new Array(26).fill(0);
for (let i = 0; i < s.length; i++) {
  hash[s.charCodeAt(i) - "a".charCodeAt(0)]++;
}

// Number of queries
let q = parseInt(getInput("Enter the number of queries:"));

for (let i = 0; i < q; i++) {
  let c = getInput(`Enter query ${i + 1}:`).charAt(0);
  // Fetch and print result
  console.log(hash[c.charCodeAt(0) - "a".charCodeAt(0)]);
}

/////////////for both up and low

// Function to get input in a browser environment
function getInput(message) {
  return prompt(message);
}

// Read the input string
let s = getInput("Enter the string:");

// Precompute
let hash = new Array(256).fill(0);
for (let i = 0; i < s.length; i++) {
  hash[s.charCodeAt(i)]++;
}

// Number of queries
let q = parseInt(getInput("Enter the number of queries:"));

for (let i = 0; i < q; i++) {
  let c = getInput(`Enter query ${i + 1}:`).charAt(0);
  // Fetch and print result
  console.log(hash[c.charCodeAt(0)]);
}
