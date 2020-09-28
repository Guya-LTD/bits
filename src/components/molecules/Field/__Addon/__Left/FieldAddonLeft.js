import React from 'react';
import { withNaming } from '@bem-react/classname';

/**
 * A Field's Addon component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Field's Addon component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component
 * @name FieldAddon
 * @private
 * @example 
 */

const FieldAddonLeft = ({cn, addon}) => {
    /* Class name generator */
    const cna = withNaming({ e: '__', m: '', v: '--' })

    /* Set base classname */
    let classname = cna( cn('addon'))

    classname = classname({'': 'prepend'});

    return <span className={classname}>{addon}</span>
}

/**
 * Module exports.
 * @public
 */

export default FieldAddonLeft;