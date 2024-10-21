//https://www.codewars.com/kata/5842df8ccbd22792a4000245

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
  
  
