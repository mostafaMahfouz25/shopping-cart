import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';


export default class Productlist extends Component {


 
    render() {
      console.log()
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <Title  title="Products" name="Our" />
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {
                                    value=>{
                                        return value.products.map(product=>{
                                            return <Product  key={product.id} product={product} />
                                        })
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
