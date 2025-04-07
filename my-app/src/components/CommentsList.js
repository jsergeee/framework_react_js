import React, { useState } from "react";
import '../CommentsList.css'

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const handleDelete = (id) => {
    // Фильтруем комментарии, оставляя только те, у которых id не совпадает с удаляемым
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Список комментариев</h2>
      <ul className="comments">
        {comments.map((comment) => (
          <li className="link" key={comment.id}>
            {comment.text}
            <button className="btn" onClick={() => handleDelete(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
