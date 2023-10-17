import React, {useEffect, useRef, useState} from 'react';
import Container from "react-bootstrap/Container";
import Post from "./Post.jsx";
import {useGetPostsQuery} from "../store/posts/postsApi.js";
import PostPlaceholder from "./PostPlaceholder.jsx";
import {forEach} from "react-bootstrap/ElementChildren";


const PostsList = () => {
    const [page, setPage] = useState(1)
    const {data = [], isLoading} = useGetPostsQuery(page)
    // const [posts, setPosts] = useState([])
    const [fetchingDown, setFetchingDown] = useState(false)

    console.group('in comp==>')
    console.log('data', data)
    // console.log('posts', posts)
    console.groupEnd()

    useEffect(() => {
        console.log('useEff fetchingDown')
        if (fetchingDown) {
            setPage(prev => {
                return prev < 10 ? prev + 1 : prev
            })
            // setPosts([...posts, ...data])

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


            {isLoading &&
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


            <Container className='pb-5'>
                {/*{posts.length !== 0*/}
                {/*    && data.map(post => <Post key={post.id} post={post}/>)*/}
                {/*}*/}

                {/*{posts.length > 0*/}
                {/*    ? posts.map(post => <Post key={post.id} post={post}/>)*/}
                {/*    : data.map(post => <Post key={post.id} post={post}/>)*/}
                {/*}*/}

                {data.map(post => <Post key={post.id} post={post}/>)}

            </Container>
        </Container>
    );
};

export default PostsList;
