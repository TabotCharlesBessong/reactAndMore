import React from "react";
import useStyles from './Styles'
import {TextField,Typography,Grid,Button,InputLabel , FormControl, MenuItem , Select} from '@material-ui/core'

const Form = () => {
	const classes = useStyles()
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography align="center" variant="subtitle2" gutterBottom>
					...
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select>
						<MenuItem value="Business">Business</MenuItem>
						<MenuItem value="Salary">Salary</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={6}>
				<TextField type="number" label="Amount" fullWidth />
			</Grid>
			<Grid item xs={6}>
				<TextField type="date" label="Date" fullWidth />
			</Grid>
			<Button className={classes.button} variant='contained' color='primary' fullWidth >create</Button>
		</Grid>
	);
};

export default Form;
