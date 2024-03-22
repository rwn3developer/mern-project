import React from 'react';

const PostForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Post submitted');
  };

  return (
    <div className="card my-3">
      <div className="card-header">
        Create a Post
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <textarea className="form-control" name="content" rows="3" placeholder="What's on your mind?"></textarea>
          </div>
          <div className="form-group mt-3 mb-3">
            <input type="file" className='form-control'/>
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
