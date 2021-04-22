const args = process.argv.splice(2);

const sum = args.reduce((previousValue, currentValue) => {
  return previousValue + parseInt(currentValue);
}, 0);
console.log(sum);
