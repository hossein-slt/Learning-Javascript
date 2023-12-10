// It iterates throw out the array, and find two numbers which are add togetherand equals to our target.
// One thing that i learned is that i have to be more careful in naming of functions.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const pairNum = target - nums[i];
        const indexOfNum = nums.indexOf(pairNum);

    if (indexOfNum !== -1 && indexOfNum !== i) {
        return [i, indexOfNum];
    };    
    };
};

console.log(twoSum([1, 4, 8, 12], 12)) //expected result => [1, 2] which are the index for number 4 and 8.
console.log(twoSum([2, 3, 7, 6, 9], 12)) // expected result => [1, 4] which are the index for number 3 andf 9 .