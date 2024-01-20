function twoSum(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }

    // No solution found
    return [];
}

// Get user input
const numsString = prompt("Enter an array of integers (comma-separated):");
const target = parseInt(prompt("Enter the target sum:"));

// Convert the input string to an array of integers
const nums = numsString.split(',').map(Number);

// Call the twoSum function with user input
const result = twoSum(nums, target);

// Display the result
console.log("Output:", result);
