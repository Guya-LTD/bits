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
    constructor() {
        super();
        this.myRef = React.createRef();
        this.closeNavbar = this.closeNavbar.bind(this);
        this.openNavbar = this.openNavbar.bind(this);
    }

    openNavbar() {
        var navbar = document.getElementById('navbar')
        navbar.classList.add('navbar--show')
    }

    closeNavbar() {
        var navbar = document.getElementById('navbar')
        navbar.classList.remove('navbar--show')
        //navbarBrand.classList.remove('navbar__brand--remove')
    }

    render () {
        /* Props */
        const {bsPrefix, brand, search, collapse, open, close, theme, nav} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' });

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null;

        /* Set base classname */
        let classname = cn(bsPrefix)
           // menus = { firstRow: {collapse, theme, size, brand: {open, small, large, search} } }
        return (
            <nav className={classname()} id='navbar'>
                <button className='navbar__close' ref={this.myRef} onClick={this.closeNavbar}>{close}</button>
                <div className={'row navbar__row navbar__row--lg ' + themeName}>
                    <div class='col-xs-1' style={{paddingRight: 0}}></div>
                    <div class='col-xs-10 col-sm-2 col-lg-1 navbar__brand'>
                        <div className='row'>
                            <div class='col-xs-1 navbar__open' onClick={this.openNavbar}>{open}</div>
                            <div class='col-xs'>
                                <div class='navbar__brand__small'>{brand.small}</div>
                                <div class='navbar__brand__large'>{brand.large}</div>
                            </div>
                        </div>
                        <div class='row navbar__brand__search'>
                            {search.sticky}
                        </div>
                    </div> {/* End of barnd */}
                    <div class='col-xs-12 col-sm-8 col-lg-8 navbar__collapse'>
                        <div className='row'>
                            <div className='col-xs-12 col-sm'>
                                {collapse.left}
                            </div>
                            <div class='col-xs'>
                                <div class='row end-xs'>
                                    <div class='navbar__collapse__search'>
                                        {collapse.search}
                                    </div>
                                    <div>
                                        {collapse.right}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* Collapse */}
                </div> {/* End of top bar */}
                <div className='row navbar__row'>
                    <div class='col-xs-1'></div>
                    <div className='col-xs-11 navbar__collapse navbar__collapse--sm'>
                        {nav}
                    </div>
                </div>
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