import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {

    return (dispatch) => {
        const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=10';

        fetch(url).then((response) => {

            //convert response data into json data 
            return response.json();
        }).then((data) => {

            //now we want to add these posts to our store 
            //so now we will dispatch an action
            dispatch(updatePosts(data.data.posts));

        })
    }
}



export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}