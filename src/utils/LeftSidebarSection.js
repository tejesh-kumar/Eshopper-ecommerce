import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Heading from './Heading';
import SectionItem from './LeftSidebarCategoryItem';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '15px 0',
		marginBottom: '35px',
		border: '1px solid #f5f5f7'
	},
	'h2': {
		marginBottom: '15px'
	}
	
}));

function LeftSidebarSection({ title, linkItems }) {
	const classes = useStyles();

	// let selectType;
	// if(title === 'Category') {
	//     selectType = 'item.category'
	// }else {
	//     selectType = 'item.brand'
	// }

	return (
		<div>
			<div>
				<Box mb={0}><Heading title={title} /></Box>
			</div>
			<div className={classes.root}>
				{title === 'brand' ? linkItems !== null ? (
					linkItems.map((item) => <SectionItem key={item.id} title={item.brand} type={title} />)
				) : null : linkItems !== null ? (
					linkItems.map((item) => <SectionItem key={item.id} title={item.category} type={title} />)
				) : null}
			</div>
		</div>
	);
}

export default LeftSidebarSection;
