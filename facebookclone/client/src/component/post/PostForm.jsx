import React, { useState } from 'react';

const PostForm = () => {

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
            body : formData
        });
        let res = await all.json()
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
            <textarea className="form-control" onChange={ (e) => setTitle(e.target.value) } value={title} name="content" rows="3" placeholder="What's on your mind?"></textarea>
          </div>
          <div className="form-group mt-3 mb-3">
            <input type="file" onChange={ (e) => setImage(e.target.files[0]) } name='image' className='form-control'/>
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
