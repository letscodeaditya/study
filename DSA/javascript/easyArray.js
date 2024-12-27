// 2053. Kth Distinct String in an Array
var kthDistinct = function(arr, k) {
    var hash = new Map();
    for(let i=0; i<arr.length; i++){
        hash.set(arr[i],(hash.get(arr[i])||0)+1)
    } 

    const result = [];

    for(const str of arr){
        if(hash.get(str) === 1){
            result.push(str)
        }
    }

    return result[k-1] || "";
       
};




