import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

/**
 * A Form Control component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Form Control component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component FormControl
 * @name FormControl
 * @private
 * @example 
 */

class FormControl extends Component {
    render() {
        /* Props */
        const {bsPrefix, onSubmit, children} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })
 
        /* Set base classname */
        let classname = cn(bsPrefix)

        return (
            <form className={classname()} onSubmit={onSubmit}>
                {children}
            </form>
        )
    }
}

FormControl.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'form' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Onsubmit function
     * @property {element}
     * @default null
     */
    onSubmit: PropTypes.element,
    /**
     * @description Form's body
     * @property {element}
     * @default null
     */
    children: PropTypes.element,
}

FormControl.defaultProps = {
    bsPrefix: 'form',
    children: null
}


/**
 * Module exports.
 * @public
 */

export default FormControl;