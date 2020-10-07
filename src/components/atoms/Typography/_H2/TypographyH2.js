import React from 'react';

/**
 * A Typography H2 component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Typography H2 component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name TypographyH2
 * @private
 * @example 
 */

const TypographyH2 = ({cn, children}) => {
    /* Class names collection */
    const classname = cn({'': 'h2'})

    return <h2 className={classname}>{children}</h2>
}

/**
 * Module exports.
 * @public
 */

export default TypographyH2;