import React from 'react'
import {Details , Main} from './components'
import {Grid } from '@material-ui/core'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  return (
		<div>
			<Grid
				container
				spacing={0}
				alignItems="center"
				justifyContent="center"
				style={{ height: "100vh" }}
        className={classes.grid}
			>
				<Grid item xs={12} sm={6} md={4} lg={4}>
					<Details title='Income' />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Main />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={4}>
					<Details title ='Expenses' />
				</Grid>
			</Grid>
		</div>
	);
}

export default App