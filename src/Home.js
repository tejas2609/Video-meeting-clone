import React, { Component, useState } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import "./Home.css"
import home from './images/logo.png';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Img1 from './images/slideimg1.svg';
import Img2 from './images/slideimg2.svg';
import Img3 from './images/slideimg3.svg';
import Img4 from './images/slideimg4.svg';


const RightLightTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
	  backgroundColor: theme.palette.common.white,
	  color: 'rgba(0, 0, 0, 0.87)',
	  boxShadow: theme.shadows[1],
	  fontSize: 11,
	},
  }));


class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	
	render() {
		return (
			<div className="container2">
				<nav>
					<div className="left-item">
						<img src={home} alt='home'/>
					</div>
      			</nav>
				<div className='sidenav'>
					<div className='sidenav-items'>
						<RightLightTooltip title="About Us"> 
							<div className='faicon'><i className="far fa-question-circle"></i></div>
						</RightLightTooltip>
						<RightLightTooltip title="Comment Us">
							<div className='faicon'><i className="far fa-comment-alt"></i></div>
						</RightLightTooltip>
						<RightLightTooltip title="Settings">
							<div className='faicon'><i className="fa fa-cog"></i></div>
						</RightLightTooltip>
						<RightLightTooltip title="More Options">
							<div className='faicon'><i className="fa fa-ellipsis-v"></i></div>
						</RightLightTooltip>
						
						
					</div>
				</div>
				<div style={{marginTop: '30px'}}>
					<p className='head' >Premium video meetings.</p>
					<p className='head'>Now free for everyone.</p>
					<p className='subhead'>We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
				</div>

				<div className='meet_creds' style={{
					background: "white", width: "30%", height: "auto", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "30px"
				}}>
					<p className='join_intro'>Start or join a meeting</p>
					<div className='meeting_url'>
						<Input className="input_url" placeholder="URL" onChange={e => this.handleChange(e)} />
						<button className="n_meet" onClick={this.join}>
							<i className="fa fa-video-camera" /><span>Create meeting</span>
						</button>
					</div>
					<p className='more-info	'><span>Learn More</span> about our meetings</p>
				</div>
				<div className='providings'>
					<p>This is a demo meeting application providing a minimal user interface</p>
				</div>
				
			</div>
		)
	}
}

export default Home;