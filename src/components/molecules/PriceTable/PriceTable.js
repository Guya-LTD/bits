import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A Navbar component represents an object or entity.
 * 
 * @author [Simon Belete](https://github.com/Simonbelete)
 * @license [MIT](https://opensource.org/licenses/MIT)
 * @project Guya E-commerce & Guya Express
 * @see [Github](https://github.com/Guya-LTD/bits)
 * @see [Bit.dev](https://bit.dev/guya-ltd/gcss)
 * @description A Navbar component represents an object or entity.
 * @version Uses @bit [Semver v2.0.0](https://semver.org/spec/v2.0.0.html)
 * @component Navbar
 * @name Navbar
 * @private
 * @example 
 */

class PriceTable extends Component {
    render() {
        const{title, lists}=this.props;
        return(
            <div id="generic_price_table">   
                <section>
                    <div className="container" style={{background: 0}}>
                        <div className="row">
                            {/* PRICE HEADING START */}
                            <div className="price-heading clearfix">
                                <h1>{title}</h1>
                            </div>
                            {/* PRICE HEADING END */}
                        </div>
                    </div>
                    <div className="container" style={{background: 0}}>
                        {/* BLOCK ROW START */}
                        <div className="row">
                            {
                                lists.map((list) => {
                                    return(
                                    <div className="col-md-4">
                                        {/* PRICE CONTENT START */}
                                        <div className="generic_content clearfix">
                                            {/* HEAD PRICE DETAIL START */}
                                            <div className="generic_head_price clearfix">
                                                {/* HEAD CONTENT START */}
                                                <div className="generic_head_content clearfix">
                                                    {/* HEADER START */}
                                                    <div className="head_bg" />
                                                    <div className="head">
                                                        <span>{list.name}</span>
                                                    </div>
                                                    {/* HEADER END */}
                                                </div>
                                                {/* HEADER CONTENT END */}

                                                {/* PRICE START */}
                                                <div className="generic_price_tag clearfix">
                                                    <span className="price">
                                                        <span className="sign">{list.sign && "Birr"}</span>
                                                        <span className="currency">{list.currency}</span>
                                                        <span className="cent">{list.cent}</span>
                                                        <span className="month">{list.per && "/Km"}</span>
                                                    </span>
                                                </div>
                                                {/* PRICE END */}
                                            </div>
                                            {/* HEAD PRICE DETAIL END */}

                                            {/* FEATURE LIST START */}
                                            <div className="generic_feature_list">
                                                <ul>
                                                    {
                                                        list.features.map((feature) => {
                                                            return(
                                                            <li><span>{feature.value}</span> {feature.name}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            {/* FEATURE LIST END */}

                                            {/* BUTTON START */}
                                            <div className="generic_price_btn clearfix">
                                                <a className="" href={list.href}>{list.text}</a>
                                            </div>
                                            {/* BUTTON END */}
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        {/* BLOCK ROW END */}
                    </div>
                </section>
            </div>
        )
    }
}

export default PriceTable;