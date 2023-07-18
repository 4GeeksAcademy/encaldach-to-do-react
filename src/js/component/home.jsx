import React, {useState} from "react";

const Home = () => {
	const [ inputValue, setImputValue ] = useState("");
	const [ todos, setTodos ] = useState([]);

	return (
		<div className="container">
			<h1>My Todos {inputValue} </h1>
			<ul>
				<li>
					<input 
					type="text"
					onChange={(e) => setImputValue(e.target.inputValue)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key == "Enter") {
							setTodos(todos.concat(inputValue));
							setInputValue("");
						} 
					}}
					placeholder="what do you need to do?"></input>
				</li>
				{todos.map((t) => (	
				<li> 
					{t} <i class="fas fa-trash-alt"></i>
				</li>
				))}
			</ul>
			<div>23 task</div>
		</div>
	);
};

export default Home;