import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
	getDatabase,
	ref,
	push,
	onValue,
	remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
let hafumaka = document.getElementById("hafumaka");
let alone = document.getElementById("alone");
let disturb = document.getElementById("disturb");
let total = document.getElementById("total");
let textId;
let hafumakaCount = parseInt(hafumaka.innerHTML);
let aloneCount = parseInt(alone.innerHTML);
let disturbCount = parseInt(disturb.innerHTML);
let totalCount = hafumakaCount + aloneCount + disturbCount;

// Function to update the counter and save to localStorage
function updateCounter(buttonId) {
	console.log(buttonId);
	if (buttonId === "button1") {
		textId = "hafumaka";
		const button = document.getElementById(buttonId);
		hafumakaCount = parseInt(hafumaka.innerHTML);
		hafumakaCount++;
		totalCount += 1;
		hafumaka.innerHTML = hafumakaCount;
		localStorage.setItem(buttonId, hafumakaCount);
		console.log(hafumakaCount);
	} else if (buttonId === "button2") {
		textId = "alone";
		const button = document.getElementById(buttonId);
		aloneCount = parseInt(alone.innerHTML);
		aloneCount++;
		totalCount += 1;
		alone.innerHTML = aloneCount;
		localStorage.setItem(buttonId, aloneCount);
	} else if (buttonId === "button3") {
		textId = "disturb";
		const button = document.getElementById(buttonId);
		disturbCount = parseInt(disturb.innerHTML);
		totalCount += 1;
		disturbCount++;
		disturb.innerHTML = disturbCount;
		localStorage.setItem(buttonId, disturbCount);
	}
}

// Function to calculate the total count from local storage
function calculateTotalCount() {
	let hafumakaCount = parseInt(localStorage.getItem("button1")) || 0;
	let aloneCount = parseInt(localStorage.getItem("button2")) || 0;
	let disturbCount = parseInt(localStorage.getItem("button3")) || 0;
	return hafumakaCount + aloneCount + disturbCount;
}

// Function to update the total count element
function updateTotal() {
	const totalCount = calculateTotalCount();
	total.innerHTML = totalCount;
}

// Initialize the total count
updateTotal();

// Add click event listeners to the buttons
for (let i = 1; i <= 3; i++) {
	const buttonId = `button${i}`;
	const button = document.getElementById(buttonId);
	button.addEventListener("click", () => {
		updateCounter(buttonId);
		updateTotal();
	});
}

// Initialize the counters from localStorage
for (let i = 1; i <= 3; i++) {
	const buttonId = `button${i}`;
	const storedCount = localStorage.getItem(buttonId);
	if (storedCount !== null) {
		if (buttonId === "button1") {
			hafumaka.innerHTML = storedCount;
		} else if (buttonId === "button2") {
			alone.innerHTML = storedCount;
		} else if (buttonId === "button3") {
			disturb.innerHTML = storedCount;
		}
	}
}
