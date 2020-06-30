import React from 'react';
import { withNaming } from '@bem-react/classname'; 

/**
 * A Navbar menu right component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description  A Navbar menu right component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name NavbarMenuRight
 * @private
 * @example 
 */

const NavbarMenuRight = ({cn, content}) => {
    /* Class name generator */
    const cna = withNaming({ e: '__', m: '', v: '--' })
    
    /* Set base classname */
    let classname = cna(cn)

    /* Class names collection */
    classname = classname('right');

    /* Left Menu */
    var menusList = content.map(function(menu) {
        if(menu.submenus) {
            var submenusList = menu.submenus.map(function(submenu) {
                return <li>{submenu.menu}</li>
            });
            return (
                <li>{menu.menu}
                    <ul>{submenusList}</ul>
                </li>
            );
        }
        else
            return <li>{menu.menu}</li>
    });


    return (
        <ul className={classname}>
            {menusList}
        </ul>
    )
}

/**
 * Module exports.
 * @public
 */

export default NavbarMenuRight;