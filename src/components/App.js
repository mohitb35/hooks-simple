import React, { useState } from 'react';
import ResourceList from './ResourceList';

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
	const [resourceType, setResourceType] = useState('posts');
	return(
		<div className="ui container">
			<div>
				<button onClick={() => setResourceType('posts')}>Posts</button>
				<button onClick={() => setResourceType('todos')}>Todos</button>
			</div>
			<ResourceList resourceType={resourceType}/>
		</div>
	);
}

export default App;