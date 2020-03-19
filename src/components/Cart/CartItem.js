import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} className="img-fluid" style={{height:"5rem",width:"5rem"}} />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h3>{title} </h3>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h4>{price} </h4>
            </div>
            
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-danger p-2 px-3 mx-1" onClick={()=>decrement(id)}> - </span>
                        <span className="btn btn-info p-2 px-3 mx-1 disabled text-dark"  > {count} </span>
                        <span className="btn btn-success p-2 px-3 mx-1" onClick={()=>increment(id)}> + </span>
                    </div>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <h4>  <span className="btn btn-danger" onClick={()=>removeItem(id)}> <i className="fas fa-trash"></i> </span> </h4>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h3> <strong> {total} </strong>  </h3>
            </div>
        </div>
    )
}
