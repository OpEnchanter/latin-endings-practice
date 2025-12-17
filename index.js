function checkAnswers(answers) {
	const scoreReadout = document.getElementById("score");
	idx = 0;
	totalCorrect = 0;
	document.querySelectorAll("td").forEach((cell) => {
		let input = cell.querySelector("input");
		if (input.value == answers[idx] || input.value == answers[idx].replace("-", "")) {
			cell.style.background = `#dfefdf`;
			cell.style.setProperty('--icon', 'url("/check.png")');
			totalCorrect++;
		} else {
			cell.style.setProperty('--icon', 'url("/x.png")');
			cell.style.background = `#efdfdf`;
		}
		scoreReadout.innerText = `${Math.floor((totalCorrect/30)*100)}%`;
		idx++;
	});
}

function reset() {
	const scoreReadout = document.getElementById("score");
	document.querySelectorAll("td").forEach((cell) => {
		cell.style.setProperty('--icon', 'none');
		let input = cell.querySelector("input");
		cell.style.background = "white";

		input.value = "";
		scoreReadout.innerText = "";
	});
}

function showAnswers(answers) {
	idx = 0;
	document.querySelectorAll("td").forEach((cell) => {
		cell.style.setProperty('--icon', 'none');
		cell.style.background = "#dfdfef";
		let input = cell.querySelector("input");
		input.value = answers[idx];
		idx++;
	});
}
