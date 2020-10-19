import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

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

class Container extends Component {
    render() {
        const{bsPrefix, theme}=this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null

        /* Classnames */
        const classnametext = classnames(
            themeName
        );

        return(
            <div className={classnametext}>
                
            </div>
        )
    }
}

Container.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'blockquote' 
     */
    bsPrefix: PropTypes.string,
}

Blockquote.defaultProps = {
    bsPrefix: 'container',
}

/**
 * Module exports.
 * @public
 */

 export default Container;