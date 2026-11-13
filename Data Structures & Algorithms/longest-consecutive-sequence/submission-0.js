class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {                      // [2, 20, 4, 10, 3, 4, 5]
        const set = new Set(nums);                  // {2, 20, 4, 10, 3, 5}
        let longest = 0;                            // 0

        for (const n of set) {                      // n: 2 → 20 → 4 → 10 → 3 → 5
            if (set.has(n - 1)) continue;           // skips 4, 3, 5 (they have n-1)

            let length = 1;                         // starts: 2, 20, 10
            while (set.has(n + length)) length++;   // 2 → 4  |  20 → 1  |  10 → 1

            longest = Math.max(longest, length);    // 4      |  4       |  4
        }

        return longest;                             
    }
}

