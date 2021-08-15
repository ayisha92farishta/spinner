process.stdout.write("hello from spinner2.js... \rheyyy\n")

const spinArr = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ' ,'\r/   ' ,'\r-   ' ,'\r\\   ' ];

 for(let i = 0; i < spinArr.length; i++){
  
  setTimeout(() => process.stdout.write(spinArr[i]), 200 * i);
 }


