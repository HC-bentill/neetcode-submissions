class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     *
     * Input -> [nums]
     * Exceptions? -> 32-bit integer
     * Data manipulation
     * Output -> [nums]
     */
    productExceptSelf(nums) {
        const n = nums.length; // 4
        const output = new Array(n).fill(1); // [1, 1, 1, 1]

        let left = 1;
        for (let i = 0; i < n; i++) {
            // i: 0 → 1 → 2 → 3
            output[i] = left; // left before × : 1 → 1 → 2 → 8
            left *= nums[i]; // left after  × : 1 → 2 → 8 → 48
        } // output = [1, 1, 2, 8]

        let right = 1;
        for (let i = n - 1; i >= 0; i--) {
            // i: 3 → 2 → 1 → 0
            output[i] *= right; // 8×1=8 → 2×6=12 → 1×24=24 → 1×48=48
            right *= nums[i]; // right: 6 → 24 → 48 → 48
        } // output = [48, 24, 12, 8]

        return output;
    }
}
