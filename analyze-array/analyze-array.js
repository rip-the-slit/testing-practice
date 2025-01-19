function analyzeArray(arr) {
  const result = { average: null, min: null, max: null, length: null };
  if (arr) {
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    let length = 0;
    for (const num of arr) {
      total += num;
      min = num < min ? num : min;
      max = num > max ? num : max;
      length++;
    }
    result.average = total / arr.length;
    result.min = min;
    result.max = max;
    result.length = length;
  }
  return result;
}

module.exports = analyzeArray;
