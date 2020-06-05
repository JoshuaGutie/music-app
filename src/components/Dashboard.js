import React, { Component } from "react";
import "../App.css";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<AppBar>
					<h2>My Music App</h2>
				</AppBar>
				<br />
				<h1>WELCOME USER</h1>
				<div style={{ display: "flex" }}>
					<Card variant="elevation">
						<h1>card 1</h1>
						<p>askdljf;askdjfadjf;aldkjfalkjf;ajkf;akjfdfkj</p>
					</Card>
					<Card variant="elevation">
						<h1>card 2</h1>
						<p>adskjfasdjf;ajdf;alksjdflajd;ajdfalsj</p>
					</Card>
					<Card variant="elevation">
						<h1>card 3</h1>
						<p>ja;ldkfja;lkdjf;aldsjf;asdjfa;lksdjf;ldj</p>
					</Card>
				</div>
			</div>
		);
	}
}

export default Dashboard;
