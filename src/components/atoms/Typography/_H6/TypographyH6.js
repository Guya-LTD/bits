import React from 'react';

/**
 * A Typography H6 component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Typography H6 component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name TypographyH6
 * @private
 * @example 
 */

const TypographyH6 = ({cn, children, theme}) => {
    /* Class names collection */
    const classname = cn({'': 'h6'})

    return <h6 className={classname + ' ' + theme}>{children}</h6>
}

/**
 * Module exports.
 * @public
 */

export default TypographyH6;