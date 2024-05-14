import { Grid, Link, Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <Grid className='bg-white text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'white', color: 'black', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h5" gutterBottom>
          <a className='logo' href="/"> URBANSHOPPER</a>
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Shop high quality, great value,quickly shipped
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
         products with seasonal discounts and offers.
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        <br />
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>

        <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

        </Typography>

      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Sections
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          <a href="/men/mens%20clothing/shirt"> Mens</a>
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          <a href="/men/clothing/top"> Womens</a>
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        <a href="/men/accessories/watch"> ACCESSORIES and others</a>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Information
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Gift cards
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Newsletter
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Group3@gmail.com

        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Hotline: +852 6969 4420
        </Typography>

      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 Group 3 Final project. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with MERN
        </Typography>

      </Grid>
    </Grid>
  );
};

export default Footer;
