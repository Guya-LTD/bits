import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname'

import Flexbox from  '@bit/guya-ltd.gcss.styles.flexbox';
import LoginHeader from './__Header/LoginHeader';
import LoginBody from './__Body/LoginBody';
import LoginFooter from './__Footer/LoginFooter';

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

class Login extends Component {
    render() {
        /* Props */
        const {bsPrefix, header, body, footer,} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Additional classnames */
        const flexboxClass = ' '.concat('row center-xs');

        return (
            <div className={classname() + flexboxClass}>
                <div class='col-xs-11 col-sm-3 col-lg-3'>
                    {!!(header)? <LoginHeader cn={classname} content={header} /> : null}
                    {!!(body)? <LoginBody cn={classname} content={body} /> : null}
                    {!!(footer)? <LoginFooter cn={classname} content={footer} /> : null}
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'login' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description The blockquote header.
     * @property {node}
     * @default null
     */
    header: PropTypes.node,
    /**
     * @description The blockquote body.
     * @property {node}
     * @default null
     */
    body: PropTypes.node,
    /**
     * @description The blockquote footer.
     * @property {node}
     * @default null
     */
    footer: PropTypes.object,
}

Login.defaultProps = {
    bsPrefix: 'login',
    header: null,
    body: null,
    footer: null,
}

/**
 * Module exports.
 * @public
 */

export default Login;