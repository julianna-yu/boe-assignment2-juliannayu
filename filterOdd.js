const filterOdd = (nums) => {
  let ans = nums.filter (num => num % 2 == 1);
  return ans;
};

module.exports = filterOdd;
