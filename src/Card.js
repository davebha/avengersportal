import React,{ Component } from 'react'
import Image from './Image'
import  Rightarrow from './Rightarrow'
import Downarrow from './Downarrow'



class Card extends Component{

	constructor(props){
		super(props);
		this.state={
			displayConnectionsInfo:false
		}
		//this.handleDownarrowClick=this.handleDownarrowClick.bind(this)

	}

     handleDownarrowClick=()=>{

     	/*this.setState(()=>({
      				displayConnectionsInfo:!prevState.displayConnectionsInfo
    		}));*/
		// this.setState({ displayConnectionsInfo:true },()=>{console.log(this.state.displayConnectionsInfo)});
		//this.setState(prevState=>{return{displayConnectionsInfo:!prevState.displayConnectionsInfo,}})

		  this.setState({displayConnectionsInfo:true},() => { console.log('new state', this.state); })}

	render(){
		const displayConnectionsInfo=this.state.displayConnectionsInfo;
		const connections = this.props.connections;
		

				return (<div className='tc bg-white dib br3 pa2 ma3 grow bw2 shadow-5 fn v-top'>
							<div >
								<Image   display={this.props.heroName}/>			
							</div>
							<div >
								<h1>{this.props.heroName}</h1>
								<h3>{this.props.name}</h3>
							</div>

							<div className='fr'>	
								<Rightarrow />
							</div>						
									{
										displayConnectionsInfo?
										(<div >
												<br/>
												<br/>
												<hr />
												<h1>Connections</h1>															
										</div>):<div>
												{
													connections?(						
														<Downarrow clickChange={this.handleDownarrowClick}/>
													):(null)
												}
												</div>
									}		

						</div>)
				




		

	}



}


export default Card;

//<Uparrow />
////import Uparrow from './Uparrow'
//const connectionsImage = <img src='Laura_Barton.png' width='200' height='400' alt='Laura_Barton'/>
//{connectionsImage}<h2>{this.props.connections}</h2>		