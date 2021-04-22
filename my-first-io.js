const fs = require("fs");

const filname = process.argv[2];
const contents = fs.readFileSync(filname);
const str = contents.toString();
const lines = str.split("\n").length;
console.log(lines - 1);
