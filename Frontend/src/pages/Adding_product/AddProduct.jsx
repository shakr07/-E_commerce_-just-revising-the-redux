import { useState, useEffect, useRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import axios from "axios";
import { Switch, FormControlLabel } from '@mui/material';
import { Toaster,toast } from "react-hot-toast";
const AddProduct = (props) => {
    const [productName, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [extraDetails, setExtraDetails] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('');
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [disCOunt,setDiscount]=useState(false);
    const [disCOuntprice,setDiscountprice]=useState(price);
    const editor = useRef(null);
    const Navigate = useNavigate();

    useEffect(() => {
        setOpen(props.hello); 
    }, [props.hello]); 

    const handleClose = () => setOpen(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Log the values to ensure they're set correctly
        if (
            productName === '' ||
            brand === '' ||
            content === '' ||
            price === '' ||
            category === '' ||
            image === '' ||
            color === ''
        ) {
            toast.error("Please fill all the fields or press the Cancel button");
        }
        return ;
        console.log({ productName, brand, content, price, category, image, color });
         
        try {
            await axios.post('http://localhost:8000/api/ecommerce/product_input', {
                productName, 
                brand,
                content,
                price: parseFloat(price),  // Ensure price is a number
                category, 
                image, 
                color,
                disCOunt,
                disCOuntprice:parseFloat(disCOuntprice)
            });
            toast.error("Product added successfully.");   
            console.log('Product added successfully');
    
            // Reset the form
            setName('');
            setBrand('');
            setExtraDetails('');
            setContent('');
            setPrice('');
            setCategory('');
            setImage('');
            setColor('');
            setDiscountprice('');
               
            // Close the modal after form submission
            handleClose();
            Navigate("/")
        } catch (error) {
            console.error('Error adding product:', error.response ? error.response.data : error.message);
            
            Navigate("/")
        }
    };  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        outline: 'none'
    };
   
    function check(){
        if(disCOunt==true)      
        {
            setDiscount(false);
        }
        else{
            setDiscount(true);
        }
    

              console.log(disCOunt);
    }
    return (
        <div>
            <Toaster
  position="top-left"
  reverseOrder={false}
/>
            <Modal
                open={open}
                onClose={(event, reason) => {
                    if (reason === "backdropClick" || reason === "escapeKeyDown") {
                        return;
                    }
                    handleClose();
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
             

                <Box sx={style}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Product Name"
                                    variant="outlined"
                                    value={productName}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Brand Name"
                                    variant="outlined"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    onChange={newContent => setContent(newContent)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Price"
                                    variant="outlined"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Category"
                                    variant="outlined"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Image URL"
                                    variant="outlined"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Color"
                                    variant="outlined"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            <FormControlLabel control={<Switch defaultunChecked />} label="Label" onChange={check} />
                            </Grid>
                            <Grid item xs={6}>
                                {console.log(disCOunt)}
                             {
                             
                             disCOunt ? (
                            <TextField
                           fullWidth
                             label="Sale Price"
                              variant="outlined"
                              type="number"
                               value={disCOuntprice}
                               onChange={(e) => setDiscountprice(e.target.value)}
                                     />
                                ) : null
                                }
                                </Grid>
                            
                            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button variant="contained" color="primary" type="submit">
                                    Add Product
                                </Button>
                                <Button variant="contained" color="primary" style={{ marginLeft: '50px' }} onClick={() => {
                                    

                                    Navigate("/")
                                    }}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default AddProduct;
