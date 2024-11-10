import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const { addPost } = useContext(PostList);
  const imgUrl = useRef();
  const caption = useRef();
  const like = useRef();

  const navigate = useNavigate();

  const handleUploadbtn = (event) => {
    event.preventDefault();

    if (
      !imgUrl.current.value ||
      !caption.current.value ||
      !like.current.value
    ) {
      alert("Please fill in all fields.");
      return;
    } else {
      const newPost = {
        id: Date.now().toString(),
        image: imgUrl.current.value,
        caption: caption.current.value,
        likes: parseInt(like.current.value, 10),
      };

      addPost(newPost);
      imgUrl.current.value = "";
      caption.current.value = "";
      like.current.value = "";
      navigate("/home");
    }
  };

  return (
    <form className="addpost">
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">
          Enter Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          ref={imgUrl}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="captionInput" className="form-label">
          Enter a Caption
        </label>
        <input
          type="text"
          className="form-control"
          id="captionInput"
          ref={caption}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="likesInput" className="form-label">
          Enter the Likes
        </label>
        <input
          type="number"
          className="form-control"
          id="likesInput"
          ref={like}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleUploadbtn}
      >
        Upload
      </button>
    </form>
  );
}

export default AddPost;
