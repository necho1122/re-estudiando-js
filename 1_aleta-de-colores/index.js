const hexCodeBase = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
];

function handleColorChange() {
	let hexColorArr = [];

	while (hexColorArr.length <= 5) {
		hexColorArr.push(
			hexCodeBase[Math.floor(Math.random() * hexCodeBase.length)]
		);
	}

	const hexColor = '#' + hexColorArr.join('');

	const containerColor = document.getElementById('container');
	containerColor.style.backgroundColor = hexColor;
}
