import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import EditedData from "./EditedData";

function Posts() {
  const { editPost, postList, deletePost } = useContext(PostList);
  const [editPage, seteditPage] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const editedPage = () => {
    seteditPage(false);
  };

  const handleDelete = (post) => {
    if (post.id) {
      deletePost(post.id);
    }
  };
  const handleEdtPost = (editedPost) => {
    if (currentPost) {
      editPost({ id: currentPost, editedPost });
      setCurrentPost(null);
      seteditPage(false);
    }
  };
  const handleEdit = (post) => {
    seteditPage(true);
    setCurrentPost(post.id);
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
      {editPage ? (
        <EditedData edtPost={handleEdtPost} editPage={editedPage} />
      ) : (
        <>
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
                    onClick={() => handleEdit(post)}
                  >
                    <FaEdit />
                  </span>

                  <span
                    style={{ cursor: "pointer", fontSize: "1.6rem" }}
                    onClick={() => handleDelete(post)}
                  >
                    <MdDelete />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Posts;
