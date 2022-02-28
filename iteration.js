//Array iteration

//forEach - calls a function once for each array element
let fruits = ["Apple" , "Mango" , "Banana" , "Grapes"]

let text = ""
fruits.forEach(myFunction);
document.write(text)

function myFunction(value, index , array) {
    text += value + "<br>";
    text +=index + "<br>";
    text +=array + "<br>";
};

//map - It is used to iterate over an array and calling function on every element of array.
let numbers = [ 34, 54, 52, 76, 97]
const numbers1 = numbers.map(mulOfArray);

document.write ("<br>" + numbers1 +  "<br>");

function mulOfArray(value, index, array) {
  return value * 2;
}

//filter - array which satisfy a condition by the argument. 
let data = [ 13 , 23, 43 , 10, 34]
let over18 = data.filter(age)

document.write("<br>" + over18 + "<br>")

function age(value, index, array) {
    return value >=18;
}

//reduce - reduce the array to a single value and executes a provided function for each value of the array (works left-to-right)
let arr = [10, 20, 30, 40, 50, 60];
let array = arr.reduce(sumofArray);

document.write("<br>" + array + "<br>");

function sumofArray(sum, num) {
            return sum + num;
        }
        
//reduceRight - (works right-to-left )
let arr1 = [20, 40, 60, 80 , 100];
let array1 = arr1.reduceRight(arraySum);

document.write("<br>" + array1 + "<br>");

function arraySum(sum, num) {
            return sum + num;
}

//every - method checks if all array values pass a test( gives true or false)
let ages = [5, 10, 60, 80 , 100];
let Over18 = ages.every(finalAge);

document.write("<br>" + Over18 + "<br>")
function finalAge(value,index,arr){
    return value > 18;
}

//some - checks if some array values pass a test( gives true or false)
let num = [6, 44, 9, 6, 16, 25];
let someOver18 = num.some(someAges);

document.write("<br>" + someOver18 + "<br>");

function someAges(value, index, array) {
  return value > 18;
}

//indexof - it will gives index and if not exist, then it will return -1
console.log(num.indexOf(9))

//lastIndexOf - it will give us last given item index and it will give preference to last visit
console.log(num.lastIndexOf(6))

//find - returns the value of the first array element that passes a test function
let number = [10, 20, 30, 40, 50];
    var found = number.find(function (element) {
        return element > 20;
    });
 
    document.write("<br>" + found + "<br>");

//findIndexof - returns the index of the first array element that passes a test function
let num1 = [4, 9, 16, 25, 29];
let num2 = num1.findIndex(myFunc);
document.write("<br>"+ num2);

function myFunc(value, index, array) {
  return value > 18;
}
