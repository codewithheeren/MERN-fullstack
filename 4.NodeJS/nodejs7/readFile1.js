//reading data from
const fs = require("fs");

fs.readFile("./datafiles/sample.txt", (err, data) => {     //synchronous method
  if (err) {
    console.log("Error while reading data.")
  }
  else {
    console.log(data.toString());
  }

  var data =   fs.readFileSync("./datafiles/sample.txt");   //asynchronous method
  console.log(data.toString()); 
});

/*
readFile is a synchronous method-
which means that it blocks the main thread of the Node.js application until the file has been read completely. 
This can be a problem if the file is large or if the application needs to handle multiple file operations simultaneously, 
as it can lead to slow performance and potential blocking of other operations.

readFileAsync is an asynchronous method 
that does not block the main thread of the Node.js application. 
Instead, it uses callbacks or Promises to handle the file reading operation in the background, allowing the application to continue running 
while the file is being read. This can improve performance and prevent blocking of other operations.
*/
