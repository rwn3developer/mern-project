import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";

const Post = () => {
    const [posts, setPosts] = useState([])

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

    return (
        <>

            {
                posts.map((p) => {
                    return (
                        <div className="card my-3">
                            <div className="card-header">
                                header
                            </div>
                            <div className="p-3">
                                <img src={p.postimage} height="500" style={{ objectFit: 'contain' }} className="card-img-top" alt="Post" />
                            </div>
                            <div className="card-footer">

                                <div className="row">
                                    <h6>Username {p.title}</h6>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4">
                                        {/* <p className="card-text">nice post</p> */}

                                        <span style={{ fontSize: '30px', cursor: 'pointer' }}>
                                            <AiOutlineLike />
                                        </span>

                                    </div>


                                    <div className="col-lg-4">
                                        <span style={{ fontSize: '25px', cursor: 'pointer' }}>
                                            <FaRegCommentAlt />
                                        </span>
                                        <span style={{cursor:'pointer'}} className="mx-2">Add Comment</span>
                                    </div>



                                    <div className="col-lg-4">
                                        <span style={{fontSize:'18px',cursor:'pointer',display:'flex'}} className="mx-2">View Like & Comment</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }





        </>
    );
};

export default Post;