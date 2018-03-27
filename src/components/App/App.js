import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import './App.css';
import SideSection from '../SideSection/SideSection';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Grid columns={2}>
				<Grid.Column>
					<SideSection />
				</Grid.Column>
				<Grid.Column>
					other
				</Grid.Column>
			</Grid>
		</div>
    );
  }
}

export default App;
