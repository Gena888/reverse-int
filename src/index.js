module.exports = function reverse (n) {
    let num = Math.abs(n)
    let numStr = num.toString()
    let numArr = numStr.split('')
    let numArrRev = numArr.reverse()
    let newNum = numArrRev.join('')
    
    return newNum
}
