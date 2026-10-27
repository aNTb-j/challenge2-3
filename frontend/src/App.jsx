
import useCounter from "./components/customHooks/useCounter";
import useJoke from "./components/customHooks/useJoke";

export default function App() {

	const { count, handleIncrement, handleDecrement } = useCounter();

	const { joke, handleJoke } = useJoke();

	return (
		<>
			<p>Count is {count}</p>
			<p>{count % 5 ? " " : count != 0 ? "You Win" : " "}</p>
			<button onClick={handleIncrement}>
				+
			</button>
			<button onClick={handleDecrement}>
				-
			</button>

			
			<br></br>
			<button onClick={handleJoke}>
				Dame un chiste
			</button>
			<p>{joke}</p>

		</>
	);
}
