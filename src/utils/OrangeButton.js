import React from 'react'
import { Button } from '@material-ui/core'

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    buttonStyle: {
        color: 'white',
        borderRadius: 0
    }
}))



function OrangeButton() {
    const classes = useStyles()

    return (
        <Button className={classes.buttonStyle} variant="contained" color="primary">BUY NOW</Button>
    )
}

export default OrangeButton
