import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import SidebarMenu from './__Menu/SidebarMenu';

/**
 * A Sidebar component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Sidebar component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Sidebar
 * @name Sidebar
 * @private
 * @example 
 */

class Sidebar extends Component {
    render () {
        /* Props */
        const {bsPrefix, brand, menu, theme} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null

        /* Classnames */
        const classnametext = classnames(
            themeName
        );

        return (
            <div className={classnametext}>
                {!!(menu)? <SidebarMenu cn={classname} content={menu} /> : null}
            </div>
        )
    }
}

Sidebar.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'sidebar' 
     */
    bsPrefix: PropTypes.string,

}

Sidebar.defaultProps = {
    bsPrefix: 'sidebar',
    menu: {primary: {logo: null, top: null, bottom: null}, secondary: null}
}

/**
 * Module exports.
 * @public
 */

export default Sidebar;