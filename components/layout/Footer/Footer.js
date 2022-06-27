import styles from './Footer.module.css';
import Link from 'next/link';
import ButtonExternalLink from '../../button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import emailIcon from '../../../public/images/icons/email_icon.svg';
import Image from 'next/image';

function Footer() {

    return (
        <div className={styles.footer} role="contentinfo">
            <div className={styles.footer_info}>
                stephen garrett dewyer © 2022
            </div>
            <div className={styles.footer_links}>
                <Link href="https://www.linkedin.com/in/stephen-dewyer-a15539a5" passHref={true} aria-label="link to LinkedIn profile">
                    <div className={styles.footer_link}>
                        <ButtonExternalLink passHref={true}>
                            <div>
                                LinkedIn
                            </div>
                            <div className={styles.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </div>
                </Link>
                <Link href="https://www.github.com/stephendewyer" passHref={true} aria-label="link to GitHub profile">
                    <div className={styles.footer_link}>
                        <ButtonExternalLink passHref={true}>
                            <div>
                                GitHub
                            </div>
                            <div className={styles.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </div>
                </Link>
                <Link href="mailto:sdewyer@artintechservices.com" passHref={true} aria-label="email stephen garrett dewyer">
                    <div className={styles.footer_link}>
                        <ButtonExternalLink passHref={true}>
                            <div>
                                email
                            </div>
                            <div className={styles.email_icon} >
                                <Image src={emailIcon} layout="responsive" alt="email icon"/>
                            </div>
                        </ButtonExternalLink>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Footer;