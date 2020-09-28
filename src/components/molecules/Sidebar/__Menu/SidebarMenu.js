import React from 'react';

import SidebarMenuPrimary from './__Primary/SidebarMenuPrimary';
import SidebarMenuSecondary from './__Secondary/SidebarMenuSecondary';

/**
 * A Sidebar brand component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Sidebar brand component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name SidebarBrand
 * @private
 * @example 
 */

const SidebarMenu = ({cn, content}) => {
    /* Class names collection */
    const classname = cn('menu');

    return (
        <div className={classname}>
            {!!(content.primary)? <SidebarMenuPrimary cn={classname} content={content.primary} /> : null}
            {!!(content.secondary)? <SidebarMenuSecondary cn={classname} content={content.secondary} /> : null}
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default SidebarMenu;