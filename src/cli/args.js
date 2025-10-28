//env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

const parseArgs = () => {
  // Write your code here
  let args = process.argv.slice(2);
  let result = [];
  for( let i = 0; i < args.length; i+=2)
  {
      result.push(`${args[i].slice(2)} is ${args[i+1]}`)
  }

  console.log(result.join(', '))
};

parseArgs();

//console.log(process)
//console.log(process.argv)