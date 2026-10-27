import { useState } from "react";

function useJoke() {
	const [joke, setJoke] = useState("");

	const handleJoke = async () => {
		const response = await fetch("https://api.chucknorris.io/jokes/random");

		const data = await response.json();

		setJoke(data.value);
	};

	return { joke, handleJoke };
}

export default useJoke;