const f_names = 'txts/f_names.txt';
const m_names = 'txts/m_names.txt';

var PEOPLE = {};

PEOPLE.list = {};

PEOPLE.names_female;
fetch(f_names)
	.then( r => r.text() )
	.then( t => PEOPLE.names_female = t );
console.log(f_names);

PEOPLE.names_male;
fetch(m_names)
	.then( r => r.text() )
	.then( t => PEOPLE.names_male = t );
console.log(m_names);

PEOPLE.names_used = [];

PEOPLE.generate = function() {
	let g;
	let cointoss = Math.floor(Math.random()*3);
	if (cointoss==0) {
		g = "female";
	} else if (cointoss==1) {
		g = "male";
	} else {
		g = false;
	}

	let name;
	if (g) {
		name = PEOPLE["names_"+g][Math.floor(Math.random*PEOPLE["names_"+g].length)];

	} else {
		let cointoss = Math.floor(Math.random()*2);
		if (cointoss==0) {
			name = PEOPLE.names_female[Math.floor(Math.random*PEOPLE.names_female.length)];
		} else {
			name = PEOPLE.names_female[Math.floor(Math.random*PEOPLE.names_male.length)];
		}
	}

	PEOPLE.list.name = {};
	let l = PEOPLE.list.name;
	l.gender = g;
}