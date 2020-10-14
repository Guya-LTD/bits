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

class XpressHome extends Component {
    render() {
        /* Props */
        const{bsPrefix, header, hero, track, footer} = this.props;
        
        return(
            <div>
                {header}
                {hero}
                <div className='row center-xs'>
                    <div className='col-xs-8 container container--menu container--round container--primary theme-red'>
                        <div className='row container__body'>
                            {
                                track.map((item) => {
                                    return (
                                        <div className='col-xs'>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {footer}
            </div>
        )
    }
}

export default XpressHome;