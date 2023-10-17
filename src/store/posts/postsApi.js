import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (page= '') => `posts?${page && `_page=${page}`}`
        })
    })
})

export const {useGetPostsQuery} = postsApi