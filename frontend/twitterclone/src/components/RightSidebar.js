import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';


const RightSidebar = ({otherUsers}) => {
    return(
        <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <CiSearch size="20px" />
        <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        {
            Array.isArray(otherUsers) && otherUsers.map(user => (
                <div key={user?._id} className='flex items-center justify-between my-3'>
                    <div className='flex'>
                        <div>
                            <Avatar src="https://static.vecteezy.com/system/resources/previews/011/483/813/non_2x/guy-anime-avatar-free-vector.jpg" />
                        </div>
                        <div className='ml-2'>
                            <p className='font-bold'>{user?.name}</p>
                            <p className='text-sm'>@{user?.username}</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/profile/${user?._id}`}>
                            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                        </Link>
                    </div>
                </div>
            ))
        }

      </div>
    </div>
    )
}

export default RightSidebar