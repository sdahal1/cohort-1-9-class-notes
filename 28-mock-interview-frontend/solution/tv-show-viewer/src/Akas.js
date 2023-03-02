import React, {useEffect, useState} from 'react';

function Akas({id}) {
	const [akas, setAkas] = useState([]);
	
	useEffect(() => {
		console.log(`https://api.tvmaze.com/shows/${id}/akas`);
		fetch(`https://api.tvmaze.com/shows/${id}/akas`)
		.then(response => response.json())
		.then(data=> console.log(data) || data)
		.then(data => setAkas(data));
	}, [id])
	return <div>
		<h4>akas</h4>
		{akas.map(aka => <p>{aka.name} in {aka.country && aka.country.name}</p>)}
	</div>
}

export default Akas;
