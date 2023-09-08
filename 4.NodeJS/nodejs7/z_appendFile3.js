const fs = require('fs');

// Synchronous append to file
try {
  fs.appendFileSync('./datafiles/sample-sync.txt', '\nData appended to file synchronously!', 'utf8');
  console.log('Data appended to file synchronously!');
} catch (error) {
  console.error('Error while appending data:', error);
}

// Asynchronous append to file
fs.appendFile('./datafiles/sample-async.txt', '\nData appended to file asynchronously!', 'utf8', (error) => {
  if (error) {
    console.error('Error while appending data:', error);
  } else {
    console.log('Data appended to file asynchronously!');
  }
});


/* following oprations need to perform from page 55 to 60
deleting data in Files
deleteing files
open file 
*/ 