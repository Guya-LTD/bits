import React from 'react';

import ServiceHeroLeft from './__Left/ServiceHeroLeft';
import ServiceHeroRight from './__Right/ServiceHeroRight';

/**
 * Service template hero component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description Service template hero component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component 
 * @name ServiceHero
 * @private
 * @example 
 */

const ServiceHero = ({cn, content}) => {
    /* Class names collection */
    const classname = cn('hero');

    /* Additional classnames */
    const flexboxClass = ' '.concat('row');

    return (
        <div className={classname + flexboxClass}>
            {!!(content.left)? <ServiceHeroLeft cn={classname} content={content.left} /> : null}
            {!!(content.right)? <ServiceHeroRight cn={classname} content={content.right} /> : null}
        </div>
    )
}

/**
 * Module exports.
 * @public
 */

export default ServiceHero;