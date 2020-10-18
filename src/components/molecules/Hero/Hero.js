import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

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

class Hero extends Component {
    render() {
        /* Props */
        const{bsPrefix, variant, left, right}=this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Classnames */
        const classnametext = classnames(
            classname({'': variant}),
        );

        return(
            <div className={classnametext + ' row'}>
                <div className='col-md hero__left'>
                    {left}
                </div>
                <div className='col-md hero__right'>
                    {right}
                </div>
            </div>
        )
    }
}

Hero.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'button' 
     */
    bsPrefix: PropTypes.string,
}

Hero.defaultProps = {
    bsPrefix: 'hero',
}

export default Hero;