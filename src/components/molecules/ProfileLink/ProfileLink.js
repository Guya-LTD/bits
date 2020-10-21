import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames'

/**
 * A Link component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Link component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Link
 * @name Link
 * @private
 * @example 
 */

class ProfileLink extends Component {
    render() {
        /* Props */
        const {bsPrefix, children, href, size, theme, variant, cls, photo, name, description} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null

        /* Classnames */
        const classnametext = classnames(
            classname({'': size}),
            classname({'': variant}),
            themeName
        );

        return ( 
            <a className={classnametext + " row " + cls} href={href} style={{height: "60px"}}>
                <span className="row col-xs-12" style={{width: "auto", height: "60px", margin: "0", paddingLeft: "0", paddingRight: "0", paddingTop: "0", borderTopLeftRadius: "16px", borderTopRightRadius: "16px"}}>
                    <span className='col-xs-3 profile-link__photo'>{photo}</span>
                    <span className='col-xs-9'>
                        <span className="profile-link__name">{name}</span>
                        <br />
                        <span className="profile-link__description">{description}</span>
                    </span>
                </span>
            </a>
        )
    }
}

ProfileLink.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'profile-link' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Text.
     * @property {string}
     * @default 'Link'
     */
    children: PropTypes.string,
    /**
     * @description Link.
     * @property {string}
     * @default '#'
     */
    href: PropTypes.string,
    /**
     * @description Size.
     * @enum {('xs'|'sm'|'md'|'lg'|'xl')}
     * @default 'md'
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /**
     * @description Theme.
     * @enum {('theme-red'|'theme-royal-blue'|'cornflower-blue')}
     * @default null
     */
    theme: PropTypes.oneOf(['theme-red', 'theme-royal-blue']),
}

ProfileLink.defaultProps = {
    bsPrefix: 'profile-link',
    children: 'Link',
    href: '#',
    size: 'md'
}

/**
 * Module exports.
 * @public
 */

export default ProfileLink;