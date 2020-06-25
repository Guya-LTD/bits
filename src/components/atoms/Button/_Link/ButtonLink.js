import React from 'react';

/**
 * A Button Link component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Button Link component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name ButtonLink
 * @private
 * @example 
 */

const ButtonLink = ({cn, theme, href, children}) => {
    /* Class names collection */
    const classname = cn({'': 'link'})

    return <a href={href} className={classname + theme}>{children}</a>
}

/**
 * Module exports.
 * @public
 */

export default ButtonLink;