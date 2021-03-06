import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import classes from './publicArtsCommission.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PublicArtsCommissionSlideCarousel from "../../../components/slide_carousel/PublicArtsCommissionSlideCarousel";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

const PublicArtsCommission = () => {
    return (
        <Fragment>
            <Head>
                <title>Public Arts Commission - stephen dewyer web design and development</title>
                <meta name="description" content="details of web design and development for Public Arts Commission by stephen dewyer" />
            </Head>
            <div className="container" role="main">
                <h1 className="header">
                    client: Public Arts Commission<br/>
                    2017 &ndash; present
                </h1>
                <div className={classes.slider_case_study}>
                    <PublicArtsCommissionSlideCarousel />
                </div>
                <div className='paragraphs_container' >
                    <div className='paragraphs' >
                        Public Arts Commission is a grassroots, 501(c)(4) non-profit organization that combines art and politics for greater democracy.<br /><br/> 
                        Services and features:<br />
                            <ul>
                                <li>
                                    Brand identity design
                                </li>
                                <li>
                                    Custom images
                                </li>
                                <li>
                                    Online portal for campaigns to apply for endorsement
                                </li>
                                <li>
                                    Email newsletter subscription form
                                </li>
                                <li>
                                    Endorsed campaigns by state and country
                                </li>
                                <li>
                                    Interactivity and responsiveness
                                </li>
                            </ul>
                        Forthcoming:<br />
                            <ul>
                                <li>
                                    Web application for individuals in the art community to connect and organize at the grassroots level
                                </li>
                            </ul>
                    </div>
                </div>
                <Link href="https://www.publicartscommission.org/" passHref={true} >
                    <a className={classes.visit_link} target="_blank" rel="noopener noreferrer">
                        <ButtonExternalLink passHref={true} aria-label="link to visit">
                            <div>
                                visit
                            </div>
                            <div className={classes.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </a>
                </Link>
                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/artInTechServices" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to previous case study">
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/infiniteMile" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to next case study">
                                next
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
        
    );
};

export default PublicArtsCommission;