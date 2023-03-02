import React, {useState} from 'react';
import Akas from './Akas';

function ShowDetail({show}) {
	const [showExtraDetails, setShowExtraDetails] = useState(false);
	const [showAkas, setShowAkas] = useState(false);
	return <div>
		<h3 className="title" onClick={() => setShowAkas(!showAkas)}>{show.name}</h3>
		{show.image ? 
			<img onClick={() => setShowExtraDetails(!showExtraDetails)} src={show.image.medium} /> 	
			: ''}
		{showExtraDetails ? <p>{show.type}: {show.status}</p> : ''}
		{showAkas && <Akas id={show.id} />}
	</div>
}

export default ShowDetail;
