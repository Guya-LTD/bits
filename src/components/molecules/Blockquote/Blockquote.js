import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname'

import BlockquoteHeader from './__Header/BlockquoteHeader';
import BlockquoteBody from './__Body/BlockquoteBody';
import BlockquoteFooter from './__Footer/BlockquoteFooter';

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

class Blockquote extends Component {
    render() {
        /* Props */
        const {bsPrefix, header, body, footer,} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        return (
            <div className={classname()}>
                {!!(header)? <BlockquoteHeader cn={classname} content={header} /> : null}
                {!!(body)? <BlockquoteBody cn={classname} content={body} /> : null}
                {!!(footer)? <BlockquoteFooter cn={classname} content={footer} /> : null}
            </div>
        )
    }
}

Blockquote.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'blockquote' 
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
    footer: PropTypes.node,
}

Blockquote.defaultProps = {
    bsPrefix: 'blockquote',
    header: null,
    body: null,
    footer: null,
}

/**
 * Module exports.
 * @public
 */

export default Blockquote;