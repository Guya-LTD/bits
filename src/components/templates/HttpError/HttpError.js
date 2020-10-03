import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A Typography component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Typography component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Typography
 * @name Typography
 * @private
 * @example 
 */


class HttpError extends Component {
    render() {
        /* Props */
        const {bsPrefix, status_code, status, description} = this.props;

        const splitStatusCode = status_code.toString().split("")

        return(
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h3>{status}</h3>
                        <h1><span>{splitStatusCode[0]}</span><span>{splitStatusCode[1]}</span><span>{splitStatusCode[2]}</span></h1>
                    </div>
                    <h2>{description}</h2>
                </div>
            </div>
        )
    }
}

HttpError.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'typography' 
     */
    bsPrefix: PropTypes.string,
}

/**
 * Module exports.
 * @public
 */

export default HttpError;