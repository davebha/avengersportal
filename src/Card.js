import React from 'react'
import Image from './Image'
import  Rightarrow from './Rightarrow'
import Downarrow from './Downarrow'
const Card = ({heroName,name})=>{

	return(
		<div className='tc bg-white dib br3 pa2 ma3 grow bw2 shadow-5'>
		<div >

				<Image   display={heroName}/>
				
		</div>
		<div className='fl-l'>
			<h1>{heroName}</h1>
				<h3>{name}</h3>
		</div>
		<div className='fr'>
			
			<Rightarrow />
		</div>
		<div>
			<Downarrow/>
		</div>
		</div>
		);
}

export default Card;

//<Image value=/>