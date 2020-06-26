import React from 'react';
import { withNaming } from '@bem-react/classname'

/**
 * A LoginFooterLeft template footer component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A LoginFooterLeft template footer component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name LoginFooterLeft
 * @private
 * @example 
 */

const LoginFooterLeft = ({cn, content}) => {
    /* Class name generator */
    const cna = withNaming({ e: '__', m: '', v: '--' })

    /* Set base classname */
    let classname = cna(cn)

    classname = classname('left');

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

export default LoginFooterLeft;