import React from 'react';

import LoginFooterRight from './__Right/LoginFooterRight';
import LoginFooterLeft from './__Left/LoginFooterLeft';

/**
 * A Login template footer component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Login template footer component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name LoginFooter
 * @private
 * @example 
 */

const LoginFooter = ({cn, content}) => {
    /* Class names collection */
    const classname = cn('footer');

    return (
        <div className={classname}>
            <div class='row between-xs'>
                <div class='col-xs-4'>
                    {!!(content.left)? <LoginFooterLeft cn={classname} content={content.left} /> : null}
                </div>
                <div class='col-xs-5'>
                    {!!(content.right)? <LoginFooterRight cn={classname} content={content.right} /> : null}
                </div>
            </div>
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default LoginFooter;