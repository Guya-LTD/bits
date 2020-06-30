import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import NavbarBrand from './__Brand/NavbarBrand';
import NavbarMenu from './__Menu/NavbarMenu';

/**
 * A Navbar component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Navbar component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Navbar
 * @name Navbar
 * @private
 * @example 
 */

class Navbar extends Component {
    render () {
        /* Props */
        const {bsPrefix, brand, menus} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return (
            <nav class={classname()}>
                {!!(brand)? <NavbarBrand cn={classname} content={brand} /> : null}
                {!!(menus)? <NavbarMenu cn={classname} content={menus} /> : null}
            </nav>
        )
    }
}

Navbar.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'navbar' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Navbar Brand images.
     * @property {node}
     * @default null
     */
    brand: PropTypes.node,
    /**
     * @description Navbar Menus.
     * @property {node}
     * @default null
     */
    menus: PropTypes.node,
}

Navbar.defaultProps = {
    bsPrefix: 'navbar',
    brand: null,
    menus: null,
}

/**
 * Module exports.
 * @public
 */

export default Navbar;