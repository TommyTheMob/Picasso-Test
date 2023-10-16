import React from 'react';
import PageNavbar from "../shared/PageNavbar.jsx";
import PageBreadCrumbs from "../shared/PageBreadCrumbs.jsx";
import PostsList from "../posts/PostsList.jsx";

const PostsListPage = () => {
    return (
        <>
            <PageNavbar page='posts' />
            <PageBreadCrumbs page='posts' />
            <PostsList />
        </>
    );
};

export default PostsListPage;