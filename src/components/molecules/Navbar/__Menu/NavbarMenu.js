import React from 'react';

import NavbarMenuLeft from './__Left/NavbarMenuLeft';
import NavbarMenuRight from './__Right/NavbarMenuRight';

/**
 * A Navbar menus component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Navbar menus component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name NavbarBrand
 * @private
 * @example 
 */

const NavbarBrand = ({cn, content}) => {
    /* Class names collection */
    const classname = cn('menu');

    return (
        <div className={classname}>
            {!!(content.left)? <NavbarMenuLeft cn={classname} content={content.left} /> : null}
            {!!(content.right)? <NavbarMenuRight cn={classname} content={content.right} /> : null}
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default NavbarBrand;