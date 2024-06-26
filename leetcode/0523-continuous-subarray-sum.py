class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        seen = {0: -1}
        total = 0
        for i, num in enumerate(nums):
            total += num
            if k != 0:
                total %= k
            if total in seen:
                if i - seen[total] > 1:
                    return True
            else:
                seen[total] = i
        return False
