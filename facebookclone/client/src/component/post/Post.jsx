const Post = () => {
    return (
        <>
            <div className="card my-3">
                <div className="card-header">
                    header
                </div>
                <div className="p-3">
                    <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' className="card-img-top" alt="Post" />
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* <p className="card-text">nice post</p> */}
                            <button className="btn btn-primary mr-2">
                                Like <span className="badge badge-light">1</span>
                            </button>
                        </div>
                        <div className="col-lg-4">
                            <form>
                                <div className="form-group d-flex">
                                    <input className="form-control" name="comment" rows="3" placeholder="Write a comment..." />
                                    <button type="button" style={{ marginLeft: "10px" }} type="submit" className="btn btn-primary">Comment</button>
                                </div>

                            </form>
                        </div>
                        <div className="col-lg-4">
                            <p>comments</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card my-3">
                <div className="card-header">
                    header
                </div>
                <div className="p-3">
                    <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' className="card-img-top" alt="Post" />
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* <p className="card-text">nice post</p> */}
                            <button className="btn btn-primary mr-2">
                                Like <span className="badge badge-light">1</span>
                            </button>
                        </div>
                        <div className="col-lg-4">
                            <form>
                                <div className="form-group d-flex">
                                    <input className="form-control" name="comment" rows="3" placeholder="Write a comment..." />
                                    <button type="button" style={{ marginLeft: "10px" }} type="submit" className="btn btn-primary">Comment</button>
                                </div>

                            </form>
                        </div>
                        <div className="col-lg-4">
                            <p>comments</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card my-3">
                <div className="card-header">
                    header
                </div>
                <div className="p-3">
                    <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' className="card-img-top" alt="Post" />
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* <p className="card-text">nice post</p> */}
                            <button className="btn btn-primary mr-2">
                                Like <span className="badge badge-light">1</span>
                            </button>
                        </div>
                        <div className="col-lg-4">
                            <form>
                                <div className="form-group d-flex">
                                    <input className="form-control" name="comment" rows="3" placeholder="Write a comment..." />
                                    <button type="button" style={{ marginLeft: "10px" }} type="submit" className="btn btn-primary">Comment</button>
                                </div>

                            </form>
                        </div>
                        <div className="col-lg-4">
                            <p>comments</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Post;