import React, { useState, useEffect } from 'react'
import ModalLayout from './ModalLayout'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const MemberRequests = () => {

  const [requests, setRequests] = useState([])

  const fetchrequests = async () => {
    try {
      const { data } = await axios.get('https://facebook-group-replica.herokuapp.com/allRequests')
      setRequests(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchrequests()
  }, [])


  const closePopup = () => {
    document.getElementById('memberRequest').classList.remove('opacity-[1]')
    document.getElementById('memberRequest').classList.remove('pointer-events-initial')

    document.getElementById('memberRequest').classList.add('pointer-events-none')
    document.getElementById('memberRequest').classList.add('opacity-[0]')
  }
  return (
    <ModalLayout id='memberRequest'>
      <div className='bg-white relative w-[550px] pt-[45px] p-[32px]'>
        <div className='absolute right-[15px] top-[15px] cursor-pointer' onClick={closePopup}>
          <CloseIcon />
        </div>
        <h1 className='text-center uppercase text-[20px]'>Member Requests</h1>
        {
          requests.length == 0 && (
            <h1 className='text-center uppercase text-[20px]'>There is No Member Request</h1>
          )
        }
        <ul className='mt-5 flex flex-col gap-y-6'>
          {
            requests.map((item, index) => {
              return (
                <li key={index} className='text-base flex items-center'>
                  <span className=''>
                    {item.firstName + item.lastName}
                  </span>
                  <button className='text-white ml-auto mr-4 h-[40px] w-[90px] bg-green-300  transition-all duration-300 hover:bg-green-400 rounded-[24px]'>
                    Approve
                  </button>
                  <button className='text-white   h-[40px] w-[90px] bg-red-300 rounded-[24px] transition-all duration-300 hover:bg-red-400 '>
                    Reject
                  </button>
                </li>
              )
            })
          }

        </ul>
      </div>

    </ModalLayout>
  )
}

export default MemberRequests