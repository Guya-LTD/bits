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


class InfoCard extends Component {
    render() {
        /* Props */
        const{bsPrefix, theme, variant, size, title, description, pin, list, type}=this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix)

        /* Theme name */
        const themeName = theme ? 'theme-' + theme : null

        /* Classnames */
        const classnametext = classnames(
            classname({'': size}),
            classname({'': variant}),
            classname({'': type}),
            themeName
        );

        return(
            <div className="row">
                {/* INFOCARD */}
                <div className="infocard">
                    {/* INFOCARD BODY */}
                    <div className="row infocard__body">
                        {/* INFOCARD BODY CONTENT */}
                        <div className="col-xs-10 infocard__body__content">
                            {title}
                            {description}
                            {list}
                        </div>
                        {/* END OF INFOCARD BODY CONTENT */}

                        {/* INFOCARD BODY PIN */}
                        <div className="col-xs-2 infocard__body__pin">
                            {pin}
                        </div>
                        {/* END OF INFOCARD BODY PIN */}
                    </div>
                    {/* END OF INFOCARD BODY */}
                </div>
                {/* End of InfoCard */}
            </div>
        )
    }
}

InfoCard.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'blockquote' 
     */
    bsPrefix: PropTypes.string,
}

InfoCard.defaultProps = {
    bsPrefix: 'infocard'
}


/**
 * Module exports.
 * @public
 */

export default InfoCard;