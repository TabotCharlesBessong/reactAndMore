import React , {useState , useContext} from "react";
import useStyles from './Styles'
import {TextField,Typography,Grid,Button,InputLabel , FormControl, MenuItem , Select} from '@material-ui/core'
import {ExpenseTrackerContext} from '../../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { useSpeechContext } from "@speechly/react-client";
import Snackbar from "../../snackbar/Snackbar";
import formatDate from "../../../utils/formatDate";
import {
	incomeCategories,
	expenseCategories,
} from "../../../constants/categories";

const initialState = {
	amount: "",
	category: "",
	type: "Income",
	date: formatDate(new Date())
};

const Form = () => {
	const classes = useStyles()
  const [formData, setFormData] = useState(initialState)
	console.log(formData)
	const {addTransaction} = useContext(ExpenseTrackerContext)

	const createTransaction = () => {
		const transaction = {...formData,amount:Number(formData.amount) , id:uuidv4()  }
    addTransaction(transaction)
		setFormData(initialState)
	}

	const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories
	
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
					<Select
						value={formData.type}
						onChange={(e) => setFormData({ ...formData, type: e.target.value })}
					>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) =>
							setFormData({ ...formData, category: e.target.value })
						}
					>
						{
							selectedCategory.map((c) => (
								<MenuItem key={c.type} value={c.type} >
									{c.type}
								</MenuItem>
							))
						}
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={6}>
				<TextField
					value={formData.amount}
					onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
					type="number"
					label="Amount"
					fullWidth
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					value={formData.date}
					onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
					type="date"
					label=""
					fullWidth
				/>
			</Grid>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				fullWidth
				onClick={createTransaction}
			>
				create
			</Button>
		</Grid>
	);
};

export default Form;
