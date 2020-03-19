import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value)=>{
                        const {modalOpen,closeModal} = value;
                        const {id,img,price,title} = value.modalProduct;
                        if(!modalOpen)
                        {
                            return null;
                        }
                        else{
                            return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                         <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4">
                                            <h5>Item Added To The Cart</h5>
                                            <img src={img} className="img-fluid" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted"> price : $ {price} </h5>
                                            <Link to="/" onClick={()=>{closeModal()}} className="btn btn-success mr-3">Continu To Shoping</Link>
                                            <Link to="/cart" onClick={()=>{closeModal()}} className="btn btn-info">Go To Cart <i className="fas fa-cart-plus"></i></Link>
                                         </div>
                                    </div>
                                </div>
                            </ModalContainer>);
                        }
                    }
                }
                
            </ProductConsumer>
        );
    }
}


const ModalContainer = styled.div`
    
    position:fixed;
    top:0;
    left0;
    right:0;
    bottom:0;
    width:100%;
    background:rgba(2,2,2,0.3);
    display:flex;
    justify-content:center;
    align-items:center;

    #modal
    {
        text-align:center;
        background:var(--mainWhite);
        padding:1rem;
    }
`