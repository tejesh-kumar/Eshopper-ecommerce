import React from 'react'
import { Typography } from '@material-ui/core'

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.orange,
        fontSize: '18px',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: '20px',
        position: 'relative',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    '&:before': {
        content: '',
        position: 'absolute',
        display: 'block',
        left: 0,
        bottom: '8px',
        height: '3px',
        border: '5px solid #f5f5f5',
        width: '100%'
    },
    '&:after': {
        content: '',
        position: 'absolute',
        display: 'block',
        right: 0,
        bottom: '8px',
        height: '3px',
        border: '5px solid #f5f5f5',
        width: '100%'
    }
}))



function Heading({title}) {
    const classes = useStyles()

    return (
        <Typography variant='h2' align='center' className={classes.root}>{title}</Typography>
    )
}

export default Heading
