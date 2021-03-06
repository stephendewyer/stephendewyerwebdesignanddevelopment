import { useState } from 'react';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import logo from '../../../../public/images/logo/stephen_dewyer_web_logo_01.png';
import logo_hover from '../../../../public/images/logo/stephen_dewyer_web_logo_02.png';

const IndexTab = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/" passHref aria-label="link to index page">
                {isHovering ? (
                    <Image src={logo_hover} layout="responsive" alt="stephen dewyer web design and development logo"/> 
                    ) : (
                    <Image src={logo} layout="responsive" alt="stephen dewyer web design and development logo"/>
                )}
            </MyLink>    
        </div>
    );
};

export default IndexTab;