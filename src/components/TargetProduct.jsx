import React, { useRef, useState } from 'react';
import Counter from './Counter';

export default function TargetProduct({ product, handleAddToCart }) {

    const container = useRef();
    const [buttonView, setButtonView] = useState(false);
    const [counter, setCounter] = useState(1);

    const handleAdd = () => {
        handleAddToCart({
            ...product,
            amount: counter, 
        });
        setCounter(1);
        container.current.removeAttribute('style');
        setButtonView(false);
    }

    const handleProduct = () => {
        if (!buttonView) {
            const style = `
            width: 290px;
            height: 500px;
            box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.2), 1px 3px 8px rgba(39, 44, 49, 0.1);
    `
            container.current.setAttribute('style', style);

            setButtonView(true);
        } else {
            container.current.removeAttribute('style');
            setButtonView(false);
        }
    }

    return (
        <div className='Products-item' ref={container}>
            <img
                src={product.image}
                alt={product.title} 
            />
            <div className='Product-item-info'>
                <h2>
                    {product.title}
                    <span>
                        {" "} ${product.price}
                    </span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button 
                type='button' 
                onClick={handleProduct}
            >
                {
                    !buttonView ? 'Agregar al carrito' : 'Cerrar' 
                }
            </button>
            <Counter counter={counter} setCounter={setCounter} />
            <button 
                type='button' 
                onClick={handleAdd}
            >
                Agregar
            </button>
        </div>

    )
}
