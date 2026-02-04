// Dynamic chunk size

// Rule
// 1st chunk size → 1
// 2nd → 2
// 3rd → 3

// Input :- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Output :- [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];

// 1st way
function dyanmicChunking(arr){
    const result = []
    let chunkSize = 1
    const lastChunk = arr.reduce((acc,curr)=>{
        if(acc.length==chunkSize){
            result.push(acc)
            acc = []
            chunkSize++
        }
        acc.push(curr)
        return acc
    },[])
    result.push(lastChunk)
    console.log(result)
}

// dyanmicChunking([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2nd way

function dyanmicChunking(arr){
    let offset = 0
    let idx = 0
    const result = arr.reduce((acc,curr,index)=>{
        if(index==idx){
            let temp = arr.slice(index,index+offset+1)
            acc.push(temp)
            idx+=temp.length
            offset++
        }
        return acc
    },[])
    console.log(result)
}


