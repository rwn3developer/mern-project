import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../context/AuthContext";

const Post = () => {
    const [auth, setAuth] = useAuth()
    const [posts, setPosts] = useState([])
    const [addcomment,setAddComment] = useState("")

    const getPost = async () => {
        try {
            let all = await fetch(`http://localhost:8000/posts/viewPost`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            let res = await all.json()
            console.log(res);
            setPosts(res.posts)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    //post like
    const addLike = async (postId) => {
        try {
            let all = await fetch(`http://localhost:8000/posts/likePost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth?.token}`
                },
                body: JSON.stringify({
                    postId: postId
                })
            })
            let res = await all.json()
            if (res.success) {
                toast.success(res.message)
                getPost()
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    //post dislike
    const addDislike = async (postId) => {
        try {
            let all = await fetch(`http://localhost:8000/posts/dislikePost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth?.token}`
                },
                body: JSON.stringify({
                    postId: postId
                })
            })
            let res = await all.json()
            if (res.success) {
                toast.success(res.message)
                getPost()
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    //add comment
    const AddComment = async(postid) => {
        try{
            let all = await fetch(`http://localhost:8000/posts/addComment`,{
                method : "PUT",
                headers : {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth?.token}`
                },
                body : {
                    postId : postid,
                    comment : addcomment
                }
            });
            let res = await all.json()
            if(res.success){
                toast.success(res.message)
                getPost()
            }
        }catch(err){
            console.log(err);
            return false
        }
    }


    return (
        <>
            {
                posts.map((p) => {
                    //Date formaTE dd/mm/yy
                    const date = new Date(p.dateField);
                    const day = String(date.getUTCDate()).padStart(2, '0');
                    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
                    const year = String(date.getUTCFullYear()).slice(2);


                    return (
                        <div className="card my-3">
                            <div className="card-header d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={p?.userId?.profileimage} alt="" width="35" />
                                    <h6 className="mx-3">{p?.userId?.name}</h6>
                                </div>

                                <div>
                                    {
                                        p?.userId?._id == auth?.user?._id && (
                                            <>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                                <button className="mx-3 btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#postEditModal">Edit</button>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="p-3">
                                <img src={p.postimage} height="500" style={{ objectFit: 'contain' }} className="card-img-top" alt="Post" />
                            </div>
                            <div className="card-footer">

                                <div className="row">
                                    <h6>{p?.userId?.name} {p.title}</h6>
                                    <span>Date :- {day}/{month}/{year}</span>
                                    <span>Likes :- {p.likes.length}</span>
                                </div>

                                <div className="p-2 d-flex justify-content-between">
                                    {
                                        p.likes.includes(auth?.user?._id) ? (
                                            <button onClick={() => addDislike(p._id)} className="btn btn-danger">Dislike</button>
                                        ) : (
                                            <button onClick={() => addLike(p._id)} className="btn btn-primary">Like</button>
                                        )
                                    }

                                    <button  className="btn btn-success" data-bs-toggle="modal" data-bs-target="#commentModel">Add Comment</button>

                                    {/* comment model */}
                                    <div className="modal fade" id="commentModel" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Comment</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleInputEmail1" className="form-label">Add Comment</label>
                                                            <input type="text" onChange={ (e) => setAddComment(e.target.value) } value={addcomment} placeholder="Write Your Comment" className="form-control" />

                                                        </div>

                                                        <button type="button" onClick={ () => AddComment(p._id) } className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewLikecommentModel">View Like & Comment</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }




            {/* view and like model */}
            <div className="modal fade" id="viewLikecommentModel" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">View Like and Comment</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Add Comment</label>
                                    <input type="text" placeholder="Write Your Comment" className="form-control" />

                                </div>

                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

            {/* user wise update post model*/}
            <div className="modal fade" id="postEditModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="email" className="form-control" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">File Upload</label>
                                    <input type="file" className="form-control" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


            <ToastContainer />
        </>
    );
};

export default Post;