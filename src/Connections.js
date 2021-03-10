import React from 'react'

const Connections = ({ data })=>{

const processData=()=>{
	let elements= [];
	let imageName=null;

	for(let  item in data){
		imageName=data[item].split(" ");
		imageName=`${imageName[0]}_${imageName[1]}`
		//elements.push(<h3 key={imageName}>{imageName}</h3>)
		//elements.push(<img key=`test_${data[item}`className='grow' src='Pepper_Potts.jpg' width='200' height='400' alt='Pepper_Potts'/>)
		elements.push(<img className='grow' src={`${imageName}.png`} width='200' height='400' alt={`${imageName}`}/>)
		elements.push(<h3 key={item} className='gray'>{data[item]}</h3>);

	}
	
 return elements;
}
return (<div>{processData()}</div>);
}
export default Connections;

