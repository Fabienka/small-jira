export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface User {
    id: number | undefined
    name: string | undefined;
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
    postId: number;
    title: string;
    author: string | undefined;
    body: string;
    comments: Comment[];

}