// array method
let str = " Apple , Banana , Kiwi , Banana , Pineapple ";
let str1 = "Mango"

string = str.length
console.log(string);//returns length of string

fruits = str.replace("Apple","Grapes")
console.log(fruits);//replace

upperCase = str.toUpperCase();
console.log(upperCase);//convert into uppercase

lowerCase = str.toLowerCase();
console.log(lowerCase);//convert into lowercase

Concat = str.concat(" , " , str1)
console.log(Concat); //join two string

Trim = str.trim(str)
console.log(Trim); //remove whitespace

CharAt = str.charAt(3)
console.log(CharAt) //returns character at index position

CharCodeAt = str.charCodeAt(3)
console.log(CharCodeAt) //returns character at index position

Split = str.split()
console.log(Split)//return an array
Split = str.split(',')
console.log(Split)

Index = str.indexOf("B")
console.log(Index)//return indexing of that position

LastIndex = str.lastIndexOf("B")
console.log(LastIndex)//return indexing of that position

Start = str.startsWith(" Apple")
console.log(Start);

End = str.endsWith("Mango")
console.log(End);

Slice = str.slice(1,6)
console.log(Slice);//return extracted part of the string

Substring = str.substring(1,6)
console.log(Substring);//it will not take negative parameter

Substr = str.substr(1,6)
console.log(Substr);//it will take two parameter one is starting element and second one is count the element

Includes = str.includes("Orange")
console.log(Includes);//it will return true or false

Search = str.search("Banana")
console.log(Search);//it search an element

let str2 = "5"
padStart = str2.padStart(5,4)
console.log(padStart);
padEnd = str2.padEnd(5,4)
console.log(padEnd);






