import { UPDATE_POSTS } from './actionTypes';
import { APIUrls } from '../util/urls';

export function fetchPosts() {

    return (dispatch) => {
        const url = APIUrls.login;

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