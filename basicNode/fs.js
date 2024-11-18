const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

// writing files
fs.writeFile('./docs/blog2.txt', 'hello, Solomon', () => {
  console.log('file was written');
});

// directories
if (!fs.existsSync('./assets')){
  fs.mkdir('./assets', (error) => {
    if (error) {
      console.log(error);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (error) => {
    if (error) {
      console.log(error);
    }
    console.log('removed dir');
  });
};

// delete files
if (fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}else{
  fs.writeFile('./docs/deleteme.txt', '', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file created')
  })
};  