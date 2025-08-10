'use strict';

// basic 
function log(input) {
    console.log(`log of ${input}`);
}

function logAndCallback(input, callback) {
    console.log(`first log of ${input}`);
    callback(input);
}

logAndCallback('test', log);