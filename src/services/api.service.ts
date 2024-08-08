import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

const getAllUsers = async (): Promise<IUser[]> => {
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(users=> users.json())

    return responseUsers;
}

const getAllPosts = async (): Promise<IPost[]> => {
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(posts => posts.json())

    return responsePosts;
}

const getAllComments = async (): Promise<IComment[]> => {
    const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(comments => comments.json())

    return responseComments;
}
export {
    getAllUsers,
    getAllPosts,
    getAllComments,
}