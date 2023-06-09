let x = 100;
let y = 20;

console.log("x = " + x);
console.log("y = " + y);

function isNumeric(x , y){
    if(isNaN(Number(x))){
        return true;
    }
    if(isNaN(Number(y))){
        return true;
    }
    return false;
}

function sum(x, y, callback) {
    setTimeout(function() {
        const numcheck = isNumeric(x,y);
        if(numcheck == true) {
            const error1 = new Error("Invalid data!");
            callback(error1);
        }
        else {
            result1 = x + y;
            callback(null, result1);
        }
    }, 500);
}

function multiply(x, y, callback) {
    setTimeout(function() {
        const numcheck = isNumeric(x,y);
        if(numcheck == true) {
            const error2 = new Error("Invalid data!");
            callback(error2);
        }
        else {
            result2 = x * y;
            callback(null, result2);
        }
    }, 1000);
}

function division(x, y, callback) {
    setTimeout(function() {
        const numcheck = isNumeric(x,y);
        if(numcheck == true) {
            const error3 = new Error("Invalid data!");
            callback(error3);
        }
        else {
            result3 = x / y;
            callback(null, result3);
        }
    }, 1500);
}

function subtraction(x, y, callback) {
    setTimeout(function() {
        const numcheck = isNumeric(x,y);
        if(numcheck == true) {
            const error4 = new Error("Invalid data!");
            callback(error4);
        }
        else {
            result4 = x - y;
            callback(null, result4);
        }
    }, 2000);
}

sum(x, y, function(err, data) {
    if(err) {
        console.log(err.message);
    }
    else {
        add = data;
        console.log('x + y = ' + add);
        multiply(x, y, function(err, data) {
            if(err) {
                console.log(err.message);
            }
            else {
                mul = data;
                console.log('x * y = ' + mul); 
                division(x, y, function(err, data) {
                    if(err) {
                        console.log(err.message);
                    }
                    else {
                        div = data;
                        console.log('x / y = ' + div);
                        subtraction(x, y, function(err, data) {
                            if(err) {
                                console.log(err.message);
                            }
                            else {
                                sub = data;
                                console.log('x - y = ' + sub);
                                console.log("Final result =" , add + mul + div + sub);
                            }
                        });
                    }
                });
            }
        });  
    }
});
