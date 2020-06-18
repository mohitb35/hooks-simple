import React from 'react';
import useResources from './useResource';


// Functional implementation with reuse. Logic to fetch resources moved to useResources.
function renderUsers(resources) {
	return resources.map(record => {
		return <li key={record.id}>{record.name}</li>;
	})
}

const UserList = ({resourceType = 'users'}) => {
	const resources = useResources(resourceType);
 
	return (
		<ul>
			{renderUsers(resources)}
		</ul>
	);
} 

export default UserList;