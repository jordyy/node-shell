process.stdout.write('\nprompt > '); 

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); 
    
    if (cmd === 'pwd') { 
      const pwd = require('./pwd');
      pwd();
    } 

    if (cmd === 'ls') { 
      const ls = require('./ls');
      ls();
    } 

    if (cmd.includes('cat')) {
      //cat bash.js
      let arg = cmd.split(' ')
      //arg = ['cat', 'bash.js']
      const cat = require('./cat');
      cat(arg[1]);
    }

    process.stdout.write('\nprompt > ');  
  });