import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Posts() {
  const { editPost, postList, deletePost } = useContext(PostList);

  const handleDelete = (id) => {
    deletePost(id);
  };

  const handleEdit = (id) => {
    const newImg = prompt("Enter new image URL:", "");
    const newCaption = prompt("Enter new caption:", "");
    const newLikesInput = prompt("Enter new number of likes:", "");
    const newLikes = parseInt(newLikesInput, 10);

    if (newCaption && !isNaN(newLikes) && newLikes >= 0 && newImg) {
      const editedPost = {
        id,
        image: newImg,
        caption: newCaption,
        likes: newLikes,
      };
      editPost({ id, editedPost });
    } else {
      alert("Invalid input. Please enter valid values.");
    }
  };

  return (
    <>
      {postList.length === 0 && (
        <div
          style={{ fontSize: "4rem", fontFamily: "sans-serif", margin: "auto" }}
        >
          No Added Posts !!!
        </div>
      )}
      {postList.map((post) => (
        <div
          key={post.id}
          className="card"
          style={{
            width: "18rem",
            margin: "15px",
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={post.image}
            style={{ height: "17rem" }}
            className="card-img-top"
            alt="Post"
          />
          <div
            className="card-body"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <p>{post.caption}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #ccc",
                paddingTop: "10px",
              }}
            >
              <span>
                <CiHeart /> {post.likes} Likes
              </span>

              <span
                style={{ cursor: "pointer", fontSize: "1.6rem" }}
                onClick={() => handleEdit(post.id)}
              >
                <FaEdit />
              </span>

              <span
                style={{ cursor: "pointer", fontSize: "1.6rem" }}
                onClick={() => handleDelete(post.id)}
              >
                <MdDelete />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
