function romanToInt(s: string): number {
    
    let numMap = new Map<string, number>();
    numMap.set('I',1);
    numMap.set('V',5);
    numMap.set('X',10);
    numMap.set('L',50);
    numMap.set('C',100);
    numMap.set('D',500);
    numMap.set('M',1000);

    let total = 0;
    let numArray= [];
    let arraySum = [];

    for(let i:number=0; i<s.length;i++){
        let char = s[i];
        let val;
        if(char !== undefined){
            val = numMap.get(char);
            numArray.push(val);
        }
    } 

    console.log(numArray)

    for(let i=0; i<=numArray.length-1; i++){
        if(numArray[i]!== undefined){
            if(numArray[i]>=numArray[i+1]){
                total = total + numArray[i]
            }
            else if(i==numArray.length-1){
                total =  total + numArray[numArray.length-1]
            }
            else{
                total = total - numArray[i]
            }
        }
    }

    return total;

};

console.log(romanToInt("MMCCCXCIX"))