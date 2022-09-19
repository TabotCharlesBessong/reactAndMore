import React from "react";
import useStyles from './Styles'
import {
	List as MuiList,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Slide,
	Avatar,
} from "@material-ui/core";
import {Delete,MoneyOff} from '@material-ui/icons'
// import {transactions} from '../../../constants/data'
import {useContext} from 'react'
import {ExpenseTrackerContext} from '../../../context/context'

const List = () => {
	const classes = useStyles()
	const {deleteTransaction , transactions} = useContext(ExpenseTrackerContext)
	// console.log(globalState)
	return (
		<MuiList dense={false} className={classes.list}>
			{transactions.map((trans) => (
				<Slide direction="down" in mountOnEnter unmountOnExit key={trans.id}>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<MoneyOff
									className={
										trans.type === "Income"
											? classes.avatarIncome
											: classes.avatarExpense
									}
								/>
							</Avatar>
						</ListItemAvatar>

						<ListItemText
							primary={trans.category}
							secondary={`$${trans.amount} - ${trans.date}`}
						/>

						<ListItemSecondaryAction>
							<IconButton onClick={() => deleteTransaction(trans.id)} edge="end" aria-label="delete">
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</MuiList>
	);
};

export default List;
