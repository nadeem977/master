import React, { useState } from 'react'
import { Container, Button } from '@mui/material'
import { API_BASE_URL } from '../Config'
import axios from "axios"
import {Products} from "../type"


  


const AddProduct = () => {


    const [addProduct, setAddProduct] = useState<Products>({
        title: "",
        color: "",
        category: "",
        size: "",
        price: 0,
        desc: "",
        image: ""
    })
 
    // console.log(addProduct)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAddProduct(prevItem => ({
                    ...prevItem,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAddProduct(prevItem => ({
                    ...prevItem,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    const addNewProductFunc = async () => {
        try {
            const data = {
                title: addProduct.title,
                color: addProduct.color,
                categories: addProduct.category,
                size: addProduct.size,
                price: addProduct.price,
                desc: addProduct.desc,
                img: addProduct.image
            }
            const res = await axios.post(`${API_BASE_URL}/products`, data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <Container maxWidth="xl">
                <div className="main_div_Login">
                    <form className='auth_form'>
                        <div className='flex items-center justify-between gap-2'>
                            <div className='input_div'>
                                <small>Product name</small>
                                <input type="text" placeholder='add a product name' onChange={(e) => setAddProduct((prev) => ({ ...prev, title: e.target.value }))} />
                            </div>
                            <div className='input_div w-full droppable' onDrop={handleDrop} onDragOver={handleDragOver}>
                                <label htmlFor="pic" className='label_image'>
                                    <span>Product image</span>
                                    <input type="file" placeholder='image' className="display-none w-full" id="pic" onChange={handleFileChange} />
                                    {addProduct.image && (
                                        <img src={addProduct.image} alt="Selected" className="preview-image" />
                                    )}
                                </label>
                            </div>
                        </div>

                        <div className='flex items-center justify-between gap-2'>
                            <div className='input_div'>
                                <small>Categorys</small>
                                <input type="text" placeholder='Categorys' onChange={(e) => setAddProduct((prev) => ({ ...prev, category: e.target.value }))} />
                            </div>
                            <div className='input_div'>
                                <small>Size</small>
                                <input type="text" placeholder='sizes is optional' onChange={(e) => setAddProduct((prev) => ({ ...prev, size: e.target.value }))} />
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                            <div className='input_div'>
                                <small>Color</small>
                                <input type="text" placeholder='color is optional' onChange={(e) => setAddProduct((prev) => ({ ...prev, color: e.target.value }))} />
                            </div>
                            <div className='input_div'>
                                <small>Price</small>
                                <input type="number" placeholder='price' onChange={(e) => setAddProduct((prev) => ({ ...prev, price: e.target.value }))} />
                            </div>
                        </div>
                        <textarea className='textarea' placeholder='Describ your product' onChange={(e) => setAddProduct((prev) => ({ ...prev, desc: e.target.value }))}></textarea>
                        <Button variant="contained" className='btn_signIn' onClick={addNewProductFunc}>
                            Add product
                        </Button>
                    </form>
                </div>

            </Container>
        </>
    )
}

export default AddProduct
