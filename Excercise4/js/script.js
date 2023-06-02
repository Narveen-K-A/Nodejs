let x = 100;
let y = 20;

console.log("x = " + x);
console.log("y = " + y);

function isNumeric(x , y) {
    if(isNaN(Number(x))) {
        return true;
    }
    if(isNaN(Number(y))) {
        return true;
    }
    return false;
}

function getSumNum(x, y) {
    const customPromise = new Promise((resolve, reject) => {
        const numcheck = isNumeric(x,y);
        if(numcheck == false) {
            result1 = x + y;
            resolve(result1);
        } 
        else {
            reject(new Error("Invalid data!"))
        }
        })
    return customPromise
}

function getMulNum(x, y) {
    const customPromise = new Promise((resolve, reject) => {
        const numcheck = isNumeric(x,y);
        if(numcheck == false) {
            result2 = x * y;
            resolve(result2);
        } 
        else {
            reject(new Error("Invalid data!"))
        }
        })
    return customPromise
}

function getDivNum(x, y) {
    const customPromise = new Promise((resolve, reject) => {
        const numcheck = isNumeric(x,y);
        if(numcheck == false) {
            result3 = x / y;
            resolve(result3);
        } 
        else {
            reject(new Error("Invalid data!"))
        }
        })
    return customPromise
}

function getSubNum(x, y) {
    const customPromise = new Promise((resolve, reject) => {
        const numcheck = isNumeric(x,y);
        if(numcheck == false) {
            result4 = x - y;
            resolve(result4);
        } 
        else {
            reject(new Error("Invalid data!"))
        }
        })
    return customPromise
}

getSumNum(x, y).then(data => {
    result1 = data;
    console.log(result1)
    getMulNum(x, y).then(data => {
        result2 = data;
        console.log(result2)
        getDivNum(x, y).then(data => {
            result3 = data;
            console.log(result3)
            getSubNum(x, y).then(data => {
                result4 = data;
                console.log(result4)
                console.log("Final result =" , result1 + result2 + result3 + result4)
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})
.catch(err => {
    console.log(err)
})

