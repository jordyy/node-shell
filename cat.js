const fs = require('fs');

module.exports = function(path) {
  fs.readFile(path, (err, data) => {
    if(err) {
      throw err
    } else {
      process.stdout.write(data)
      process.stdout.write("prompt > "); 
    }
  })
}