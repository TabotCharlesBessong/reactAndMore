import React from "react";
import {Card,CardHeader,Typography,Grid,Divider,CardContent} from '@material-ui/core'
import useStyles from './Styles'
import {InfoCard , Form , List} from '../index'

const Main = () => {
	const classes = useStyles()
	return (
		<Card className={classes.root} >
			<CardHeader title='Expense tracker' subheader='powered by speechly' />
			<CardContent>
				<Typography align='center' variant='h5' > total balance $1 </Typography>
				<Typography variant='subtitle1' style={{
					lineHeight:'1.5rem' , marginTop:'20px'
				}} >
					<InfoCard/>
				</Typography>
				<Divider/>
				<Form/>
			</CardContent>
			
			<CardContent className={classes.cardContent} >
				<Grid container>
					<Grid item xs={12}>
						<List/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Main;
