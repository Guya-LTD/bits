import React, { Component } from 'react';

class ShopView extends Component {
    render() {
        /* Props */
        const{header, children}=this.props;

        return(
            <div>
                {header}
                {children}
            </div>
        )
    }
}

export default ShopView;