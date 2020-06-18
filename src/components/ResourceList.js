import React from 'react';
import useResources from './useResource';

// Class based implementation
/* class ResourceList extends React.Component {
	state = {
		resources: []
	};

	async componentDidMount() {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
		console.log(response);
		this.setState({resources: response.data});
	}

	async componentDidUpdate(prevProps) {
		console.log(prevProps);
		console.log(this.props);
		if(this.props.resource !== prevProps.resource){
			const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
			this.setState({resources: response.data});
		}
	}

	render() {
		return (
			<div>
				{this.state.resources.length}
			</div>
		);
	}
} */

// Functional implementation without reuse
/* function renderList(resources) {
	return resources.map(record => {
		return <li key={record.id}>{record.title}</li>;
	})
}

const ResourceList = ({resourceType}) => {
	const [resources, setResources] = useState([]);

	const fetchResource = async (resourceType) => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
		console.log(response);
		setResources(response.data);
	}

	useEffect(() => {
		fetchResource(resourceType);
	}, [resourceType])

	return (
		<ul>
			{renderList(resources)}
		</ul>
	);
} */

// Functional implementation with reuse. Logic to fetch resources moved to useResources.
function renderList (resources) {
	return resources.map(record => {
		return <li key={record.id}>{record.title}</li>;
	})
}

const ResourceList = ({resourceType}) => {
	const resources = useResources(resourceType);

	return (
		<ul>
			{renderList(resources)}
		</ul>
	);
} 

export default ResourceList;