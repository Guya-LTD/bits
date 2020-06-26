import React from 'react';

/**
 * A CardHeader component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A CardImage component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name CardHeader
 * @private
 * @example 
 */

const CardHeader = ({cn, content}) => {
    /* Class names collection */
    const classname = cn('header');

    return (
        <div className={classname}>
            {content}
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default CardHeader;