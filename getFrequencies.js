
const getFrequencies = (arr) => {
    var freq = new Object();
    for (x of arr) {
      console.log(x);
      if (freq.hasOwnProperty(x)) {
        freq[String(x)]++;
      }
      else {
        freq[String(x)] = 1;
      }
    }
    return freq;
};

module.exports = getFrequencies;
