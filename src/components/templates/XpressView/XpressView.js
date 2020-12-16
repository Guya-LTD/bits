import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import Breadcrumb from '../../molecules/Breadcrumb';

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

class XpressView extends Component {
    render() {
        /* Props */
        const{header, breadcrumb, content, footer, children}=this.props;
        
        return(
            <div>
                {header}

                {/* CONTAINER */}
                <div className='col-xs-12 container container--primary theme-red' style={{minHeight: "250px", width: "100%"}}>
                    <div className="row center-md container__header" style={{margin: "0"}}>
                        <div className="col-xs-12">
                            {breadcrumb}
                        </div>
                    </div>
                </div>
                {/* END OF CONTAINER */}

                <div className="row" style={{marginTop: "-216px"}}>
                    <div className="col-md-3" />
                    <div className="col-md-6 col-xs-12">
                        {children}
                    </div>
                </div>

                {footer}
            </div>
        )
    }
}

export default XpressView;