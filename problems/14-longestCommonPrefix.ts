function longestCommonPrefix(strs: string[]): string {
    
    let asscending = [];
    
    for(let i=0; i<strs.length-1;i++){

        if(strs[i]!.length > strs[i+1]!.length){
            let temp=strs[i+1]!;
            strs[i+1]=strs[i]!;
            strs[i]=temp;
        }
    };

    let commonPrefix: string = strs[0] ?? "";

    if(commonPrefix.length === 0){
        return commonPrefix
    }

    else{ for(let i=0; i<strs.length;i++){
            if(strs[i+1] == undefined || strs[i+1]!.startsWith(commonPrefix)){
                commonPrefix = commonPrefix
            }
            else{
                commonPrefix = commonPrefix?.slice(0,-1);
                i--;
            }

        }
    }

    if(commonPrefix.length==0){
        return ""
    }

    return commonPrefix
    
}

console.log(longestCommonPrefix(["reflower","flow","flight"]))
console.log(longestCommonPrefix(["a", "b"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))

