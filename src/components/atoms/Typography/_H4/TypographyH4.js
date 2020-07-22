import React from 'react';

/**
 * A Typography H4 component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Typography H4 component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name TypographyH4
 * @private
 * @example 
 */

const TypographyH4 = ({cn, children}) => {
    /* Class names collection */
    const classname = cn({'': 'h4'})

    return <h4 className={classname}>{children}</h4>
}

/**
 * Module exports.
 * @public
 */

export default TypographyH4;