import React, {useEffect, Fragment} from 'react';
import { Container, Button, Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MainCarouselItem from './MainCarouselItem';
import OrangeButton from '../../utils/OrangeButton';


import heroImg1 from '../../images/home/girl1.jpg';
import heroImg2 from '../../images/home/girl2.jpg';
import heroImg3 from '../../images/home/girl3.jpg';

const useStyles = makeStyles((theme) => ({
	btnStyle: {
		// backgroundColor: 'transparent',
		zIndex: 50,
		padding: 0,
		// width: '20px',
		position: 'absolute',
		top: '45%',
		'&:hover': { color: theme.palette.text.orange }
	},
	iconStyle: {
		// fontSize: '40px',
		height: '60px',
		width: '60px'
	},
	heroTextOrangeStyle: {
		color: theme.palette.text.orange
	},
	heroTextGreyStyle: {
		color: theme.palette.text.primary
	},
	heroImgStyle: {
		display: 'flex',
		justifyContent: 'center',
		height: '40vmin',

		'& img': {
			height: 'inherit',
			maxWidth: '100%'
		}
	}
}));

function MainCarousel({products, homeSlider, selectedProductToPurchaseHandler}) {
	const classes = useStyles();
	let modifiedProducts = []

	if(!products || !homeSlider) { return 0 }

	homeSlider.forEach(hp => {
		products.forEach(p => {
			if (hp.product_id === p.id) {
				modifiedProducts.push(p);
				console.log('p', modifiedProducts);
			}
		})
	})

	console.log('mod', modifiedProducts);

	

	function SampleNextArrow(props) {
		const { style, onClick } = props;
		return (
			<Button className={classes.btnStyle} style={{ ...style, right: 0 }} onClick={onClick}>
				<ChevronRightIcon className={classes.iconStyle} />
			</Button>
		);
	}

	function SamplePrevArrow(props) {
		const { style, onClick } = props;
		return (
			<Button className={classes.btnStyle} style={{ ...style, left: 0 }} onClick={onClick}>
				<ChevronLeftIcon className={classes.iconStyle} />
			</Button>
		);
	}

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};

	return (

		modifiedProducts.length > 0 ?

		<Container
			maxWidth="lg"
			style={{
				// height: '60vh',
        marginTop: '45px',
        marginBottom: '80px'
			}}
		>
			<div>
				<Slider {...settings}>

					{
						// <Fragment>
							// <MainCarouselItem />
							// <MainCarouselItem />
						// </Fragment>
					}

					<div>
						<div>
							<Grid container>
								<Grid item md={1} />
								<Grid item container xs={12} md={5} justify="center" alignItems="center">
									<div>
										<Typography className={classes.heroTextOrangeStyle} variant="h4">
										{modifiedProducts[0].title}<span className={classes.heroTextGreyStyle}>{}</span>
										</Typography>
										<Box my={2}>
											<Typography variant="body1">
												{modifiedProducts[0].title}
											</Typography>
										</Box>
										<OrangeButton selectedProductToPurchaseHandler={selectedProductToPurchaseHandler} productId={modifiedProducts[0].id} quantity={1}  />
									</div>
								</Grid>
								<Grid item xs={12} md={6}>
									<div className={classes.heroImgStyle}>
										<img src={modifiedProducts[0].imgUrl} alt="" />
									</div>
								</Grid>
							</Grid>
						</div>
					</div>



					<div>
						<div>
							<Grid container>
								<Grid item md={1} />
								<Grid item container xs={12} md={5} justify="center" alignItems="center">
									<div>
										<Typography className={classes.heroTextOrangeStyle} variant="h4">
										{modifiedProducts[1].title}<span className={classes.heroTextGreyStyle}></span>
										</Typography>
										<Box my={2}>
											<Typography variant="body1">
											{modifiedProducts[1].title}
											</Typography>
										</Box>
										<OrangeButton selectedProductToPurchaseHandler={selectedProductToPurchaseHandler} productId={modifiedProducts[1].id} quantity={1}  />
									</div>
								</Grid>
								<Grid item xs={12} md={6}>
									<div className={classes.heroImgStyle}>
										<img src={modifiedProducts[1].imgUrl} alt="" />
									</div>
								</Grid>
							</Grid>
						</div>
					</div> 
					<div>
						<div>
							<Grid container>
								<Grid item md={1} />
								<Grid item container xs={12} md={5} justify="center" alignItems="center">
									<div>
										<Typography className={classes.heroTextOrangeStyle} variant="h4">
										{modifiedProducts[2].title}<span className={classes.heroTextGreyStyle}></span>
										</Typography>
										<Box my={2}>
											<Typography variant="body1">
											{modifiedProducts[2].title}
											</Typography>
										</Box>
										<OrangeButton selectedProductToPurchaseHandler={selectedProductToPurchaseHandler} productId={modifiedProducts[2].id} quantity={1}  />
									</div>
								</Grid>
								<Grid item xs={12} md={6}>
									<div className={classes.heroImgStyle}>
										<img src={modifiedProducts[2].imgUrl} alt="" />
									</div>
								</Grid>
							</Grid>
						</div>
					</div>


					<div>
						<div>
							<Grid container>
								<Grid item md={1} />
								<Grid item container xs={12} md={5} justify="center" alignItems="center">
									<div>
										<Typography className={classes.heroTextOrangeStyle} variant="h4">
										{modifiedProducts[3].title}<span className={classes.heroTextGreyStyle}></span>
										</Typography>
										<Box my={2}>
											<Typography variant="body1">
											{modifiedProducts[3].title}
											</Typography>
										</Box>
										<OrangeButton selectedProductToPurchaseHandler={selectedProductToPurchaseHandler} productId={modifiedProducts[3].id} quantity={1}  />
									</div>
								</Grid>
								<Grid item xs={12} md={6}>
									<div className={classes.heroImgStyle}>
										<img src={modifiedProducts[3].imgUrl} alt="" />
									</div>
								</Grid>
							</Grid>
						</div>
					</div>
				</Slider>
			</div>
		</Container> : null
	);
}

export default MainCarousel;

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Container maxWidth="lg" style={{height: '55vh', padding: 0, width: '100vw'}}>
//       {/* <div> */}
//         <Slider {...settings}>
//           <div>
//             <div style={{height: '55vh', backgroundColor: 'greenyellow'}}>1</div>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       {/* </div> */}
//       </Container>
//     );
//   }
// }
