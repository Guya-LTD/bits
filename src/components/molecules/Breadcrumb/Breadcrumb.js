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

class Breadcrumb extends Component {
    render() {
        const{lists}=this.props;

        return(
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    {
                        lists.map((list) => {
                            if(list.state == 'active')
                                return(
                                    <li className="is-active">{list.link}</li>
                                )
                            else
                                return(
                                    <li>{list.link}</li>
                                )
                        })
                    }
                </ul>
            </nav>
        )
    }
}

/**
 * Module exports.
 * @public
 */

export default Breadcrumb;