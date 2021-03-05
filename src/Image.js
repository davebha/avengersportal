import React from 'react'

const Image = ({display})=>{
	
	switch(display){

		case 'Iron Man':
			return(
				<div>
					<img src='Iron_Man.jpg' width='200' height='400' alt='Iron Man'/>
				</div>
				);
		case 'Captain America':
			return(
				<div>
					<img src='Captain_America.jpg' width='200' height='400' alt='Captain America'/>
				</div>
				);

		case 'Hulk':
			return(
				<div>
					<img src='Hulk.jpg' width='200' height='400' alt='Hulk'/>
				</div>
				);

		case 'Thor':
			return(
				<div>
					<img src='Thor.jpg' width='200' height='400' alt='Thor'/>
				</div>
				);

		case 'Black Widow':
			return(
				<div>
					<img src='Black_Widow.jpg' width='200' height='400' alt='Black Widow'/>
				</div>
				);

		case 'Hawkeye':
			return(
				<div><img src='Hawkeye.png' width='200' height='400' alt='Hawkeye'/>
				</div>
				);

	    default:
			return(<div><img src='' width='200' height='400' alt='Err'/>
				</div>);

	}
}

export default Image;