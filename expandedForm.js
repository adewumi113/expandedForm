//https://www.codewars.com/kata/5842df8ccbd22792a4000245

/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 2"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    //convert number to string
    let x = num.toString()
    let expandedPart = []
    //loop through the string to get each character
    for(let i = 0; i < x.length; i++){
        const digit = x[i] //to get the current digit
        //to get the number of 0 to be placed after the digit
        const placeValue = x.length - i - 1
        if (digit !== '0'){
            expandedPart.push(digit + '0'.repeat(placeValue)) //add non-zero digit to the result
        }
    }
    return expandedPart.join(' + ') // join the array element with + and return the result
}
  
  
//Another solution
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
expandedForm(12);    // "10 + 2"
expandedForm(45);    // "40 + 5"
expandedForm(70304); // "70000 + 300 + 4"