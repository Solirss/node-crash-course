global.setTimeout(() => {
  console.log('in the tiemout')
}, 3000);

//We don't need to type global before using global in node
setTimeout(() => {
  console.log('in the tiemout')
}, 3000);

//__dirname gives the absolute file path without the current file
console.log(__dirname);
//__filename gives the absolute file path with the current file
console.log(__filename);