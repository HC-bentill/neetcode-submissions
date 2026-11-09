class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     *
     * input >> [nums], int
     * exception handling -> unique
     * data manipulation
     * output >> [nums]
     */
    topKFrequent(nums, k) {
        const lookupStorage = new Map();
        const output = [];

        for (let i = 0; i < nums.length; i++) {
            if (lookupStorage.has(nums[i])) {
                let currentCount = lookupStorage.get(nums[i]).count;
                lookupStorage.set(nums[i], { count: currentCount + 1 });
            } else {
                lookupStorage.set(nums[i], { count: 1 });
            }
        }

        return [...lookupStorage.entries()]
            .sort((a, b) => b[1].count - a[1].count) 
            .slice(0, k)
            .map((element) =>  element[0])
    }
}
