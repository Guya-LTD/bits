import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname'

/**
 * An Image component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description An Image component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Image
 * @name Image
 * @private
 * @example 
 */

class Image extends Component {
    render() {
        /* Props */
        const {bsPrefix, alt, src, size} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return <img loading="lazy" alt={alt} src={src} className={classname({'': size})} />
    }
}

Image.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'image' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Size.
     * @enum {('xs'|'sm'|'md'|'lg'|'xl')}
     * @default 'md'
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
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

Image.defaultProps = {
    bsPrefix: 'image',
    size: 'md',
    alt: 'Logo',
    src: null,
}

/**
 * Module exports.
 * @public
 */

export default Image;