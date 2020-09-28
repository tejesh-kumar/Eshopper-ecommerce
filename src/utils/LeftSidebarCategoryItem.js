import React from 'react'
import {NavLink} from 'react-router-dom'
import { Typography } from '@material-ui/core'

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.primary,
        textTransform: 'uppercase',
        textDecoration: 'none',

        '& > p': {
            fontSize: '14px',
            fontWeight: 500,
            padding: '5px 20px',
            flexGrow: 1,

            '&:hover': {
                color: theme.palette.text.orange
            }
        }
    },
	active: {
		color: theme.palette.text.orange
	}
}))



function LeftSidebarCategoryItem({title, type}) {
    const classes = useStyles()

    return (
        <NavLink to={`/shop/${type}/${title}`} activeClassName={classes.active} className={classes.root}>
            <Typography variant='body1'>{title}</Typography>
        </NavLink>
    )
}

export default LeftSidebarCategoryItem
