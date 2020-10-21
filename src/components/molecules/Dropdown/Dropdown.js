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

class Dropdown extends Component {
    render() {
        /* Props */
        // Type = {is-hoverable, is-active, is-right, is-up}
        const{type, children, trigger}=this.props;

        return(
            <div className={"dropdown" + " " + type}>
                <div className="dropdown-trigger">
                    {trigger}
                </div>
                <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {/* dropdown-item */}
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown;