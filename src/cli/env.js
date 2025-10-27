const parseEnv = () => {
// Write your code here
  
  let result = Object.entries(process.env)
  .filter(([key]) => key.startsWith("RSS_"))
  .map(([key,value])=>`${key}=${value}`).join(';')

  console.log(result)
};

// //MOCK DATA FOR TEST
// process.env.RSS_arg1 = "value1"
// process.env.arg2 = "value2"
// process.env.RSS_arg3 = "value3"

parseEnv();