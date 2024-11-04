import { useRef } from "react";

function EditedData({ edtPost, editPage }) {
  const edtImgUrl = useRef();
  const edtCaption = useRef();
  const edtLike = useRef();

  const handleConfirmbtn = (event) => {
    event.preventDefault();

    if (
      !edtImgUrl.current.value ||
      !edtCaption.current.value ||
      !edtLike.current.value
    ) {
      alert("Please fill in all fields.");
      return;
    } else {
      const editedPost = {
        id: Date.now().toString(),
        image: edtImgUrl.current.value,
        caption: edtCaption.current.value,
        likes: parseInt(edtLike.current.value, 10),
      };

      edtPost(editedPost);
      editPage(false);
    }
  };

  return (
    <form className="addpost">
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">
          Edit Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          ref={edtImgUrl}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="captionInput" className="form-label">
          Edit the Caption
        </label>
        <input
          type="text"
          className="form-control"
          id="captionInput"
          ref={edtCaption}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="likesInput" className="form-label">
          Edit the Likes
        </label>
        <input
          type="number"
          className="form-control"
          id="likesInput"
          ref={edtLike}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleConfirmbtn}
      >
        Confirm
      </button>
    </form>
  );
}

export default EditedData;
