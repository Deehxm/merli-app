import React from "react";
import "./Product.css"

export const Product: React.FC = () => {
    return (
        <div className="Product">
            <div className="Product-col-left">
                <div className="Product-picture" >
                    <img alt="Imagem do Produto" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__small@2x.png"/>
                </div>
                <div className="Product-description" >
                    <h3>Descrição do Produto</h3>
                    <p>O acessar uma página web através de um navegador, ele é capaz de interpretar o código HTML e renderizá-lo de forma compreensível para o usuário final, exibindo textos, botões etc. com as configurações definidas por meio das diversas tags que essa linguagem dispõe.o acessar uma página web através de um navegador, ele é capaz de interpretar o código HTML e renderizá-lo de forma compreensível para o usuário final, exibindo textos, botões etc. com as configurações definidas por meio das diversas tags que essa linguagem dispõe.o acessar uma página web através de um navegador, ele é capaz de interpretar o código HTML e renderizá-lo de forma compreensível para o usuário final, exibindo textos, botões etc. com as configurações definidas por meio das diversas tags que essa linguagem dispõe.o acessar uma página web através de um navegador, ele é capaz de interpretar o código HTML e renderizá-lo de forma compreensível para o usuário final, exibindo textos, botões etc. com as configurações definidas por meio das diversas tags que essa linguagem dispõe.o acessar uma página web através de um navegador, ele é capaz de interpretar o código HTML e renderizá-lo de forma compreensível para o usuário final, exibindo textos, botões etc. com as configurações definidas por meio das diversas tags que essa linguagem dispõe.o acessar uma página web através de um navegador, ele é capaz de interpretar o código HTML e renderizá-lo de forma compreensível para o usuário final, exibindo textos, botões etc. com as configurações definidas por meio das diversas tags que essa linguagem dispõe.o acessar uma página web através de um navegador, ele é capaz de interpretar o código HTML e renderizá-lo de forma compreensível para o usuário final, exibindo textos, botões etc. com as configurações definidas por meio das diversas tags que essa linguagem dispõe.</p>
                </div>
            </div>
            <div className="Product-col-right">
                <p>Novo - 345 Vendidos</p>
                <h2>Produto Mercado Livre</h2>
                <span className="Product-price">
                    <span>R$ 1.980,</span>
                    <span className="Product-price-cents">99</span>
                </span>
                <br />
                <button>Comprar</button>
            </div>
        </div>
    );
}
