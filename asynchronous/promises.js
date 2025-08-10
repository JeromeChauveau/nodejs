'use strict';

// to show error thrown in Promise 
const p = new Promise((resolve, reject) => {
    throw new Error('unwanted');
});
// this works
try {
    await p;
} catch (error) {
    console.log(`caught the error: ${error}`);
}
console.log('after catch');

// to show async function returns a promise
async function delayed (val) {
    setTimeout(()=> console.log('this is delayed ' + val), 0)
}
async function anotherDelayed () { 
    return new Promise((resolve, reject) => {
        console.log('in anotherDelayed');
        resolve();
    });
}
delayed(1);
// Executed directly as Promise is resolved synchronously
anotherDelayed();
console.log('not delayed');

// check await impact
function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {console.log('timeout finished'); resolve()},0.5);
    })
}
async function callPromise() {
    await promise();
}
callPromise();
console.log('After callPromise');
