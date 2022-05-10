const second = process.argv.slice(2);

for (let item of second) {
  if (!item || Number(item) < 0 || Number(item) === NaN) {
    continue;
  }
  
  setTimeout(() => {
    process.stdout.write(`${item}\n`)
  }, Number(item) * 1000);

};