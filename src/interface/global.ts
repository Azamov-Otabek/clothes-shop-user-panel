export interface children{
    children: JSX.Element
}

export interface element{
    element: JSX.Element
}

export interface PostLike{
    id: string
}

export interface GetLike{
    page: number,
    limit: number
}

export interface LikesStore{
    Postlike: (payload: PostLike) => Promise<any>
    Getlike: (payload: GetLike) => Promise<any>
}