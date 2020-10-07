import React from 'react';

/**
 * A Typography H1 component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Typography H1 component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name TypographyH1
 * @private
 * @example 
 */

const TypographyH1 = ({cn, children}) => {
    /* Class names collection */
    const classname = cn({'': 'h3'})

    return <h1 className={classname}>{children}</h1>
}

/**
 * Module exports.
 * @public
 */

export default TypographyH1;