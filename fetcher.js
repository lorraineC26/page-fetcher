const url = process.argv[2];
const localFilePath = process.argv[3];

const request = require('request');
const fs = require('fs');


request(url, (error, response, body) =>{
  if (error) {
    console.log('error: ', error);
  }
  fs.writeFile(localFilePath, body, function(error) {
    if (error) {
      console.log('error: ', error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    }
  });
});