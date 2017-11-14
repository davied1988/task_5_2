var a = 5,
	b = 8,
	value = (a * a) - (2 * a * b) + (b * b);
	
console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0 ) {
    console.log('wynik ujemny');
} else if (value === 0) {
	console.log('wynik równy 0');
} else {
	console.log('inny wynik');
}
