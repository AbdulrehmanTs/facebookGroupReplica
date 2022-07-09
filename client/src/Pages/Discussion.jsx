import React, { useState } from 'react'
import Layout from '../Components/Layout'
import PersonIcon from '@mui/icons-material/Person';

const Discussion = () => {
    const [disccusionText,setDiscussionText] = useState('')
    let height= window.innerHeight - 470

  return (
    <Layout>
        <div style={{minHeight:height +"px"}} className={`bg-[#fafafa] pt-[32px]  pb-[40px] `}>
            <div className='bg-white mx-auto max-w-[800px] p-[32px] '>
                    <h4 className='text-[24px]'>Discussions</h4>
                    <div className='mt-[40px]'>
                        <textarea className='w-full border' name="disccusionText" id="discussionText" value={disccusionText} onChange={(e)=>setDiscussionText(e.target.value)} cols="30" rows="06"></textarea>
                        <button className='bg-blue-300 transition-all duration-300 hover:bg-blue-400  text-white w-[120px] h-[40px] rounded-[24px]' >Post  </button>
                    </div>
                    <ul className='flex flex-col mt-10 gap-y-8'>
                       <li className='flex flex-col gap-y-4'>
                          <div className=' flex gap-x-5 items-center'>
                          <PersonIcon/>
                          <div  className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Mudassir Ahmed 
                                </span>
                                <span className='text-[14px] text-[#aaa]'>
                                    Posted a discussion at 20 March, 2020
                                </span>
                            </div>
                          </div>
                          <div>
                            <p className='text-[14px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla repellat architecto, necessitatibus deleniti fuga voluptates! Omnis ipsum natus, earum quam eaque quibusdam aperiam totam? Fuga non laudantium voluptatibus sit velit quibusdam, et asperiores ullam eos facilis minus, voluptas aspernatur obcaecati consequuntur? Odit dicta deserunt veritatis natus aliquam, esse facilis?

                            </p>
                          </div>
                       </li>
                        
                    </ul>
            </div>
        </div>
    </Layout>
  )
}

export default Discussion