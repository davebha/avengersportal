import React from 'react';

const Connections = ({ data })=>{



const processData=()=>{
	let imageName=null;
	let elements= [];
	let imagePath;
	//let ext = null;

	for(let  item in data){
		imageName=data[item].split(" ");
		imageName=`${imageName[0]}_${imageName[1]}`
		imagePath=`${imageName}.png`
		
		//?  :
		//imagePath=isValidPath(imageName,'png');

			
			
			

		elements.push(<img className='grow' src={imagePath} width='200' height='400' alt={`${imageName}`}/>)
		elements.push(<h3 key={item} className='gray'>{data[item]}</h3>);

	}
	
 return elements;
}
return (<div>{processData()}</div>);
}
export default Connections;

