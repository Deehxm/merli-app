import React from "react";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import "./Product.css"
import { useProduct } from "../../hooks/useProduct";

export const Product: React.FC = () => {
   
    const { product } = useProduct();

    return (
        product ? (
            <span>
                <Breadcrumb categories={product.categories} />
                <div className="Product">
                    <div className="Product-col-left">
                        <div className="Product-picture" >
                            <img alt={product.title} src={product.picture} />
                        </div>
                        <div className="Product-description" >
                            <h3>Descripción del Producto</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="Product-col-right">
                        <p>{product.condition} - {product.soldQuantity} vendidos</p>
                        <h2>{product.title}</h2>
                        <span className="Product-price">
                            <span>{product.price.currency} {product.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},</span>
                            <span className="Product-price-cents">{product.price.decimals.toString().padStart(2, "0")}</span>
                        </span>
                        <br />
                        <button>Comprar</button>
                    </div>
                </div>
            </span>
        ) : (<p>Loading...</p>)
    );
}