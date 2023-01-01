/*Approach 2: Using Hash Set
As a "set" data structure can only hold unique element (e.g:

    set.add("a")
    set.add("b")
    set.add("b")
    The set only record 1 b only    )
    The set only record 1 b only    )

we can check if the eles in the given array are present more than once by adding them to a set.
1. A set name "unique_set" is created to store the unique eles
2. The algo the iterates through the input arr nums
3. For each element "x" in the arr, the algo check if "x" is already in the "unique_set"
- If "x" is in the "unique_set", then the algo returns True, indicating that a duplicate has been found.
- If "x" is not in the "unique_set", then add "x" to the unique_set
4. The iteration continues until all eles in the arr have been processed. If no duplicates found, the algo return false.
*/
function containsDuplicate(nums) {
    const uniqueSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (uniqueSet.has(nums[i])) {
            return true;
        }
        uniqueSet.add(nums[i]);

    }
    return false;
}
const nums1 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1));
const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums2));
const nums3 = [];//expected to be false
console.log(containsDuplicate(nums3));
const num4 = [1, 1, 1, 1];
console.log(containsDuplicate(nums3));
/*Time complexity is O(N) where N is the number of eles in the input arr. This is because we iterate the array only once
Space Complexity: O(N), as it stores the numbers in a set.
*/



