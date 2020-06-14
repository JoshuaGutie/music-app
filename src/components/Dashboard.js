import React, { Component } from "react";
import "../App.css";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			online: false,
			quality: 20,
			volume: 10,
			notifications: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleClick = this.handleClick.bind(this);
		// this.handleClick2 = this.handleClick2.bind(this);
	}
	// let popUp = ['Your application is offline. You wont be able to share or stream music to other devices.',
	// 			 'Listening to music at a high volume could cause long-term hearing loss.',
	// 			 'Music quality is degraded. Increase quality if your connection allows it.']

	componentDidUpdate(prevProps, prevState) {
		if (prevState.online && !this.state.online) {
			const offlineNote =
				"Your application is offline. You wont be able to share or stream music to other devices.";
			console.log("Online has changed!!!", this.state.online);
			this.setState({
				notifications: [...this.state.notifications, offlineNote]
			});
			console.log(this.state.notifications);
		}

		if (prevState.volume < 80 && this.state.volume >= 80) {
			const volumeNote =
				"Listening to music at a high volume could cause long-term hearing loss.";
			console.log("VOLUME", this.state.notifications);
			this.setState({
				notifications: [this.state.notifications, volumeNote]
			});
		}

		if (prevState.quality >= 20 && this.state.volume === 10) {
			const qualityNote =
				"Music quality is degraded. Increase quality if your connection allows it.";
			console.log("VOLUME", this.state.notifications);
			this.setState({
				notifications: [...this.state.notifications, qualityNote]
			});
		}
	}

	handleChange = (event, volume) => {
		this.setState({ volume });
	};
	handleChange2 = (event) => {
		this.setState({ quality: event.target.value });
		console.log(event.target.value);
	};

	handleClick = () => {
		this.setState({
			online: !this.state.online
		});
	};
	// handleClick2 = () => {
	// 	this.setState({
	// 		quality: this.state.value
	// 	});
	// };

	render() {
		// debugger;
		const { volume } = this.state;
		const { quality } = this.state;
		return (
			<div className="App">
				<AppBar style={{ height: "10%" }}>My Music App </AppBar>
				<br />
				<h1>WELCOME USER</h1>
				<div style={{ display: "flex" }}>
					<Card variant="elevation">
						<CardContent>
							<h2>Online Mode</h2>

							<Typography variant="body2" component="p">
								Is this application connected to the internet?
							</Typography>
							<CardActions>
								<Switch onClick={this.handleClick} />
								{this.state.online ? true : false}
							</CardActions>
						</CardContent>
					</Card>

					<Card variant="elevation">
						<CardContent>
							<h2>Master Volume</h2>

							<Typography variant="body2" component="p">
								Overrides all other sound settings in this application.
							</Typography>
							<CardActions>
								<Slider
									defaultValue={10}
									step={10}
									marks
									min={0}
									max={100}
									valueLabelDisplay="auto"
									volume={volume}
									onChange={this.handleChange}
								/>
							</CardActions>
						</CardContent>
					</Card>
					<Card variant="elevation">
						<CardContent>
							<h2>Sound Quality</h2>
							<Typography variant="body2" component="p">
								Manually control the music quality in event of poor connection.
							</Typography>
						</CardContent>
						<CardActions>
							<Select native value={quality} onChange={this.handleChange2}>
								<option value={10}>Low</option>
								<option value={20}>Normal</option>
								<option value={30}>High</option>
							</Select>
						</CardActions>
					</Card>
					<div>
						<h1>System Notifications:</h1>
						{this.state.notifications.map((notifications, index) => (
							<div key={index}>{notifications}</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
