const url = "https://swapi.dev/api/people/?results:id";

const loading = document.querySelector(".loader");

const detailsContainer = document.querySelector(".details-container");

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const results = params.get("id");
console.log(results);

setTimeout(function () {
	loading.remove("loading");

	async function getDetails() {
		try {
			const response = await fetch(url);
			console.log(response);
			const outcome = await response.json();
			console.log(outcome);
			const people = outcome.results;
			console.log(people);

			detailsContainer.innerHTML = "";

			for (let i = 0; i < people.length; i++) {
				console.log(people[i].name);
				console.log(people[i].height);
				console.log(people[i].gender);
				console.log(people[i].hair_color);

				if (i === 10) {
					break;
				}
				detailsContainer.innerHTML += `
				<p>Name: ${people[i].name} Height: ${people[i].height}
				Gender: ${people[i].gender} Hair colour: ${people[i].hair_color}</p>
				`;
			}
		} catch (error) {
			console.log("error occured", error);
		}
	}
	getDetails();
}, 2000);
