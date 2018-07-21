function recSum(nums) {
  if (!nums.length) return 0;
  return nums[0] + recSum(nums.splice(1));
}
