import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';
import { useRouteMatch } from 'react-router-dom';

const ProductContext = React.createContext();
class ProductProvider extends Component {

    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        // cart:storeProducts,
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,

    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = ()=>{
        let tempProducts = [];
        storeProducts.forEach((item)=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem]
        });
        this.setState({
            products:tempProducts
        })
    }
    handleDetail =(id)=>{
        const product = this.getItem(id);
        this.setState({
            detailProduct:product
        })
        // console.log("handle detail")
    }


    getItem = (id)=>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    addToCart =(id)=>{
        
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total=price;

        this.setState({
            products:tempProducts,cart:[...this.state.cart,product]
        },()=>{
           this.addTotals();
        })
    }


    // //////////////////////////////////////////

    // modal 
    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })

        // console.log("open modal")
    }
    closeModal = () =>{
        this.setState({modalOpen:false})
    }

    // ///////////////////////////////////////////



    increment = (id)=>{


        let tempCart = [...this.state.cart];
        const index = tempCart.findIndex(item => item.id === id);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(()=>{
            return { cart:[...tempCart] }
        },()=>{
            this.addTotals();
            console.log(this.state.cart)
            console.log("dgsdfgdsfg")
        })
   
       
    }
    decrement = (id)=>{
        let tempCart = [...this.state.cart];
        const index = tempCart.findIndex(item => item.id === id);
        const product = tempCart[index];

        product.count = product.count - 1;
        if(product.count ===0 )
        {
            this.removeItem(id);
        }
        else 
        {
            product.total = product.count * product.price;
            this.setState(()=>{
                return { cart:[...tempCart] }
            },()=>{
                this.addTotals();
                console.log(this.state.cart)
                console.log("dgsdfgdsfg")
            })
        }

    }

    removeItem = (id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count=0;
        removeProduct.total=0;

        this.setState({
            cart:[...tempCart],
            products:[...tempProducts]
        },()=>{
            this.addTotals();
        })

    }
    clearCart = ()=>{
        
        this.setState({
            cart:[],
        },()=>{
            this.setState();
            this.addTotals();
        })

    }

    addTotals = ()=>{
        let subTotals = 0;
        this.state.cart.map(item=> (subTotals += item.total))
        const tempTax = subTotals * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotals + tax ;
        this.setState({
            cartSubTotal:subTotals,
            cartTax:tax,
            cartTotal:total
        })
    }


    render() {
        return (
            <ProductContext.Provider value={{...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            closeModal:this.closeModal,
            openModal:this.openModal,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};