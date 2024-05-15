import React from 'react'
import Leftsidebar from '../../component/leftsidebar/Leftsidebar'
import Topbar from '../../component/topbar/Topbar'
import Post from '../../component/post/Post'
import AddPost from '../../component/post/AddPost'

const Home = () => {
  return (
    <div className='container-fluid'>
        <Topbar/>
        <div className="row">
            <div className="col-md-3 my-3">
                <Leftsidebar/>
            </div>

            <div className='col-md-6'>
                <AddPost/>
                <Post/>
            </div>

            <div className="col-md-3 my-3">
                <Leftsidebar/>
            </div>
            

        </div>
    </div>
  )
}

export default Home
