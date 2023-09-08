//writing data from
const fs = require('fs');

// Synchronous write to file
try {
  fs.writeFileSync('./datafiles/sample-sync.txt', 'Data written to file synchronously!', 'utf8');
  console.log('Data written to file synchronously!');
} catch (error) {
  console.error('Error while writing data:', error);
}

// Asynchronous write to file
fs.writeFile('./datafiles/sample-async.txt', 'Data written to file asynchronously!', 'utf8', (error) => {
  if (error) {
    console.error('Error while writing data:', error);
  } else {
    console.log('Data written to file asynchronously!');
  }
});


