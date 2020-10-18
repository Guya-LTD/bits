import React, { Component } from 'react';

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

class Nav extends Component {
    constructor() {
        super();
        this.myRef = React.createRef();
        this.toggleNavItems = this.toggleNavItems.bind(this);
    }

    toggleNavItems() {
        this.myRef.current.focus();
        var nList = this.myRef.current;
        var faciliter  = nList.parentNode.getElementsByClassName('nav__faciliter')[0];
        var submenuOpen = faciliter.parentNode.getElementsByClassName('nav__faciliter__icon--open')[0];
        var submenuClose = faciliter.parentNode.getElementsByClassName('nav__faciliter__icon--close')[0];
        nList.classList.toggle("nav__item--collapse--open");
    }

    render() {
        const{navs}=this.props;

        /* Nav list collapse */
        let navCollapseIems = (collapses) => {
            collapses.map((collapse) => {
                return <li className='nav__item'>{collapse}</li>
            })
        }

        /* Lists */
        let navItems = navs.map((nav) => {
            if(nav['type'] == 'single')
                return <li className='nav__item'>{nav['nav']}</li>
            else if(nav['type'] == 'collapse'){
                return(
                <li className='nav__item nav__item--collapse' ref={this.myRef} onClick={this.toggleNavItems}>
                    <span class='nav__faciliter'>
                        <span class='nav__faciliter__text'>{nav['faciliter']['text']}</span>
                        <span class='nav__faciliter__icon nav__faciliter__icon--open'>{nav['faciliter']['open']}</span>
                        <span class='nav__faciliter__icon nav__faciliter__icon--close'>{nav['faciliter']['close']}</span>
                    </span>
                    <ul class='nav__collapse'>
                        <span className='nav__collapse__left'>
                            {
                                nav['collapse']['left'].map((collapse) => {
                                    return <li className='nav__item'>{collapse}</li>
                                })
                            }
                        </span>
                        {
                            nav['collapse']['right']
                            &&
                            <span className='nav__collapse__right'>
                                {
                                    nav['collapse']['right'].map((collapse) => {
                                        return <li className='nav__item'>{collapse}</li>
                                    })
                                }
                            </span>
                        }
                    </ul>
                </li>
                )
            }
        })

        return(
            <ul className='nav'>
                {navItems}
            </ul>
        )
    }
}

export default Nav;