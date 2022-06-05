exports.padArray = function (arr, minSize, value=undefined) {

    if (arr.length < minSize) {
        let answer = arr
        for (let i = 0; minSize > arr.length; i++) {
            answer.push(value)
        }
        return answer
    } else {
        return arr
    }  

}
console.log(this.padArray([1,2,3],5))
