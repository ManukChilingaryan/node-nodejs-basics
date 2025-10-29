
import fs from "fs/promises"
const create = async () => {
  // Write your code here
  try {
    await fs.writeFile('./files/fresh.txt',"I am frash and young",{ flag: 'wx' });
  }
  catch(err){
    if(err.code === "EEXIST")
      
      {
        console.error("error: FILE ALREADY EXIST");
      }
      else console.error("something wrong happens:", err)
  }
};

await create();
