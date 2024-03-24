//Створити 5 масивів з різними типами даних
console.log('Створюємо 5 масивів з різними типами даних');
const array1 = [1, 2, 3]
const array2 = ['apple', 'orange', 'banana']
const array3 = [true, false, true,1]
const array4 = [null, undefined]
const array5 = [{ name: 'John' }, { name: 'Alice' }]

//Використати метод forEach()
console.log('Використати метод forEach()');
console.log(array1);
array1.forEach(element => console.log(element))
console.log('-');
console.log('-')
console.log('-')


//Використати метод map()
console.log('Використати метод map()')
console.log(array2);
const newArray2 = array2.map(element => element.toUpperCase())
console.log(newArray2)
console.log('-')
console.log('-')
console.log('-')

//Використати метод filter()
console.log('Використати метод filter()');
console.log(array3);
const filteredArray3 = array3.filter(element => typeof element === 'boolean')
console.log(filteredArray3)
console.log('-')
console.log('-')
console.log('-')

//Використати метод reduce()
console.log('Використати метод reduce()')
const sumArray1 = array1.reduce((acc, curr) => acc + curr, 0)
console.log(array1);
console.log(sumArray1)
console.log('-')
console.log('-')
console.log('-')

//Використати методи sort(), includes(), join()
console.log(array2);
console.log('Використати метод sort()')
const sortedArray2 = array2.sort()
console.log(sortedArray2)
console.log('Використати метод includes()')
console.log(array2.includes('banana'))
console.log('Використати метод join()')
console.log(array2.join(', '))
console.log('-')
console.log('-')
console.log('-')

console.log(
	'Функція яка приймає масив чисел та повертає суму - для виклику прописати sum'
)
function sum(numbers) {
	let total = 0
	for (let num of numbers) {
		total += num
	}
	return total
}
console.log('-')
console.log('-')
console.log('-')

// Створити функцію getSentence, яка буде приймати масив слів та повертати речення побудоване із слів вхідного масиву.
console.log(
	'Функція яка приймає масив слів та повертає речення - для виклику прописати getSentence'
)
function getSentence(words) {
	return words.join(' ')
}
console.log('-')
console.log('-')
console.log('-')

//Створити функцію sumNumArrays, яка буде приймати 2 масива чисел та повертати суму всіх чисел вхідних масивів
console.log(
	'Функція яка приймає 2 масиви чисел та повертає суму = для виклику прописати sumNumArrays'
)
function sumNumArrays(array1, array2) {
	let total = 0
	for (let num of array1) {
		total += num
	}
	for (let num of array2) {
		total += num
	}
	return total
}
console.log('-')
console.log('-')
console.log('-')

//Створити функцію welcomeUsers, яка буде приймати масива об’єктів з данимикористувачів та формувати привітання для кожного з них у вигляді нового масиву рядків.
console.log(
	"Функція яка приймає масив об'єктів з даними користувача та буде формувати привітання"
)
function welcomeUsers(users) {
	const greetings = []
	for (let user of users) {
		greetings.push(`Welcome, ${user.name}!`)
	}
	return greetings
}
