import React from 'react';
import { withNaming } from '@bem-react/classname'; 

import SidebarMenuPriamryLogo from './__Logo/SidebarMenuPriamryLogo';
import SidebarMenuPriamryTop from './__Top/SidebarMenuPriamryTop';
import SidebarMenuPriamryBottom from './__Bottom/SidebarMenuPriamryBottom';

/**
 * A Navbar brand large component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description  A Navbar brand large component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name NavbarBrandLarge
 * @private
 * @example 
 */

const SidebarMenuPrimary = ({cn, content}) => {
    /* Class name generator */
    const cna = withNaming({ e: '__', m: '', v: '--' })
    
    /* Set base classname */
    let classname = cna(cn)

    /* Class names collection */
    classname = classname('primary');

    return (
        <div className={classname} style={{ height: '1136px'}}>
            {!!(content.logo)? <SidebarMenuPriamryLogo cn={classname} content={content.logo} /> : null}
            {!!(content.top)? <SidebarMenuPriamryTop cn={classname} content={content.top} /> : null}
            {!!(content.bottom)? <SidebarMenuPriamryBottom cn={classname} content={content.bottom} /> : null}
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default SidebarMenuPrimary;