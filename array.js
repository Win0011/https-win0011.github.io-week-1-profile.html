// to reverse an array

let arr1 = [2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55]
arr1.reverse()

console.log(arr1)




//To find maximum and minimum number in an array

function findMaxMin(arr2){
    let max = arr2[0]
    let min = arr2[0] 
    for(let elements of arr2){

        max = (elements > max) ? elements : max
        min = (elements < min) ? elements : min


    }

    return{max, min}
}


const arr2 = [2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55]
const result = findMaxMin(arr2)
console.log("MAXIMUM:",result.max,  "MINIMUM:",result.min)




// filter and odd number in array
 
const arr3 = [2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55]


const filterarray = arr3.filter(element => element % 2 !== 0)
console.log(filterarray)



  //sum all positive number

const arr4 = [2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55]


let sum = arr4.reduce((a,b) => b > 0 ? a + b : a, 0)  

console.log(sum)

// sum all postive number excluding negative number and 0 

let Sum1 = arr4.reduce((a,b) => 

b > 0 ? a + b : a, 

0)

console.log(Sum1)




// unique values and removing dublicate

const removeDuplicate = arr5 => [...new Set(arr5)]
const arr5 = [2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55]
const answer = removeDuplicate(arr5)
console.log(answer)







 //flattenArray

const flattenArray = (nestedArray) => [].concat(...nestedArray.map(val => Array.isArray(val) ? flattenArray(val) : val))

const nestedArray = [1, [2, 3], [4, [5, 6]]]
const flattenedArray = flattenArray(nestedArray)
console.log(flattenedArray)






// merge array

const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);


const sortedArray1 = [1, 3, 5]
const sortedArray2 = [2, 4, 6]
const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2)
console.log(mergedArray)









 







