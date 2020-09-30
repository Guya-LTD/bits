import React from 'react';

import NotificationContentTitle from './__Title/NotificationContentTitle';
import NotificationContentMessage from './__Message/NotificationContentMessage';

/**
 * A Blockquote component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Button component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name NotificationContent
 * @private
 * @example 
 */

const NotificationContent = ({cn, title, message, close}) => {
    /* Class names collection */
    const classname = cn('content');

    return (
        <div className={classname}>
            <NotificationContentTitle cn={classname} content={title} />
            <NotificationContentMessage cn={classname} content={message} />
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default NotificationContent;