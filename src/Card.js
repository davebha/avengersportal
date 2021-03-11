import React,{ Component } from 'react'
import Image from './Image'
import  Rightarrow from './Rightarrow'
import Downarrow from './Downarrow'
import Uparrow from './Uparrow'
import Connections from './Connections'

class Card extends Component{

	constructor(props){
		super(props);
		this.state={
			displayConnectionsInfo:false
		}
	}

    handleDownarrowClick=()=>{
		  this.setState({displayConnectionsInfo:true},() => { console.log('new state', this.state); })
	}

	handleUparrowClick=()=>{
		  this.setState({displayConnectionsInfo:false},() => { console.log('new state', this.state); })
	}

	render(){
		const displayConnectionsInfo=this.state.displayConnectionsInfo;
		const connectionsList = this.props.connections;

				return (<div className='tc bg-white dib br3 pa1 ma3  bw2 shadow-5 fn v-top'>
							<div className='grow'>
								<Image   display={this.props.heroName}/>			
							</div>
							<div className='grow'>
								<h2>{this.props.heroName}</h2>
								<h3>{this.props.name}</h3>
															
							</div>	
							<div className='fr'>
								<Rightarrow />
							</div>				
									{
										displayConnectionsInfo?
										(<div>
												<br/>
												<br/>
												<hr />
												<h1>Connections</h1>

												<Connections data={connectionsList}/>	
												<Uparrow clickChange={this.handleUparrowClick} />															
										</div>)
										 :
										<div >
												{
													connectionsList?(						
														<Downarrow className='grow' clickChange={this.handleDownarrowClick}/>
													):(null)
												}
										</div>
									}		

						</div>)
				
	}



}
//<h2>{console.log(connectionsList)}

export default Card;



