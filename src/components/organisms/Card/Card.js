import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import CardImage from './__Image/CardImage';
import CardHeader from './__Header/CardHeader';
import CardBody from './__Body/CardBody';
import CardFooter from './__Footer/CardFooter';

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

class Card extends Component {
    render() {
        /* Props */
        const {bsPrefix, image, header, children, footer, float, block, variant} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })
 
        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Block name */
        const blockName = block ? 'block' : null;

        /* Float name */
        const floatName = float ? 'float' : null;

        /* Classnames */
        const classnametext = classnames(
            classname({'': blockName}),
            classname({'': floatName}),
            classname({'': variant})
        );

        return (
            <div className={classnametext}>
                {!!(image)? <CardImage cn={classname} content={image} /> : null}
                {!!(header)? <CardHeader cn={classname} content={header} /> : null}
                {!!(children)? <CardBody cn={classname} content={children} /> : null}
                {!!(footer)? <CardFooter cn={classname} content={footer} /> : null}
            </div>
        )
    }
}

Card.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'blockquote' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Header Image
     * @property {element}
     * @default null
     */
    image: PropTypes.element,
    /**
     * @description The Card header.
     * @property {node}
     * @default null
     */
    header: PropTypes.node,
    /**
     * @description The Card body.
     * @property {node}
     * @default null
     */
    children: PropTypes.node,
    /**
     * @description The Card footer.
     * @property {node}
     * @default null
     */
    footer: PropTypes.node,
    /**
     * @description Block
     * @property {bool}
     * @default false
     */
    block: PropTypes.bool,
    /**
     * @description Float
     * @property {bool}
     * @default false
     */
    float: PropTypes.bool,
}

Card.defaultProps = {
    bsPrefix: 'card',
    image: null,
    header: null,
    children: null,
    footer: null,
}

/**
 * Module exports.
 * @public
 */

export default Card;