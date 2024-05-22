import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../context/AuthContext";

const Post = () => {
    const [auth, setAuth] = useAuth()
    const [posts, setPosts] = useState([])
    const [title,setTitle] = useState("");
    const [postimage,setPostImage] = useState("")
    const [posteditid,setPostEditId] = useState("")
    const [viewpostimage,setViewPostImage] = useState("")
    const [addcomment, setAddComment] = useState("")
    const [postid, setPostId] = useState("")
    const [postwiselike, setPostwiseLike] = useState([])
    const [postwisecomment, setPostwisecomment] = useState([])

    const getPost = async () => {
        try {
            let all = await fetch(`http://localhost:8000/posts/viewPost`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            let res = await all.json()
            setPosts(res.posts)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    //post delete
    const podtDelete = async (id) => {
        try {
            let all = await fetch(`http://localhost:8000/posts/deletePost?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth?.token}`
                },
            });
            let res = await all.json()
            if (res.success) {
                toast.error(res.message)
                getPost();
            }

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    //post edit record fetch
    const postEdit = async(postid) => {
        try {
            let all = await fetch(`http://localhost:8000/posts/editPost?postid=${postid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${auth?.token}`
                },
            });
            let res = await all.json()
           
            setPostEditId(res.posts._id)
            setTitle(res.posts.title)
            setViewPostImage(res.posts.postimage)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    //post update
    const handlePostUpdate = async(e) => {  
        e.preventDefault()
        try {
            // console.log(postimage);
            // console.log(title);
            const formData = new FormData();
            formData.append('title', title);
            formData.append('image', postimage);
            let all = await fetch(`http://localhost:8000/posts/updatePost?postid=${posteditid}`, {
                method: 'PUT',
                headers: {
                    Authorization : `Bearer ${auth?.token}`
                },
                body : formData
            });
            let res = await all.json()
            if(res.success){
                toast.success("Post successfully update");
                setTitle("")
                getPost()
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

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
    const handleAddComment = async () => {
        try {
            let all = await fetch(`http://localhost:8000/posts/addComment`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth?.token}`
                },
                body: JSON.stringify({
                    postId: postid,
                    comment: addcomment
                })
            });
            let res = await all.json()
            if (res.success) {
                toast.success(res.message)
                setAddComment("")
                setPostId("")
                getPost()
            }
        } catch (err) {
            console.log(err);
            return false
        }
    }

    const postwiseViewLikeComment = async (postid) => {
        try {
            try {
                let all = await fetch(`http://localhost:8000/posts/postwiseLikeCommentView?postid=${postid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${auth?.token}`
                    },
                });
                let res = await all.json()
                if (res.success) {
                    setPostwiseLike(res.record.likes)
                    setPostwisecomment(res.record.comments)
                }

            } catch (err) {
                console.log(err);
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
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
                                                <button onClick={() => podtDelete(p._id)} className="btn btn-danger btn-sm">Delete</button>
                                                <button onClick={ () => postEdit(p._id) } className="mx-3 btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#postEditModal">Edit</button>
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
                                    <span>Comment :- {p.comments.length}</span>
                                </div>

                                <div className="p-2 d-flex justify-content-between mt-2 mb-2">
                                    {
                                        p.likes.includes(auth?.user?._id) ? (
                                            <button onClick={() => addDislike(p._id)} className="btn btn-danger btn-sm">Dislike</button>
                                        ) : (
                                            <button onClick={() => addLike(p._id)} className="btn btn-primary btn-sm">Like</button>
                                        )
                                    }

                                    <button onClick={() => setPostId(p._id)} className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#commentModel">Add Comment</button>

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
                                                            <input type="text" onChange={(e) => setAddComment(e.target.value)} value={addcomment} placeholder="Write Your Comment" className="form-control" />

                                                        </div>

                                                        <button type="button" onClick={() => handleAddComment(postid)} className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => postwiseViewLikeComment(p._id)} className="btn btn-warning btn-sm shadow" style={{ color: "white" }} data-bs-toggle="modal" data-bs-target="#viewLikecommentModel">View Like & Comment</button>



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
                            <div className="d-flex  justify-content-between p-2">

                                <div className="w-50">
                                    <p>Like User</p>
                                    {
                                        
                                        postwiselike.map((like) => {
                                            return (
                                                <div className="p-3  mb-3">
                                                    <img src={like.profileimage} height="35" style={{ objectFit: "contain" }} />
                                                    <span className="mx-2">{like.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div>
                                    {
                                        postwisecomment.map((comment) => {
                                            return (
                                                <div>
                                                    <img src={comment.userId.profileimage} width="35" />
                                                    <span className="mx-2">{comment.userId.name}</span>
                                                   <p>{comment.comment}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            </div>
                            <hr></hr>
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
                            <form onSubmit={handlePostUpdate}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" onChange={ (e) => setTitle(e.target.value) } value={title} className="form-control" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">File Upload</label>
                                    <input type="file" onChange={ (e) => setPostImage(e.target.files[0]) } className="form-control" />
                                    <div className="mt-3">
                                        <img src={viewpostimage} width="100" alt="" />
                                    </div>
                                </div>
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Submit</button>
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