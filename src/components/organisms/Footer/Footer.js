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


class Footer extends Component {
    render() {
        /* Props */
        const{
            bsPrefix,
            // Row one
            r1c1,
            r1c2,
            r1c3,
            r1c4,
            r1c5,
            r1c6,
            // Row Two
            r2c1,
            r2c2,
            r2c3,
            r2c4,
            r2c5,
            // Row Three
            r3
        }=this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })
 
        /* Set base classname */
        let classname = cn(bsPrefix)

        return(
            <footer className='row'>
                <div className='row col-xs-12'>
                    <div class='col-xs-2'>
                        {r1c1}
                    </div>
                    <div class='col-xs-2'>
                        {r1c2}
                    </div>
                    <div class='col-xs-2'>
                        {r1c3}
                    </div>
                    <div class='col-xs-2'>
                        {r1c4}
                    </div>
                    <div class='col-xs-2'>
                        {r1c5}
                    </div>
                    <div class='col-xs-2'>
                        {r1c6}
                    </div>
                </div>
                <div className='row col-xs-12'>
                    <div class='col-xs-2'>
                        {r2c1}
                    </div>
                    <div class='col-xs-2'>
                        {r2c2}
                    </div>
                    <div class='col-xs-2'>
                        {r2c3}
                    </div>
                    <div class='col-xs-2'>
                        {r2c4}
                    </div>
                    <div class='col-xs-2'>
                        {r2c5}
                    </div>
                </div>
                <div class='row col-xs-12'>
                    {r3}
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'blockquote' 
     */
    bsPrefix: PropTypes.string,
}

Footer.defaultProps = {
    bsPrefix: 'footer',
}

export default Footer;