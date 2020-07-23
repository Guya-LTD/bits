import React from 'react';

/**
 * A Field's Label component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Field's Label component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name FieldLabel
 * @private
 * @example 
 */

const FieldLabel = ({cn, label}) => {
    /* Class names collection */
    const classname = cn('label');

    return <span className={classname}>{label}</span>
}

/**
 * Module exports.
 * @public
 */

export default FieldLabel;