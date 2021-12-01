const args = process.argv.slice(2);
console.log(args);
for (let number of args) {
  if (number > 0 && !isNaN(number)) {
    setTimeout(() => {
      //process.stdout.write("beep \n");
      process.stdout.write('\x07');
    }, number * 1000);
  }
}