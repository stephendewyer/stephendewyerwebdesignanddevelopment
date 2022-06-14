import Head from 'next/head';
import { Fragment } from 'react';
import classes from './artInTechServices.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtinTechServicesSlideCarousel from "../../../components/slide_carousel/ArtinTechServicesSlideCarousel";
import Link from 'next/link';
import Button from '../../../components/button/button';

const ArtinTechServices = () => {
    return (
        <Fragment>
            <Head>
                <title>Art in Tech Services Inc - stephen dewyer web design and development</title>
                <meta name="description" content="details of web design and development for Art in Tech Services Inc by stephen dewyer" />
            </Head>
            <div className="container" role="main">
                <h1 className="header">
                    client: Art in Tech Services Inc<br/>
                    2021 &ndash; present
                </h1>
                <div className={classes.slider_case_study}>
                    <ArtinTechServicesSlideCarousel />
                </div>
                <div className='paragraphs_container' >
                    <div className='paragraphs' >
                        Art in Tech Services Inc is a company that works to include art workers who have skills in digital technology in the tech field in the belief that tech is better with art.<br/><br/>
                        Services and features:
                        <ul>
                            <li>
                                Brand identity design
                            </li>
                            <li>
                                Client relationship management software
                            </li>
                            <li>
                                Custom images and videos
                            </li>
                            <li>
                                Interactivity and responsiveness
                            </li>
                            <li>
                                Custom build using Next.js, MongoDB, SendGrid and Stripe
                            </li>
                        </ul>
                    </div>        
                </div>
                <Link href="https://www.artintechservices.com/" passHref={true} >
                    <div className={classes.visit_link}>
                        <Button passHref={true}>
                            visit
                        </Button>
                    </div>
                </Link>
                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/joyfoodly" passHref={true} >
                        <div className={classes.prev_case_study}>
                            <Button passHref={true}>
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/publicArtsCommission" passHref={true} >
                        <div className={classes.next_case_study}>
                            <Button passHref={true}>
                                next
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
        
    );
};

export default ArtinTechServices;