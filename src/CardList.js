import React from 'react'
import Card from './Card'

const CardList = ({	avengers })=>{

	let CardsArray=avengers.map((avenger,i)=>{
		return <Card heroName={avenger.heroName} name={avenger.name} key={i}/>
	})

	return <div>{CardsArray}</div>
}

export default CardList;