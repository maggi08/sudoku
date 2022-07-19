const board = document.getElementById('board')
const map = []
const boardSize = 9
let count = 0
const randomNumber = (size) => {
  return Math.floor(Math.random() * size)
}

// const isInRow = (map, i, j, num) => {
//   console.log('isInRow', i, j, map[i][j] === num);
//   if (map[i].includes(num)) return true
//   return false
// }

// const initNumber = (map, i, j) => {
//   let num = randomNumber()
//   console.log('initNumber', i, j, num);
//   if (isInRow(map, i, j, num)) {
//     return initNumber(map, i, j, num)
//   }
//   return num
// }

// const initBoard = () => {
//   for (let i = 0; i < size; i++) {
//     map.push([])
//     for (let j = 0; j < size; j++) {
//       console.log(i, j, '---------------------------------------------------');
//       map[i].push(initNumber(map, i, j))
//     }
//   }
//   printBoard()

// }
const getIndex = (nums) => {
  let index = randomNumber(nums.length)

  return index
}

const initBoard = () => {
  for (let i = 0; i < boardSize; i++) {
    map[i] = []
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let j = 0; j < boardSize; j++) {
      let index = getIndex(nums)
      map[i].push(nums[index])
      nums.splice(index, 1)
      console.log(map);
    }
  }
}

const printBoard = () => {

  for (let i of map) {
    const line = document.createElement('div')
    line.className = 'line'
    board.appendChild(line)
    for (let j of i) {
      const cell = document.createElement("div");
      cell.className = 'cell'
      cell.innerHTML = j
      line.appendChild(cell)
    }
  }
}

initBoard()
printBoard()
