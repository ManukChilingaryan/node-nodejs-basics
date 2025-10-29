import { spawn } from 'node:child_process';
import { stdin, stdout,argv } from 'node:process';

let args = argv.slice(2);

export const spawnChildProcess = (args) => {
  // Create the child process
  const child = spawn('node', ['./files/script.js', ...args], {
    stdio: ['pipe', 'pipe', 'inherit'], // <-- gives us streams for communication
  });

  // Listen for data coming FROM the child
  child.stdout.on('data', (data) => {
    console.log(`Child says: ${data.toString().trim()}`);
  });

  // Send data TO the child (connect parent's stdin to child's stdin)
  stdin.on('data', (data) => {
    child.stdin.write(data);
  });

  // Detect when child exits
  child.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
};
spawnChildProcess(args);
console.log("===============================================")
