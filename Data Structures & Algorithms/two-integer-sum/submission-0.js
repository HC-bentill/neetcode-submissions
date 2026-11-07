class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * Input ?
     * Exception Handling?
     * Process input using?(loops,maps,set,vars,arr,methods)
     * Output?arr:float
     * 
     * first
     */
    twoSum(nums, target) {
        let store = new Map();

        for(let i = 0; i < nums.length; i++){
            let remainderNeeded = target - nums[i];
            if(store.has(remainderNeeded)){
                return [store.get(remainderNeeded), i]
            }

            store.set(nums[i], i)
        }
    }
}
