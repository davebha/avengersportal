import React from 'react'
import Image from './Image'

const Card = ({heroName,name})=>{

	return(
		<div>
			<div>
				<Image display={heroName}/>
			</div>
			<div>
				<p>{name}</p>
			</div>
		</div>
		);
}

export default Card;

//<Image value=/>