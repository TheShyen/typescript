function repeat(text: string, count: number) {
	let result = '';
	for (let i = 0; i < count; i += 1) {
		result += text;
	}
	return result;
}
function getHiddenCard(card: string, count = 4): string {
	return '*'.repeat(count) + card.slice(-4);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getEvenNumbers(numberArr = numbers): number[] {
	return numberArr.filter((item) => item % 2 === 0);
}

function filterAnagrams(anagram: string, anagrams: string[]): string[] {
	const standard = anagram.split('').sort().join('');
	return anagrams.filter((item) => item.split('').sort().join('') === standard);
}

const course = {
	name: 'Java',
	lessons: ['variables', 'functions', 'conditions']
};
function isComplete(course: { name: string; lessons: string[] }): boolean {
	return course.lessons.length >= 4;
}
enum OrderStatus {
	Created = 'Браслеты',
	Paid = '1',
	Shipped = '2',
	Delivered = '3'
}

const statuses = Object.values(OrderStatus);
console.log(statuses); // ['Created', 'Paid', 'Shipped', 'Delivered']

console.log(OrderStatus.Created); // Браслеты

enum ModalStatus {
	Opened,
	Closed
}

function buildModal(
	text: string,
	status: ModalStatus
): { text: string; status: ModalStatus } {
	return { text, status };
}
