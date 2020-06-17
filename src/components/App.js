import React, { useState } from 'react';

/* class App extends React.Component {
	state = {
		resource: 'posts'
	};

	render() {
		return(
			<div class="ui container">
				<div>
					<button onClick={() => this.setState({ resource: 'posts' })}>Posts</button>
					<button onClick={() => this.setState({ resource: 'todos' })}>Todos</button>
				</div>
				{this.state.resource}
			</div>
		);
	}
} */

const App = () => {
	const [resource, setResource] = useState('posts');
	return(
		<div className="ui container">
			<div>
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>Todos</button>
			</div>
			{resource}
		</div>
	);
}

export default App;