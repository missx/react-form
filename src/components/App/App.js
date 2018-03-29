import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import './App.css';
import SideSection from '../SideSection/SideSection';
import FormSection from '../FormSection/FormSection';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Grid >
				<Grid.Column width={6}>
					<SideSection />
				</Grid.Column>
				<Grid.Column width={10}>
					<FormSection />
				</Grid.Column>
			</Grid>
		</div>
    );
  }
}

export default App;
