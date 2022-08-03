process.stdout.write('prompt > '); 

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); 
    const pwdOP = console.log(process.cwd());

    if (data === 'pwd') { 
        process.stdout.write(console.log(process.cwd()));
    }  
    
    process.stdout.write('\nprompt > ');
});
