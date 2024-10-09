import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'; // Import Box from Material UI

const AddProduct = () => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [extraDetails, setExtraDetails] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('');
    const [open, setOpen] = useState(false); // State to control modal visibility

    // Function to open the modal
    const handleOpen = () => setOpen(true);
    // Function to close the modal
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Details:');
        console.log('Name:', name);
        console.log('Brand:', brand);
        console.log('Extra Details:', extraDetails);
        console.log('Price:', price);
        console.log('Category:', category);
        console.log('Image URL:', image);
        console.log('Color:', color);

        // Reset the form
        setName('');
        setBrand('');
        setExtraDetails('');
        setPrice('');
        setCategory('');
        setImage('');
        setColor('');

        // Close the modal after form submission
        handleClose();
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px'
    };

    return (
        <div>
            <button onClick={handleOpen}>Add Product</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="productName">Product Name</label>
                            <input
                                id="productName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="brandName">Brand Name</label>
                            <input
                                id="brandName"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="extraDetails">Extra Details</label>
                            <input
                                id="extraDetails"
                                value={extraDetails}
                                onChange={(e) => setExtraDetails(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="image">Image URL</label>
                            <input
                                id="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="color">Color</label>
                            <input
                                id="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <button type="submit">Add Product</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default AddProduct;
