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
        let lookupStorage = new Map();

        for(let i = 0; i < strs.length; i++){
            let key = strs[i].split("").sort().join("");

            if(lookupStorage.has(key)){
                lookupStorage.get(key).push(strs[i]);
            }else{
                lookupStorage.set(key, [strs[i]]);
            }
        }

        return [...lookupStorage.values()];
    }
}
