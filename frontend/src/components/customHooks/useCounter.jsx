import { useState } from "react";

const useCounter = () => {
	const [count, setCount] = useState(0);
	
	
	function handleIncrement() {
		setCount((count) => count + 1);

	};

	function handleDecrement() {
		setCount((count) => count - 1);

	};

	

	return {count, handleIncrement, handleDecrement};
}

export default useCounter;