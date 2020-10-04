import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import NotificationContent from './__Content/NotificationContent';

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
 * @component Blockquote
 * @name Blockquote
 * @private
 * @example 
 */

class Notification extends Component {
    render() {
        /* Props */
        const {
            bsPrefix,
            title,
            message,
            close,
            size,
            border,
            href,
            type,
            theme,
            variant,
        } = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null

        /* Classnames */
        const classnametext = classnames(
            classname({'': size}),
            classname({'': border + '-border'}),
            classname({'': variant}),
            classname({'': type}),
            themeName
        );

        if(href != null)
            return (
                <a className={classnametext} href={href}>
                    <NotificationContent cn={classname} title={title} message={message} close={close} /> 
                </a>
            )
        else 
            return (
                <div className={classnametext}>
                    <NotificationContent cn={classname} title={title} message={message} close={close} /> 
                </div>
            )
    }
}

Notification.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'blockquote' 
     */
    bsPrefix: PropTypes.string,
}

Notification.defaultProps = {
    bsPrefix: 'notification',
    title: null,
    message: null,
    close: null
}

/**
 * Module exports.
 * @public
 */

export default Notification;