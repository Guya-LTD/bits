import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import TypographyH1 from './_H1/TypographyH1';
import TypographyH2 from './_H2/TypographyH2';
import TypographyH3 from './_H3/TypographyH3';
import TypographyH4 from './_H4/TypographyH4';
import TypographyH5 from './_H5/TypographyH5';
import TypographyH6 from './_H6/TypographyH6';

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

class Typography extends Component {
    render() {
        /* Props */
        const {bsPrefix, children, size, theme} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix);

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null
        
        /* Classnames */
        const classnametext = classnames(
            classname(),
            themeName
        );

        if(size == 'h1')
            return <TypographyH1 cn={classname} theme={themeName} children={children} />
        else if(size == 'h2')
            return <TypographyH2 cn={classname} theme={themeName} children={children} />
        else if(size == 'h3')
            return <TypographyH3 cn={classname} theme={themeName} children={children} />
        else if(size == 'h4')
            return <TypographyH4 cn={classname} theme={themeName} children={children} />
        else if(size == 'h5')
            return <TypographyH5 cn={classname} theme={themeName} children={children} />
        else if(size == 'h6')
            return <TypographyH6 cn={classname} theme={themeName} children={children} />
        else
            return <span className={classnametext}>{children}</span>
    }
}

Typography.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'typography' 
     */
    bsPrefix: PropTypes.string,
    /**
     * @description Size.
     * @enum {('h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'xs'|'sm'|'md'|'lg'|'xl')}
     * @default 'md'
     */
    size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'xs', 'sm', 'md', 'lg', 'xl']),
    /**
     * @description Text.
     * @property {string}
     * @default 'Typography Text'
     */
    children: PropTypes.string,
}

Typography.defaultProps = {
    bsPrefix: 'typography'
}

/**
 * Module exports.
 * @public
 */

export default Typography;