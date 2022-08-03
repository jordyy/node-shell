process.stdout.write('\nprompt > '); 

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); 
    
    if (cmd === 'pwd') { 
        const pwd = require('./pwd');
        pwd();
    } 

    if (cmd === 'ls') { 
        fs.readdir('./', 'utf8', (err, files) => {
            if(err) {
                throw err
            } else {
                const ls = require('./ls');
                ls();
                process.stdout.write("prompt > "); 
            }
        })
    } 

    
    process.stdout.write('\nprompt > ');  
  });