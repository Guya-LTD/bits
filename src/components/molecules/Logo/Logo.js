import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname'

/**
 * A Logo link component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Logo link component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Logo
 * @name Logo
 * @private
 * @example 
 */

class Logo extends Component {
    render() {
        /* Props */
        const {bsPrefix, size, href, alt, src} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return ( 
            <a href={href}>
                <img loading="lazy" alt={alt} src={src} className={classname({'': size})} />
            </a>
        )
    }
}


Logo.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'button' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Size.
     * @enum {('xs'|'sm'|'md'|'lg'|'xl')}
     * @default 'md'
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /**
     * @description Link to home page.
     * @property {string}
     * @default '/'
     */
    href: PropTypes.string,
    /**
     * @description Image's alt.
     * @property {string}
     * @default 'Logo'
     */
    alt: PropTypes.string,
    /**
     * @description Image's url.
     * @property {string}
     * @default null
     */
    src: PropTypes.string,
}

Logo.defaultProps = {
    bsPrefix: 'logo',
    size: 'md',
    href: '/',
    alt: 'Logo',
    src: null,
}

/**
 * Module exports.
 * @public
 */

export default Logo;