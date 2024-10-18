import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Products/Product";
import Heading from "../Products/Heading";
const Sale = () => {
  const [outPut, setOutput] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const result = await axios.get('http://localhost:8000/api/sales/sales_product');
        setOutput(result.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, []);

  // Filter and map to get the first 3 products
  const Products = outPut.filter((value, key) => key < 3);

  console.log(Products);

  return (
   <div>
     <Heading heading="Sales" />
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
      
        {Products[0] && (
          <Product
            className="h-full w-full"
            productName={Products[0]?.productName} // Access from Products array
            price={Products[0]?.price}
            img={Products[0]?.image}
            color={Products[0]?.color}
            style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'fit' }}  
          />
        )}
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        {Products[1] && (
          <div className="h-1/2 w-full">
            <Product
              className="h-full w-full"
              productName={Products[1]?.productName}
              price={Products[1]?.price}
              img={Products[1]?.image}
              color={Products[1]?.color}
              style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'fit' }}   
            />
          </div>
        )}
        {Products[2] && (
          <div className="h-1/2 w-full">
            <Product
              className="h-full w-full"
              productName={Products[2]?.productName}
              price={Products[2]?.price}
              img={Products[2]?.image}
              color={Products[2]?.color}
              style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'fit' }} 
            />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Sale;
