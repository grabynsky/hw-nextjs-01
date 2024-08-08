import React from 'react';
import {IPost} from "@/models/IPost";
import {getAllPosts} from "@/services/api.service";

const PostsPage = async () => {

    const allPosts: IPost[]  = await getAllPosts();

    return (
        <div>
                {
                    allPosts.map((post, index) => <div key={index}>{post.body}<hr/></div>)
                }
        </div>
    );
};

export default PostsPage;