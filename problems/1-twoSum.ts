function twoSum(nums: number[], target: number): number[] {

    for(let i=0; i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){

            let num1=nums[i]!;
            let num2 = nums[j]!;
            let sum=num1+num2;

            if(sum===target){
                return [i,j]
            }
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15],9))
