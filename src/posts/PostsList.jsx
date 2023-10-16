import React, {useEffect, useRef, useState} from 'react';
import Container from "react-bootstrap/Container";
import Post from "./Post.jsx";
import {useGetPostsQuery} from "../store/posts/postsApi.js";
import PostPlaceholder from "./PostPlaceholder.jsx";


const PostsList = () => {
    const {data = [], isLoading, hasNextPage, fetchNextPage} = useGetPostsQuery()

    const containerRef = useRef(null)

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        if (containerRef.current && window.innerHeight + window.scrollY >= containerRef.current.clientHeight) {
            if (hasNextPage && !isLoading) {
                fetchNextPage()
            }
        }
    }

    return (
        <Container className='text-center'>
            <h3>Posts</h3>

            {isLoading &&
                <>
                    <PostPlaceholder />
                    <PostPlaceholder />
                    <PostPlaceholder />
                </>
            }
            <Container ref={containerRef}>
                {data.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                    />
                )}
            </Container>
        </Container>
    );
};

export default PostsList;
