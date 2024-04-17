 import Button from '@mui/material/Button'
import img from "../assets/img1.png"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


const Cards = () => {



    return (
        <>
            <div className='card_com'>
           {[1,2,3,4,5,5,6,7,8,9,10].map((_,i)=>(
             <div key={i} className=" border h-fit border-sky-100 rounded bg-[#b2dbe783] p-3">
            <Link to="/ProductDetails"> <img src={img} alt="product" className='w-full rounded mb-3' /></Link>
             <div>
                 <div className='mb-2 flex  justify-between'>
                     <span>
                         <p>price : $12</p>
                         <p>color : black</p>
                     </span>
                     <span>
                         <p>category : clectronics</p>
                         <Stack spacing={1} >
                            <div className='flex items-center justify-between'> <Rating name="size-small" defaultValue={3} size="small" /><span className='text-gray-400'>3.2k</span></div>
                         </Stack>
                     </span>
                 </div>
                 <Button variant="contained" color="secondary" className='btnCard'>
                     add to card
                 </Button>
             </div>
         </div>
           ))}
            </div>
        </>
    )
}

export default Cards
