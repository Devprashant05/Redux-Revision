import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProducts } from "../store/actions/ProductAction";
import { deleteProducts } from "../store/reducers/ProductReducer";

function Products() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.ProductReducer);

    useEffect(() => {
        dispatch(asyncGetProducts());
    }, []);

    const deleteHandler = (index) => {
        dispatch(deleteProducts(index));
    };

    return (
        <div className="m-auto container p-8 mt-5 shadow-md bg-red-100">
            <h1 className="font-mono text-center text-3xl font-bold text-red-900">
                Products List
            </h1>
            <ul className="mt-5">
                {products &&
                    products.map((product, index) => {
                        return (
                            <li
                                className="p-3 bg-red-300 text-white hover:text-black w-1/2 text-center mb-2 rounded flex items-center justify-between"
                                key={index}
                            >
                                {product.title}
                                <span
                                    onClick={() => deleteHandler(index)}
                                    className="text-white p-2 rounded bg-red-500 hover:bg-red-800 cursor-pointer"
                                >
                                    X
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default Products;
