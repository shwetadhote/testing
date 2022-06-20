let arr = [1, 2, 3, 4, 5, 6, 'Mango', 'Apple'];
let arr2 = ['b', 'a', 'c', 'd', 'e'];
console.log(arr)
console.log(arr.length) // 11
console.log(arr.pop()) // it will pop last element from the array
console.log(arr.push()) // it will push element at the end position
console.log(arr.shift()) // it will remove first element from the array and return shifted element
console.log(arr.unshift('Grapes')) // method adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(arr.splice(10, 1, 11)) // The splice() method can be used to add new items to an array and it is return deleted items
console.log(arr.sort()) // its sorts element in ascending order but for number it will give us a wrong sorting order
console.log(arr2.sort()) // now it will work properly
console.log(arr.concat(arr2)) // it will join element
console.log(arr.slice(0, 5)) // it is return sliced items and it takes two parameter (start, end)
console.log(arr[0]) // access element by indexing and indexing will start from zero(0)

let result = arr.toString() // output - 1,2,3,4,5,6,7,8,9,10,abc
console.log(typeof result) // it gives us type of as string
console.log(arr.indexOf(5)) // it will give us index and if not exist, then it will return -1
console.log(arr.lastIndexOf(10)) // it will give us last given item index and it will give preference to last visit
console.log(arr.includes(2)) // it will give us boolean output if given item is exist, otherwise it will give us false
console.log(arr.splice(10, 1, 11))
console.log(arr)






