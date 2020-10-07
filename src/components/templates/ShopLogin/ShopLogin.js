import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

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
 * @component Login
 * @name Login
 * @private
 * @example 
 */

class ShopLogin extends Component {
    render() {
        /* Props */
        const {bsPrefix, left, right} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix);

        /* Additional classnames */
        const flexboxClass = ' '.concat('row center-xs');

        return (
            <div className={classname() + flexboxClass}>
                <div className='container container--round row'>
                    <div className='container__left col-xs-6'>
                        {left}
                    </div>
                    <div className='container__right col-xs-6'>
                        {right}
                    </div>
                </div>
            </div>
        )
    }
}

ShopLogin.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'login' 
     */
    bsPrefix: PropTypes.string,
}


ShopLogin.defaultProps = {
    bsPrefix: 'sh-login'
}

/**
 * Module exports.
 * @public
 */

export default ShopLogin;