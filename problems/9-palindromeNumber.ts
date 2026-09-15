function isPalindrome(x: number): boolean {
    if(x<0){
        return false;
    }
    else{
        let num:string = x.toString()
        let len = num.length
        for(let i=0; i<len;i++){
            if(num[i]!==num[num.length-i-1]){
                return false;
            }
        }
        return true;
       
    }
};

console.log(isPalindrome(1000021))
console.log(isPalindrome(22))
console.log(isPalindrome(121))
console.log(isPalindrome(0))
console.log(isPalindrome(20))
console.log(isPalindrome(-22))

