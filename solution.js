// var data = [
//   [409, 194, 207, 470, 178],
//   [454, 235, 333, 511, 103],
//   [474, 293, 525, 372, 408],
//   [428, 4321, 2786, 6683, 3921],
//   [265, 262, 6206, 2207, 5712]
// ]

//  292 + 408 + 232 + 6255 + 5450

function checkSum(arr){
  let final = 0
  const differencesOfRows = []
  let difference = null
  arr.forEach(nesArr => {
    let max = nesArr[0]
    let min = nesArr[0]
    nesArr.forEach(num => {
    	if(num >= max){
    		max = num
        }

    	if(num <= min){
    		min = num
        }
    })
    difference = max - min
    differencesOfRows.push(difference)
  })
  differencesOfRows.forEach(num => {
    final += num
  })
  return final
}
