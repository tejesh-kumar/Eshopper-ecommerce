import React from 'react'
import { Container, Button, Typography, Grid, Box } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import OrangeButton from '../../utils/OrangeButton'

import heroImg1 from '../../images/home/girl1.jpg'
import heroImg2 from '../../images/home/girl2.jpg'
import heroImg3 from '../../images/home/girl3.jpg'


const useStyles = makeStyles((theme) => ({
  btnStyle: {
    // backgroundColor: 'transparent',
    zIndex: 50,
    padding: 0,
    // width: '20px',
    position: 'absolute',
    top: '45%',
    '&:hover': {color: theme.palette.text.orange} 
  },
  iconStyle: {
    // fontSize: '40px',
    height: '60px',
    width: '60px'
  },
  heroTextOrangeStyle: {
    color: theme.palette.text.orange,
  },
  heroTextGreyStyle: {
    color: theme.palette.text.primary,
  },
  heroImgStyle: {
    display: 'flex',
    justifyContent: 'center'
  }

}))


function MainCarousel() {
  const classes = useStyles()

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <Button
        className={classes.btnStyle}
        style={{ ...style, right: 0}}
        onClick={onClick}
      ><ChevronRightIcon className={classes.iconStyle} /></Button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <Button
        className={classes.btnStyle}
        style={{ ...style, left: 0}}
        onClick={onClick}
      ><ChevronLeftIcon className={classes.iconStyle} /></Button>
    );
  }



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Container maxWidth="lg" style={{height: '60vh', paddingBottom: '45px'}}>
    <div>
        <Slider {...settings}>
          <div>
          <div style={{height: '60vh'}}>
            <Grid container>
              <Grid item md={1} ></Grid>
            <Grid item container xs={12} md={5} justify="center" alignItems="center">
            <div>
              <Typography className={classes.heroTextOrangeStyle} variant="h3">E<span className={classes.heroTextGreyStyle}>-SHOPPER</span></Typography>
              <Box my={2}><Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></Box>
              {/* <Button variant="contained" color="primary">BUY NOW</Button> */}
              <OrangeButton />
            </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <div className={classes.heroImgStyle}>
              <img src={heroImg1} alt=""/>
            </div>
            </Grid>
            </Grid>
          </div>
          </div>
          <div>
          <div style={{height: '60vh'}}>
          <Grid container>
              <Grid item md={1} ></Grid>
            <Grid item container xs={12} md={5} justify="center" alignItems="center">
            <div>
              <Typography className={classes.heroTextOrangeStyle} variant="h3">E<span className={classes.heroTextGreyStyle}>-SHOPPER</span></Typography>
              <Box my={2}><Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></Box>
              {/* <Button variant="contained" color="primary">BUY NOW</Button> */}
              <OrangeButton />

            </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <div className={classes.heroImgStyle}>
              <img src={heroImg2} alt=""/>
            </div>
            </Grid>
            </Grid>
          </div>
          </div>
          <div>
          <div style={{height: '60vh'}}>
          <Grid container>
              <Grid item md={1} ></Grid>
            <Grid item container xs={12} md={5} justify="center" alignItems="center">
            <div>
              <Typography className={classes.heroTextOrangeStyle} variant="h3">E<span className={classes.heroTextGreyStyle}>-SHOPPER</span></Typography>
              <Box my={2}><Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></Box>
              {/* <Button variant="contained" color="primary">BUY NOW</Button> */}
              <OrangeButton />
            </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <div className={classes.heroImgStyle}>
              <img src={heroImg3} alt=""/>
            </div>
            </Grid>
            </Grid>
          </div>
          </div>
        </Slider>
      </div>
      </Container>
  )
}

export default MainCarousel



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
