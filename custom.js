	window.onload = function() {
		document.querySelector('.btnStart').onclick = function() {
			training();
		}
	}

	function randomInt(min, max) {
			var length = max - min + 1;
			var rand = Math.floor(Math.random() * length) + min;
			return rand;
		}

	function matOp(a, b, op) {
		if (op == '+') {
			var res = a + b;
		}
		else if (op == '-') {
			var res = a - b;
		}
		else if (op == '*') {
			var res = a * b;
		}
		else if (op == '/') {
			if (b == 0) {
				var res = false;
				/* throw new */
			}
			else {
				var res = a / b;
				}
		}
		else {
			var res = false;
			/* throw new */
		}
		return res;
	}

function training() {

	var x, y, op, res, answer, answerStr, good = 0, error = 0, errors = [];
	var variants = ['+', '-', '*', '/'];

	for (var i = 0; i < 10; i++) {
		x = randomInt(1, 9);
		y = randomInt(1, 9);
		code = randomInt(0, 3);
		op = variants[code];
		res = matOp(x, y, op);

		do {
			answerStr = prompt(x + op + y + " = ?");
			answer = +answerStr;
		}
		while (answerStr == '' || isNaN(answer));

		if (res.toFixed(2) == answer.toFixed(2)) {
			good++;
		}
		else {
			error++;
			errors.push(x + op + y + " = " + res.toFixed(2) + ', and your answer ' + answer);
		}
	}

	document.querySelector('.good').innerHTML = '<h3>Correct answers - ' + good + '</h3>';
	document.querySelector('.bad').innerHTML = '<h3>Errors - ' + error + '</h3>';
	var divErrors = document.querySelector('.errors');
	divErrors.innerHTML = '';

	for(var i = 0; i < errors.length; i++) {
		divErrors.innerHTML += ('<p>' + errors[i] + '</p>');
	}
}