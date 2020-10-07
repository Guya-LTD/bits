import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import Input from '../Input';

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

class Search extends Component {
    render() {
        /* Props */
        const {
            bsPrefix, 
            placeholder,
            required,
            value,
            size,
            onChange,
            block,
            theme,
            icon
        } = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        let addonClassname = cn(classname('addon'));

        let addonClassnameText = addonClassname({'': 'prepend'});

        /* Left Addon */
        const hasLeftAddon = classname({'': 'addon-left'});

        /* Classnames */
        const classnametext = classnames(
            hasLeftAddon,
        );

        return(
            <div className={classnametext}>
                <span className={addonClassnameText}>
                    {icon}
                </span>
                <Input type='search' placeholder={placeholder} required={required} value={value} size={size} onChange={onChange} block theme={theme}/>
            </div>
        )
    }
}

Search.propTypes = {
     /**
     * @description Base class name.
     * @property {string}
     * @default 'field' 
     */
    bsPrefix: PropTypes.string,
}

Search.defaultProps = {
    bsPrefix: 'field'
}

/**
 * Module Exports
 * @public
 */

export default Search;