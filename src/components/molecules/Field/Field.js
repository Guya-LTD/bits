import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames'

import Input from '../../atoms/Input';
import FieldLabel from './__Label/FieldLabel';
import FieldDescription from './__Description/FieldDescription';
import FieldAddonRight from './__Addon/__Right/FieldAddonRight';
import FieldAddonLeft from './__Addon/__Left/FieldAddonLeft';

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
               onChange,
               addon,
               block} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Left Addon */
        const hasLeftAddon = addon.left ? classname({'': 'addon-left'}) : null;

        /* Right Addon */
        const hasRightAddon = addon.right ? classname({'': 'addon-right'}) : null;

        /* Classnames */
        const classnametext = classnames(
            hasLeftAddon,
            hasRightAddon
        );

        return (
            <div className={classnametext}>
                {!!(label)? <FieldLabel cn={classname} label={label} /> : null}
                {!!(addon.left)? <FieldAddonLeft cn={classname} addon={addon.left} /> : null}
                <Input type={type} placeholder={placeholder} required={required} value={value} size={size} onChang={onChange} block/>
                {!!(addon.right)? <FieldAddonRight cn={classname} addon={addon.right} /> : null}
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
    /**
     * @description Onchange.
     * @property {event}
     * @default null
     */
    //onChange:
}

Field.defaultProps = {
    bsPrefix: 'field',
    label: 'Input',
    description: null,
    size: 'md',
    type: 'text',
    value: null,
    placeholder: 'Input Text',
    addon: {left: null, right: null}
}

/**
 * Module exports.
 * @public
 */

export default Field;