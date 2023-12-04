// Конспект по доке TS
// Everyday Types
// Примитивы: string, number, boolean
// Массивы
let testArray1: string[] = ['1', '2', 'aboba'];

// Тип any
// Когда значение имеет тип any, мы можем получить доступ к любым его свойствам (которые тожу будут иметь тип any), вызвать его как функцию, присвоить ему (или из него) значение любого типа и практически что угодно еще, что синтаксически допустимо.
// Пример
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;
// Флаг компилятора noImplicitAny помечает любое неявное any значение как ошибку

// Функции

// Типизация параметров
function greet(name: string) {
	console.log('Hello, ' + name.toUpperCase() + '!!');
}

greet(42); // Argument of type 'number' is not assignable to parameter of type 'string'.

// Типизация возвращаемого значения
function getFavoriteNumber(): number {
	return 26;
}

//Функции, возвращающие промис
async function getFavoriteNumber1(): Promise<number> {
	return 26;
}

// Анонимные функции.
// Когда функция появляется в месте, где TypeScript может определить, как она будет вызвана, параметрам этой функции автоматически присваиваются типы.
// Этот процесс называется contextual typing
// Пример:

const names = ['Alice', 'Bob', 'Eve'];

names.forEach(function (s) {
	console.log(s.toUpperCase());
});

names.forEach((s) => {
	console.log(s.toUpperCase());
});

// Object type.
// Чтобы определить тип объекта, мы просто перечисляем его свойства и их типы. Если не укажем тип, то автоматически подставится any
function printCoord(pt: { x: number; y: number }) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Типы объектов также могут указывать, что некоторые или все их свойства являются необязательными. Для этого добавьте ? после имени свойства.
function printName(obj: { first: string; last?: string }) {}
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });

// В JavaScript, если мы обращаемся к несуществующему свойству, мы получаем значение undefined, а не ошибку времени выполнения.
// Из-за этого, когда мы читаем из необязательного свойства, нам нужно проверить его на undefined перед его использованием.
function printName1(obj: { first: string; last?: string }) {
	// Ошибка, если не был указан obj.last
	console.log(obj.last.toUpperCase());
	// 'obj.last' is possibly 'undefined'.
	if (obj.last !== undefined) {
		// OK
		console.log(obj.last.toUpperCase());
	}

	// Безопасная альтернатива, использующая современный синтаксис JavaScript
	console.log(obj.last?.toUpperCase());
}

// Union Types
// Union type - это тип, сформированный из двух или более других типов, представляющий значения, которые могут быть любым из этих типов.
function printId(id: number | string) {
	console.log('Your ID is: ' + id);
}
// OK
printId(101);
// OK
printId('202');
// Error
printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

// TypeScript разрешает операцию, только если она действительна для каждого члена union type
function printId1(id: number | string) {
	console.log(id.toUpperCase());
	//Property 'toUpperCase' does not exist on type 'string | number'.
	//Property 'toUpperCase' does not exist on type 'number'.
}
// Решение состоит в том, чтобы сузить объединение с помощью кода, так же, как вы бы делали в JavaScript без аннотаций типов
function printId2(id: number | string) {
	if (typeof id === 'string') {
		// 'string'
		console.log(id.toUpperCase());
	} else {
		//'number'
		console.log(id);
	}
}

// Type Aliases

type Point = {
	x: number;
	y: number;
};

function printCoord(pt: Point) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

type ID = number | string;

// Interfaces

interface Point {
	x: number;
	y: number;
}

function printCoord1(pt: Point) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Разлиичия между Type Aliases and Interfaces

//Расширение интерфейса

interface Animal {
	name: string;
}

interface Bear extends Animal {
	honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

//Расширение типа с помощью пересечений

type Animal = {
	name: string;
};

type Bear = Animal & {
	honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;

//Добавление новых полей в существующий интерфейс

interface Window {
	title: string;
}

interface Window {
	ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// Тип не может быть изменен после его создания

type Window = {
	title: string;
};

type Window = {
	ts: TypeScriptAPI;
};

// Error: Duplicate identifier 'Window'.
