import React, { useEffect, useState } from "react";
import { orderBy } from "lodash";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList,
  removeComment
} from "../../../store/commentSlice";
import AddCommentForm from "./addCommentForm";
import CommentsList from "./CommentsList";
import { paginate } from "../../../utils/paginate";
import Pagination from "../Pagintaion";

const Comments = () => {
  const { _id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCommentsList(_id));
  }, [_id]);
  const isLoading = useSelector(getCommentsLoadingStatus());

  const comments = useSelector(getComments());
  const handleSubmit = (data) => {
    dispatch(createComment({ ...data, deviceId: _id }));
  };
  const handleRemoveComment = (id) => {
    dispatch(removeComment(id));
  };
  const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
  const count = sortedComments.length;
  const commentsCrop = paginate(sortedComments, currentPage, pageSize);
  return (
    <div className="dark:md:min-h-screen">
      <div>
        <AddCommentForm onSubmit={handleSubmit} />
      </div>
      {sortedComments.length > 0 && (
        <div>
          <div>
            <h2 className="mb-3">Коментарии</h2>
            {!isLoading ? (
              <CommentsList
                comments={commentsCrop}
                onRemove={handleRemoveComment}
              />
            ) : (
              "loading"
            )}
          </div>
        </div>
      )}
      <div className="mt-24 mb-10 flex justify-center">
        <Pagination
          pageSize={pageSize}
          onPageChange={handlePageChange}
          itemsCount={count}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Comments;
