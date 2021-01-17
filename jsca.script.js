const url = "https://swapi.dev/api/people/?:id/";

const castContainer = document.querySelector(".people");

const loading = document.querySelector(".loader");
setTimeout(function () {
	loading.remove("loading");

	async function getStarWarsCast() {
		try {
			const response = await fetch(url);
			const outcome = await response.json();
			const people = outcome.results;

			castContainer.innerHTML = "";

			for (let i = 0; i < people.length; i++) {
				console.log(people[i].name);

				if (i === 10) {
					break;
				}

				castContainer.innerHTML += `
			<p>Name: ${people[i].name}</p> 
			`;
			}
		} catch (error) {
			console.log("error occured", error);
		}
	}
	getStarWarsCast();
}, 2000);
