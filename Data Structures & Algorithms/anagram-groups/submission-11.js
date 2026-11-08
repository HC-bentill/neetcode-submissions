class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    /**
     * input
     * exception handling
     * data manpulation - loops, vars, maps, sets, if/else.
     * output
     */
    groupAnagrams(strs) {
        const mapStorage = new Map();

        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split("").sort().join("");
            if (mapStorage.has(key)) {
                mapStorage.get(key).push(strs[i]);
            } else {
                mapStorage.set(key, [strs[i]]);
            }
        }

        return [...mapStorage.values()];
    }
}
