import React from 'react'
import { Grid, Divider } from '@material-ui/core'

import HeaderTop from '../../Header/HeaderTop';
import HeaderMiddle from '../../Header/HeaderMiddle'
import HeaderBottom from '../../Header/HeaderBottom'


function Header() {
    return (
        <Grid container>
            <HeaderTop />
            <HeaderMiddle />
            <Divider />
            <HeaderBottom />
        </Grid>
    )
}

export default Header
