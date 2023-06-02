const args = process.argv;
console.log(args);

args.forEach((arg, index) => {
    console.log('Argument ' + index + ': ' + arg);
});

if (process.argv.length === 2) {
    console.log("No numbers provided!");
    process.exit(1);
    }
else if(process.argv.length === 3){
    console.log("Only one number is provided!");
    process.exit(1);
}
else{
    function sum(){
        var sum = 0; 
        for(var i=2;i<process.argv.length;i++){
            if(isNaN(Number(process.argv[i]))){
                console.log("Invalid data");
                return;
            }
            else{
                sum = +sum + +process.argv[i];
            }
        }
        console.log("Sum of the numbers is: " + sum);
    }
    sum();
}