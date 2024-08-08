import React from 'react';
import {IComment} from "@/models/IComment";
import {getAllComments} from "@/services/api.service";

const CommentsPage = async () => {

    const allComments: IComment[] = await getAllComments();

    return (
        <div>
            {
                allComments.map((comment, index) => (
                    <div key={index}>
                        <p><b>Name:</b> {comment.name}</p>
                        <p><b>E-mail:</b> {comment.email}</p>
                        <p><b>Body:</b> {comment.body}</p>
                        <hr/>
                    </div>
                ))
            }
        </div>
    );
};

export default CommentsPage;