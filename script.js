var container = document.getElementById("container");

var DIALOG = {};
DIALOG.print = function(d) {
	DIALOG.current = d;

	container.innerHTML = "";

	d = DIALOG[d][DIALOG[d][0]];
	d = d.replace(/(?:\r\n|\r|\n)/g, '<br /><br />');
	d = d.replace(/([\[])/g, '<d>');
	d = d.replace(/([\]])/g, '</d>');
	d = d.replace(/([\{])/g, '<a onclick="DIALOG.next()">');
	d = d.replace(/([\}])/g, '</a>');
	d = d.replace("$name", data.name);

	let el = document.createElement("p");
	el.innerHTML = d;
	container.appendChild(el);

	let i = container.querySelector("input");

	if (i) {
		i.autocomplete = "off";
	}
};
DIALOG.next = function() {
	DIALOG[DIALOG.current][0]++;
	DIALOG.print(DIALOG.current)
};
DIALOG.current = "";

var INPUT = {};
INPUT.submit = function(el, effect) {
	el = el || document.querySelector("input") || null;
	if (!el) { return }

	effect = effect || INPUT[el.id];

	let t = el.value;

	if (t.trim()!="") {
		el.remove();
		effect(t);
	}

	DIALOG.next();
}

window.onkeydown = function(e) {
	e = e.keyCode;
	if (e === 13) {
		INPUT.submit()
	}
}

var data = {};