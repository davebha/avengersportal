import React from 'react'
import Image from './Image'

const Card = ({heroName,name})=>{

	return(
		<div className='tc bg-white dib br3 pa3 ma3 grow bw2 shadow-5'>
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