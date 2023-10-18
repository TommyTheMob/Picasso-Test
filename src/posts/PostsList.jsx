import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Post from "./Post.jsx";
import {useGetPostsQuery} from "../store/posts/postsApi.js";
import PostPlaceholder from "./PostPlaceholder.jsx";


const PostsList = () => {
    const [limit, setLimit] = useState(10)
    const {data = [], isFetching} = useGetPostsQuery(limit)
    const [fetchingDown, setFetchingDown] = useState(false)


    useEffect(() => {
        if (fetchingDown) {
            setLimit(prev => {
                return prev < 100 ? prev + 10 : prev
            })

            setFetchingDown(false)
        }
    }, [fetchingDown]);

    useEffect(() => {
        console.log('useEff listener')
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetchingDown(true)
        }
    }

    return (
        <Container className='text-center'>
            <h3>Posts</h3>

            <Container className='pb-5'>
                {data.map(post => <Post key={post.id} post={post}/>)}

                {isFetching &&
                    <>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                        <PostPlaceholder/>
                    </>
                }
            </Container>
        </Container>
    );
};

export default PostsList;
