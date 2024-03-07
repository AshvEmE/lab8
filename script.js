
const array1 = [1, 2, 3]
const array2 = ['apple', 'banana', 'orange']
const array3 = [true, false, true]
const array4 = [null, undefined]
const array5 = [{ name: 'John' }, { name: 'Alice' }]


array1.forEach(element => console.log(element))


const newArray2 = array2.map(element => element.toUpperCase())
console.log(newArray2)


const filteredArray3 = array3.filter(element => typeof element === 'boolean')
console.log(filteredArray3)


const sumArray1 = array1.reduce((acc, curr) => acc + curr, 0)
console.log(sumArray1)


const sortedArray2 = array2.sort()
console.log(sortedArray2)
console.log(array2.includes('banana'))
console.log(array2.join(', '))


function sum(array) {
	return array.map(Number).reduce((acc, curr) => acc + curr, 0)
}


function getSentence(words) {
	return words.reduce((sentence, word) => sentence + ' ' + word, '').trim()
}


function sumNumArrays(array1, array2) {
	return array1.concat(array2).reduce((acc, curr) => acc + curr, 0)
}


function welcomeUsers(users) {
	return users.map(user => `Welcome, ${user.name}!`)
}

