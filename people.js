var PEOPLE = {};

PEOPLE.list = {};

PEOPLE.names_female = ["Serena", "Keva", "Keerthana", "Sofie", "Sophia", "Anna", "Lina", "Amy", "Rosie", "Tushti", "Dhevina", "Phoebe", "Daphne", "Lexi", "Uju", "Atiya", "Eunhyo", "Seojin", "Zenna", "Soyeon", "Geunhee", "Chaeyoung", "Patricia", "Marion", "Erin"];

PEOPLE.names_male = ["Derek", "Andy", "Quedahm", "Junsoo", "Nick", "Ethan", "Tsukase", "Irfan", "Ilham", "Jon", "Donghwa"];

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