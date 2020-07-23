import React from 'react';

/**
 * Service template header component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description Service template header component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name ServiceHeader
 * @private
 * @example 
 */

const ServiceHeader = ({cn, content}) => {
    /* Class names collection */
    const classname = cn('header');

    return (
        <header className={classname}>
            {content}
        </header>
    )
}

/**
 * Module exports.
 * @public
 */

export default ServiceHeader;