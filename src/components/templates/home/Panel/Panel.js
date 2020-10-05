import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import PanelBody from './__Body/PanelBody';
import PanelFooter from './__Footer/PanelFooter';
import PanelHeader from './__Header/PanelHeader';

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
    render () {
        /* Props */
        const {
            bsPrefix,
            sidebar,
            header,
            children,
            footer
        } = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return (
            <div className='row'>
                <div className='col-xs-2'>
                    {sidebar}
                </div>
                <div className='col-xs-10 main main--has-sidebar container container--menu'>
                {!!(header)? <PanelHeader cn={classname} content={header} /> : null}
                {!!(children)? <PanelBody cn={classname} content={children} /> : null}
                {!!(footer)? <PanelFooter cn={classname} content={footer} /> : null}
                </div>
            </div>
        )
    }
}

Panel.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'sidebar' 
     */
    bsPrefix: PropTypes.string,

}

Panel.defaultProps = {
    bsPrefix: 'container',
    sidebar: null,
    header: null,
    footer: null
}

/**
 * Module exports.
 * @public
 */

export default Panel;