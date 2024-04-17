import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Container from '@mui/material/Container'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const Message = () => {

  
  return (
    <>
      <Container maxWidth="xl">
        <div className='w-full max-w-[1500px] mx-auto h-[95vh] flex items-center  justify-center pt-3'>
          <div className='h-full shado w-full rounded overflow-hidden'>
            <div className="top   w-full h-fit py-1 px-3 flex justify-between items-center inputshado">
              <div className='flex items-center gap-3'><Stack><Avatar sx={{ bgcolor: deepPurple[600] }}></Avatar></Stack>
                <div>
                  <h5 className='m-0 mt-4 capitalize text-[18px] font-bold het '>jhon</h5>
                  <small className='text-[#9c27b0]'>online</small>
                </div>
              </div>
              <MoreVertIcon className='text-[#9c27b0] cursor-pointer' />
            </div>

            <div className="messages px-2">
              <div className='w-full h-full'>
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="left w-10/12  max-w-[900px] h-fit p-1 my-4 mx-2 ">
                    <div className='p-2 rounded inputshado '>
                      <p className='m-0 pb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ea rerum vel harum magnam culpa perferendis. Optio, fugit dignissimos? Beatae, nesciunt ratione officia ex illo ab ea quasi officiis possimus obcaecati quo quas saepe iusto aut fugit, vero perspiciatis quod!</p>
                      <small className='float-right mt-[-10px] pb-2'>3:06</small>
                    </div>
                  </div>
                ))}
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="right w-10/12 h-fit max-w-[900px]  my-4 mx-2 float-right">
                    <div className='p-2 rounded inputshado'>
                      <p className='m-0 pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam magnam impedit doloremque totam a excepturi aperiam provident praesentium ducimus.</p>
                      <small className='float-right mt-[-10px] pb-2'>3:06</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bottom inputshado  flex items-center justify-center gap-2 p-2">
              <EmojiEmotionsIcon className='text-[#9c27b0] cursor-pointer' />
              <ImageIcon className='text-[#9c27b0] cursor-pointer' />
              <input type="text" className='w-10/12 p-2 outline-0 rounded inputshado' placeholder='Type a message' />
              <SendIcon className='text-[#9c27b0] cursor-pointer' />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Message
