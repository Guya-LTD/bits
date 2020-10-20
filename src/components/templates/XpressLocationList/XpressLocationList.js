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

class XpressLocationList extends Component {
    render() {
        /* Props */
        const{header, footer, search, location}=this.props;

        return(
            <div>
                {header}
                <div className='row'>
                    <div className='col-xs-12 container container--primary theme-red'>
                        <div className='row center-xs container__body'>
                            <div className='col-xs-6'>
                                {search}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3" style={{background: "#f5f5f5", padding: "20px"}}>
                        <div class="row" style={{marginTop: "10px"}}>
                            Showing 25 results
                        </div>
                        <div class="row" style={{overflowY: "auto"}}>
                            {
                                location.left.map((list) => {
                                    return(
                                        <div className="col-xs-12" style={{marginTop: "10px"}}>
                                            {list}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        {location.right}
                    </div>
                </div>
                {footer}
            </div>
        )
    }
}

export default XpressLocationList;