import { createContext, useReducer } from "react";

export const PostList = createContext({});

const postListReducer = (currentPostList, action) => {
  if (action.type === "ADD_POST") {
    return [action.payload, ...currentPostList];
  } else if (action.type === "DELETE_POST") {
    return currentPostList.filter((post) => post.id !== action.payload);
  } else if (action.type === "EDIT_POST") {
    return currentPostList.map((post) =>
      post.id === action.payload.id ? action.payload.editedPost : post
    );
  }
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (newPost) => {
    dispatchPostList({ type: "ADD_POST", payload: newPost });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  };

  const editPost = ({ id, editedPost }) => {
    dispatchPostList({
      type: "EDIT_POST",
      payload: { id, editedPost },
    });
  };

  return (
    <PostList.Provider value={{ editPost, postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
