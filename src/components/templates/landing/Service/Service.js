import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname'

import Flexbox from  '@bit/guya-ltd.gcss.styles.flexbox';
import ServiceHeader from './__Header/ServiceHeader';
import ServiceHero from './__Hero/ServiceHero';

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

class Service extends Component {
    render() {
        /* Props */
        const {bsPrefix, header, hero} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return (
            <div>
                {!!(header)? <ServiceHeader cn={classname} content={header} /> : null}
                <main role="main">
                    {!!(hero)? <ServiceHero cn={classname} content={hero} /> : null}
                </main>
            </div>
        )
    }
}

Service.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'service' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Services header.
     * @property {node}
     * @default null
     */
    header: PropTypes.node,
    /**
     * @description Service Hero.
     * @property {node}
     * @default null
     */
    hero: PropTypes.node,
}

Service.defaultProps = {
    bsPrefix: 'service',
    header: null,
    hero: null,
}

/**
 * Module exports.
 * @public
 */

export default Service;