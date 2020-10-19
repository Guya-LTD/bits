import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

/**
 * A Button component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Button component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Button
 * @name Button
 * @private
 * @example 
 */

class List extends Component {
    constructor() {
        super();
        this.myRef = React.createRef();
        this.focusList = this.focusList.bind(this);
    }

    focusList() {
        this.myRef.current.focus()
        var clist = this.myRef.current;
        var submenu = clist.nextElementSibling;
        var faciliter  = clist.parentNode.getElementsByClassName('list__collapse__faciliter')[0];
        var submenuOpen = faciliter.parentNode.getElementsByClassName('list__collapse__faciliter__icon--open')[0];
        var submenuClose = faciliter.parentNode.getElementsByClassName('list__collapse__faciliter__icon--close')[0];
        clist.classList.toggle("list__collapse--open");
        clist.classList.toggle("active");
        submenu.classList.toggle("list__collapse--open");
        submenu.classList.toggle("active");
        submenuOpen.classList.toggle("list__collapse--close");
        submenuClose.classList.toggle("list__collapse--open");
    }

    render() {
        /* Props */
        const{bsPrefix, lists, variant} = this.props;

        /* Class name generator */
        const cn = withNaming({ e: '__', m: '', v: '--' })

        /* Set base classname */
        let classname = cn(bsPrefix);

        /* Classnames */
        const classnametext = classnames(
            classname({'': variant}),
        );

        /* List Collapse */
        let listCollapse = (collapses) => {
            collapses.map((coll) => {
               return <li className='list__item'>{coll}</li>
            })
        }

        /* Lists */
        let listItems = lists.map((list) => {
            if(list['type'] == 'single')
                return <li className='list__item'>{list['list']}</li>
            else if(list['type'] == 'faciliter') {
               return( 
                    <li className='list__item list__collapse' ref={this.myRef} onClick={this.focusList}>
                        <span class='list__collapse__faciliter'>
                            <span class='list__collapse__faciliter__icon'>{list['faciliter']['icon']}</span>
                            <span class='list__collapse__faciliter__text'>{list['faciliter']['text']}</span>
                            <span class='list__collapse__faciliter__icon list__collapse__faciliter__icon--open'>{list['faciliter']['open']}</span>
                            <span class='list__collapse__faciliter__icon list__collapse__faciliter__icon--close'>{list['faciliter']['close']}</span>
                        </span>
                    </li>
                )
            }
            else if(list['type'] == 'collapse'){
                return (
                    <ul class='list__collapse__itmes'>
                        {
                            list['collapse'].map((coll) => {
                                return <li className='list__item'>{coll}</li>
                            })
                        }
                    </ul>
                )
            }
        })

        

        return(
            <div className={classnametext}>
                {listItems}
            </div>
        )
    }
}

List.propTypes = {
    /**
     * @description Base class name.
     * @property {string}
     * @default 'button' 
     */
    bsPrefix: PropTypes.string,
}

List.defaultProps = {
    bsPrefix: 'list',
}

/**
 * Module exports.
 * @public
 */

export default List;