import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth()
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
            const formData = new FormData();
            formData.append('title', title);
            formData.append('image', image);
        let all = await fetch(`http://localhost:8000/posts/addPost`,{
            method : 'POST',
            headers:{
              Authorization : `Bearer ${auth?.token}`
            },
            body : formData
        });
        let res = await all.json()
        if(res.success){
          toast.success(res.message)
          setTimeout(()=>{
            navigate('/home')
          },3000)
        }
    }catch(err){
      console.log(err);
      return false;
    }
  };

  return (
    <div className="card my-3">
      <div className="card-header">
        Create a Post
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type='text' className="form-control" onChange={ (e) => setTitle(e.target.value) } value={title} name="content" rows="3" placeholder="What's on your mind?"/>
          </div>
          <div className="form-group mt-3 mb-3">
            <input type="file" onChange={ (e) => setImage(e.target.files[0]) } name='image' className='form-control'/>
          </div>
          <button type="submit" className="btn btn-primary">Post</button> 
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddPost;
