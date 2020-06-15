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
	}

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
				notifications: [...this.state.notifications, volumeNote]
			});
		}

		if (prevState.quality > 11 && this.state.quality == 10) {
			const qualityNote =
				"Music quality is degraded. Increase quality if your connection allows it.";
			console.log("QUALITY", this.state.notifications);
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
	handleDelete = (index) => () => {
		const deletedNotif = [...this.state.notifications];
		deletedNotif.splice(index, 1);
		this.setState({
			notifications: deletedNotif
		});
	}


	render() {
		// debugger;
		const { volume } = this.state;
		const { quality } = this.state;
		return (
			<div className="App">
				<AppBar style={{ height: "10%" }}>My Music App </AppBar>
				<div>
					<h2 style={{ marginTop: "10%", textAlign: "center" }}>Welcome User</h2>
					<div className="canvass" style={{ display: "flex" }}>
						<Card className="card" variant="elevation">
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

						<Card className="card" variant="elevation">
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
						<Card className="card" variant="elevation">
							<CardContent>
								<h3>Sound Quality</h3>
								<Typography variant="body2" component="p">
									Manually control the music quality in event of poor
									connection.
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
					</div>
					<div className="card1" style={{textAlign: "center", width: "100%"}}>
						<h3 style={{ marginTop: "10%", textAlign: "center" }}> System Notifications:</h3>
						{this.state.notifications.map((notifications, index) => (
							<div className = "notifs" style={{border: "2px solid black",
							borderRadius: "5px", backgroundColor: "#CF302B", color: "white", margin: "auto", width: "600px", height:"auto", marginBottom: "5px", paddingBottom: "5px"}} 
							
							key={index}>
								<button onClick={this.handleDelete(index)}
								style={{ color: "black", margin: "none", padding:"none", marginLeft: "94%"}}>X</button>
								<p style = {{margin: "5px"}}>ERROR:</p>
								{notifications}<br/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
