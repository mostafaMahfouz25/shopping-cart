import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,title,img,price,inCart,company,info} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                 <div className="col-10 mx-auto text-center text-slanted text-blue  my-5">
                                    <h1>{title}</h1>
                                 </div>
                            </div>
                            <div className="row">
                                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img}  className="img-fluid" />
                                 </div>
                                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1> Model : {title} </h1>
                                    <h4 className="text-title text-muted mt-3 mb-2">
                                        Made By : <span className="text-uppercase"> {company} </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price : <strong>$</strong> {price}
                                        </strong>
                                    </h4>
                                    <h5 className="font-weight-bold"> Some Info About Product </h5>
                                    <p className="text-muted">{info}</p>
                                    <hr />
                                    <button className="btn btn-primary">
                                        <Link to="/" className="text-white">Back To Products</Link>
                                    </button>
                                    <button className="btn btn-danger ml-3" disabled={inCart?true:false} onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                        }}>
                                        {inCart?<p className="text-capitalize mb-0" disabled> In Cart</p>:<span>Add To Cart <i className="fas fa-cart-plus"></i> </span>}
                                    </button>
                                 </div>

                            </div>
                        </div>
                    )
                }}
                
            </ProductConsumer>
        )
    }
}
