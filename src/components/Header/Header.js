import React from 'react'
import { Grid, Divider } from '@material-ui/core'

import HeaderTop from '../../Header/HeaderTop';
import HeaderMiddle from '../../Header/HeaderMiddle'
import HeaderBottom from '../../Header/HeaderBottom'


function Header({currentUser, logout, searchHandler}) {
    return (
        <Grid container>
            <HeaderTop />
            <HeaderMiddle logout={logout} currentUser={currentUser} />
            <Divider />
            <HeaderBottom searchHandler={searchHandler} />
        </Grid>
    )
}

export default Header
