 import { relatedPrduct } from '../assets/data'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import SmsIcon from '@mui/icons-material/Sms';
import { Link } from 'react-router-dom';
const SelectedProduct =()=>{

// const [pricecunt ,setPriceCunt] = useState<number>(0)
  
  return (
    <>
    <Container maxWidth="xl">     
     <div className='min-h-[90vh] w-full pt-5 flex justify-between gap-5'>
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
                    <p className='text-gray-500 text-[15px] max-w-[400px]'>{item.desc}</p>
                    <select className='max-w-[60px] w-full outline-none border-2 border-[#9c27b0]  rounded'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10+">10+</option>
                    </select>

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
        <div className="bg-[#b2dbe783] p-5 rounded h-fit min-w-[380px]  w-fit flex flex-col gap-3">
          <h1>Subtotal ({relatedPrduct.length} item): $49.00</h1>
          <Button variant="contained" color="secondary" className='btnCard'>
            proceed to checkout
          </Button>
        <div className='flex items-center gap-2'> 
          <p className=''>You can contect to seller easily...</p>
          <Link to="/Message"><SmsIcon className='text-[#9c27b0]'/> </Link>
          </div>
        </div>
    </div> 
    </Container>
    </>
  )
}

export default SelectedProduct
