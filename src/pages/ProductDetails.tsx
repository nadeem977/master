import { useState, ChangeEvent } from 'react';
import Container from '@mui/material/Container';
import productimg from "../assets/productimg.png";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { relatedPrduct } from '../assets/data';



const ProductDetails = () => {

  const [quantity, setQuantity] = useState <number> (1);
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <Container maxWidth="xl">
      <div className='min-h-[90vh] w-full flex  p-5 justify-between mt-5'>
        <div className='w-6/12'>
          <div className='w-full h-full flex items-center justify-center bg-slate-300 max-h-[400px] rounded p-3'>
            <img src={productimg} alt="image" className='w-auto h-[inherit]' />
          </div>
        </div>
        <div className='w-6/12'>
          <div className='w-full h-full p-5 '>
            <div>
              <h1 className='mb-3 font-bold text-[35px] capitalize leading-20'>Lorem ipsum dolor, sit amet consectetur</h1>
              <p className='mb-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque assumenda obcaecati qui harum deserunt culpa recusandae aut ipsam ratione voluptatum optio fugit, natus temporibus, repellendus non voluptatibus excepturi! Aliquam corrupti enim illo tempora odio deserunt reprehenderit quidem unde eum non?</p>
              <div className='flex items-center justify-between w-fit gap-4'>
                <span>
                  <p className='capitalize'>category <span className='text-gray-500'>Sport</span></p>
                  <p className='capitalize'>color <span className='text-gray-500'>black</span></p>
                </span>
                <span>
                  <p className='capitalize'>price <span className='text-gray-500'>$130</span></p>
                  <div className='flex items-center capitalize gap-2'>
                    Reviews
                    <Stack spacing={1} >
                      <div className='flex items-center justify-between'>
                        <Rating name="size-small" defaultValue={3} size="small" />
                        <span className='text-gray-400'>3.2k</span>
                      </div>
                    </Stack>
                  </div>
                </span>
              </div>
              <div className='capitalize'>
                avalible stock <span className='text-gray-500'>120</span>
              </div>
              <div className='flex items-center gap-2 mt-4'> 
                <Button variant="contained" color="secondary" onClick={() => setQuantity(quantity + 1)}>+</Button>
                <input type="number" value={quantity <= 1 ? 1 : quantity} onChange={handleQuantityChange}
                  className='px-4 py-1 bg-transparent rounded w-[80px] border-2 border-[#b442d7]' />
                <Button variant="contained" color="secondary" disabled={quantity < 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>−</Button>
                <Button variant="contained" color="secondary" className='btnCard'>
                  add to card
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 w-full p-4 ">
        <h1 className='text-[40px] font-bold capitalize'>Related products</h1>
        <div className='flex items-center  flex-col gap-3'>
          {
            relatedPrduct.map((item, i) => (
              <div key={i} className="w-full p-3 bg-[#b2dbe783] flex gap-2  h-fit rounded">
                <div className='w-[300px] h-[150px]   flex items-center justify-center rounded bg-slate-300 overflow-hidden '>
                  <img src={item.image} alt="image" className='rounded hover:scale-125 transition duration-300 cursor-pointer' />
                </div>
                <div className='flex justify-between w-full'>
                  <div >
                    <h1 className='font-bold text-xl mb-2'>{item.title}</h1>
                    <p className='text-gray-500 max-w-[400px]'>{item.desc}</p>
                  </div>
                  <div className='flex flex-col justify-between w-fit gap-4'>
                    <span className='flex flex-col gap-3'>
                      <p className='capitalize flex justify-between'>category <span className='text-gray-500'>{item.category}</span></p>
                      <p className='capitalize flex justify-between'>color <span className='text-gray-500'>{item.color}</span></p>
                    </span>
                    <span className='flex flex-col gap-3'>
                      <p className='capitalize flex justify-between'>price <span className='text-gray-500'>${item.price}</span></p>
                      <div className='flex items-center justify-between capitalize gap-2'>
                        Reviews
                        <Stack spacing={1} >
                          <div className='flex items-center justify-between'>
                            <Rating name="size-small" defaultValue={3} size="small" />
                            <span className='text-gray-400 text-[14px]'>3.2k</span>
                          </div>
                        </Stack>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
