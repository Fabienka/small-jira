export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface User {
    id: number;
    name: string;
}

export interface Comment {
    id: number;
    postId: number;
    email: string;
    name: string;
    body: string;
}


export interface Item {
    id: number;
    post: Post;
    author: User;
    comments: Comment[]
}