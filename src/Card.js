import React from 'react'
import Image from './Image'

const Card = ({heroName,name})=>{

	return(
		<div className='tc bg-white dib br3 pa2 ma3 grow bw2 shadow-5'>
			<Image display={heroName}/>
			<h1>{heroName}</h1>
			<h3>{name}</h3>
		</div>
		);
}

export default Card;

//<Image value=/>