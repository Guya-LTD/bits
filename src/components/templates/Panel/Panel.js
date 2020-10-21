import React, { Component } from 'react';

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

class Panel extends Component {
    render() {
        /* Props */
        const{
            sidebar,
            children
        }=this.props;

        return(
            <div className="row" style={{background: "#f2f4fb"}}>
                <div className="col-xs-2">
                    {sidebar}
                </div>
                {children}
            </div>
        )
    }
}

export default Panel;