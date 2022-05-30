exports.calculateMode = function(arr) {
    const numberMap = {};
    let greatestFreq = 0;
    let mode;
    arr.forEach(function numMap(number) {
        numberMap[number] = (numberMap[number] || 0) +1;
        if (greatestFreq < numberMap[number]) {
            greatestFreq = numberMap[number];
            mode = number;
          }
        })
    return mode;
 }
