
import spawn from "child-process"
const spawnChildProcess = async (args) => {

  let child = spawn('node', './script.js', args)
   
  // Write your code here
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
