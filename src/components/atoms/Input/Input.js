import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames'

/**
 * An Input component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description An Input component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Input
 * @name Input
 * @private
 * @example 
 */

class Input extends Component {
    render() {
        /* Props */
        const {bsPrefix, value, placeholder, required, size, block, type} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Block name */
        const blockName = block ? 'block' : null;

        /* Classnames */
        const classnametext = classnames(
            classname({'': size}),
            classname({'': blockName}),
        );

        return ( <input className={classnametext} 
                      type={type} 
                      placeholder={placeholder} 
                      required={required} 
                      value={value} /> )
    }
}

Input.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'input' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Type of input.
     * @enum {('text'|'number'|'submit'|'date'|'email')}
     * @default 'md'
     */
    type: PropTypes.oneOf(['text', 'number', 'submit', 'date', 'email']),
    /**
     * @description Value.
     * @property {string}
     * @default null
     */
    value: PropTypes.string,
    /**
     * @description Placeholder.
     * @property {string}
     * @default 'Input Text'
     */
    placeholder: PropTypes.string,
    /**
     * @description Size.
     * @enum {('xs'|'sm'|'md'|'lg'|'xl')}
     * @default 'md'
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

Input.defaultProps = {
    bsPrefix: 'input',
    size: 'md',
    type: 'text',
    value: null,
    placeholder: 'Input Text',
}

/**
 * Module exports.
 * @public
 */

export default Input;