import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname'

import ButtonLink from './_Link/ButtonLink';
import ButtonIcon from './__Icon/ButtonIcon';

/**
 * A Button component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Button component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Button
 * @name Button
 * @private
 * @example 
 */

class Button extends Component {
    render() {
        /* Props */
        const {bsPrefix, children, size, type, href, icon, theme} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Theme */
        let themeName;

        if(theme)
            themeName = ' '.concat('theme-', theme)
        else
            themeName = ''

        if(href && type === 'link')
            return <ButtonLink cn={classname} theme={themeName} children={children} href={href} />
        else
            return (
                <button type={type} className={classname({'': size}) + themeName}>
                    {!!(icon)? <ButtonIcon cn={classname} icon={icon} /> : null}
                    {children}
                </button>
            )
    }
}

Button.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'button' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Size.
     * @enum {('xs'|'sm'|'md'|'lg'|'xl')}
     * @default 'md'
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /**
     * @description Text.
     * @property {string}
     * @default 'Button'
     */
    children: PropTypes.string,
    /**
     * @description Button type.
     * @property {string}
     * @default 'button'
     */
    type: PropTypes.string,
    /**
     * @description Button link href.
     * @property {string}
     * @default null
     */
    href: PropTypes.string,
    /**
     * @description Button left icon.
     * @property {node}
     * @default null
     */
    icon: PropTypes.node,
    /**
     * @description Theme.
     * @enum {('theme-red'|'theme-royal-blue')}
     * @default null
     */
    theme: PropTypes.oneOf(['red', 'royal-blue']),
}

Button.defaultProps = {
    bsPrefix: 'button',
    size: 'md',
    children: 'Button',
    type: 'button',
    href: null,
    icon: null,
    theme: null,
}

/**
 * Module exports.
 * @public
 */

export default Button;