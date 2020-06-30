import React from 'react';

import NavbarBrandSmall from './__Small/NavbarBrandSmall';
import NavbarBrandLarge from './__Large/NavbarBrandLarge';

/**
 * A Navbar brand component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Navbar brand component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name NavbarBrand
 * @private
 * @example 
 */

const NavbarBrand = ({cn, content}) => {
    /* Class names collection */
    const classname = cn('brand');

    return (
        <div className={classname}>
            {!!(content.small)? <NavbarBrandSmall cn={classname} content={content.small} /> : null}
            {!!(content.large)? <NavbarBrandLarge cn={classname} content={content.large} /> : null}
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default NavbarBrand;