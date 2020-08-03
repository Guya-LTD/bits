import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames'

/**
 * A Link component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Link component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Link
 * @name Link
 * @private
 * @example 
 */

class Link extends Component {
    render() {
        /* Props */
        const {bsPrefix, children, href} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return ( <a className={classname()} href={href}>{children}</a>)
    }
}

Link.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'link' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Text.
     * @property {string}
     * @default 'Link'
     */
    children: PropTypes.string,
    /**
     * @description Link.
     * @property {string}
     * @default '#'
     */
    href: PropTypes.string,
}

Link.defaultProps = {
    bsPrefix: 'link',
    children: 'Link',
    href: '#',
}

/**
 * Module exports.
 * @public
 */

export default Link;