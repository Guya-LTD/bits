import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames'

import Input from '../../atoms/Input';
import FieldLabel from './__Label/FieldLabel';
import FieldDescription from './__Description/FieldDescription'

/**
 * A Field component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Field component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Field
 * @name Field
 * @private
 * @example 
 */

class Field extends Component {
    render() {
        /* Props */
        const {bsPrefix, 
               label, 
               description,
               value, 
               placeholder, 
               required, 
               size,
               type,
               block} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return (
            <div className={classname()}>
                {!!(label)? <FieldLabel cn={classname} label={label} /> : null}
                <Input type={type} placeholder={placeholder} required={required} value={value} size={size} />
                {!!(description)? <FieldDescription cn={classname} description={description} /> : null}
            </div>
        )
    }
}

Field.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'field' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Label.
     * @property {string}
     * @default null
     */
    label: PropTypes.string,
    /**
     * @description Description.
     * @property {string}
     * @default null
     */
    description: PropTypes.string,
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

Field.defaultProps = {
    bsPrefix: 'field',
    label: 'Input',
    description: 'Input small description text',
    size: 'md',
    type: 'text',
    value: null,
    placeholder: 'Input Text',
}

/**
 * Module exports.
 * @public
 */

export default Field;