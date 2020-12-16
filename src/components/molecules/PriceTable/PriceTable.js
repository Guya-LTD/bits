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
        const{
            title, 
            lists, 
            sign, 
            locale,
            weight_name,
            weight_unit,
            length_name,
            length_unit,
            width_name,
            width_unit,
            height_name,
            height_unit,
            href,
            text,
            per
        }=this.props;
        return(
            <div id="generic_price_table" style={{background: "#eee"}}>   
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
                                    <div className="col-xs-12 col-md-4">
                                        {/* PRICE CONTENT START */}
                                        <div className="generic_content clearfix">
                                            {/* HEAD PRICE DETAIL START */}
                                            <div className="generic_head_price clearfix">
                                                {/* HEAD CONTENT START */}
                                                <div className="generic_head_content clearfix">
                                                    {/* HEADER START */}
                                                    <div className="head_bg" />
                                                    <div className="head">
                                                        <span>{list['name_' + locale]}</span>
                                                    </div>
                                                    {/* HEADER END */}
                                                </div>
                                                {/* HEADER CONTENT END */}

                                                {/* PRICE START */}
                                                
                                                <div className="generic_price_tag clearfix">
                                                    <span className="price">
                                                        <span className="sign">{sign && "Birr"}</span>
                                                        <span className="currency">{list.price.toString().split(".")[0]}</span>
                                                        <span className="cent">{list.price.toString().split(".")[1]}</span>
                                                        <span className="month">{per && "/Km"}</span>
                                                    </span>
                                                </div>
                                                {/* PRICE END */}
                                            </div>
                                            {/* HEAD PRICE DETAIL END */}

                                            {/* FEATURE LIST START */}
                                            <div className="generic_feature_list">
                                                <ul>
                                                    <li><span>{weight_name}</span> {list.weight}{weight_unit}</li>
                                                    <li><span>{length_name}</span> {list.length}{length_unit}</li>
                                                    <li><span>{width_name}</span>  {list.width}{width_unit}</li>
                                                    <li><span>{height_name}</span> {list.height}{height_unit}</li>
                                                </ul>
                                            </div>
                                            {/* FEATURE LIST END */}

                                            {/* BUTTON START */}
                                            <div className="generic_price_btn clearfix">
                                                <a className="" href={href}>{text}</a>
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