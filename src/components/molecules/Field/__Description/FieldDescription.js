import React from 'react';

/**
 * A Field's Description component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Field's Description component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name FieldDescription
 * @private
 * @example 
 */

const FieldDescription = ({cn, description}) => {
    /* Class names collection */
    const classname = cn('description');

    return <span className={classname}>{description}</span>
}

/**
 * Module exports.
 * @public
 */

export default FieldDescription;