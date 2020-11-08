import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname'

/**
 * A Layout component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Layout component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Service
 * @name Service
 * @private
 * @example 
 */

class ShopHome extends Component {
    render() {
        /* Props */
        const{header, notification, hero, services, brands, products, footer}=this.props;

        return(
            <div>
                {header}
                {notification}
                {hero}
                {services}
                {brands}
                {products}
                {footer}
            </div>
        )
    }
}

export default ShopHome;