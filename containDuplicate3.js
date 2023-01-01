/*Approach 3: Sorting
Another approach is to sort the arr first and then check for duplicates.
Iterate through the sorted arr, comparing each ele w/ the next one.
if any 2 of the eles the same => return true.
else => false
*/
var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
};

const nums1 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1));
const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums2));
const nums3 = [];//expected to be false
console.log(containsDuplicate(nums3));
const num4 = [1, 1, 1, 1];
console.log(containsDuplicate(nums3))
/*Time complexity O(NlogN) where N is the number of elements in the arr nums. This is because sorting the arr takes O(NlogN) time
Space complexity: O(1) or O(n) depending on the sorting algo used. If an in-place sorting algo is used, the space complexity will be O(1). If  a sorting algo that creates a new arr is used, the space complexity will be O(N), where N is the number of eles in the array nums
*/ 