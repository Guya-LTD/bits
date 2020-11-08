import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

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

class Tip extends Component {
    render() {
        /* Props */
        const {bsPrefix, theme, children, variant} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null

        /* Classnames */
        const classnametext = classnames(
            classname(),
            classname({'': variant}),
            themeName
        );

        return (
            <div className={classnametext}>
                {children}
            </div>
        )
    }
}

Tip.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'button' 
     */
    bsPrefix: PropTypes.string,
}

Tip.defaultProps = {
    bsPrefix: 'tip'
}

/**
 * Module exports.
 * @public
 */

export default Tip;