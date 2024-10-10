import { useState, useEffect, useRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
const AddProduct = (props) => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [extraDetails, setExtraDetails] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('');
    const [open, setOpen] = useState(false);
    const [close,setClose]=useState(false);
    const editor = useRef(null);
    const [content, setContent] = useState('');
    useEffect(() => {
        setOpen(props.hello); 
    }, [props.hello]); 

    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Details:', { name, brand, extraDetails, price, category, image, color });

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
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        outline: 'none'
    };
    const Navigate=useNavigate();

    return (
        <div>
            <Modal
                open={open}
                onClose={(event,reason)=>{
                    // if(close==true){
                    //    console.log("close is working")
                    //     handleClose();
                    //     setClose(false);
                    //     Navigate("/")
                         
                    // }
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
                                    value={name}
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
                            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button variant="contained" color="primary" type="submit">
                                    Add Product
                                </Button>
                                <Button variant="contained" color="primary" type="submit" style={{ marginLeft: '50px' }} onClick={()=>Navigate("/")}>
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