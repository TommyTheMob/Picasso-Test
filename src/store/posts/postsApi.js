import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (limit= '') => `posts?${limit && `_limit=${limit}`}`
        }),
        getPostById: build.query({
            query: (postId) => `posts/${postId}`,
        }),
    })
})

export const {useGetPostsQuery, useGetPostByIdQuery} = postsApi