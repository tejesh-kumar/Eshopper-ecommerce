import React from 'react'
import { Grid, Divider } from '@material-ui/core'

import HeaderTop from '../../Header/HeaderTop';
import HeaderMiddle from '../../Header/HeaderMiddle'
import HeaderBottom from '../../Header/HeaderBottom'


function Header({logout, searchHandler}) {
    return (
        <Grid container>
            <HeaderTop />
            <HeaderMiddle logout={logout} />
            <Divider />
            <HeaderBottom searchHandler={searchHandler} />
        </Grid>
    )
}

export default Header
