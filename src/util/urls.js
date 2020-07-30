const API_ROOT = 'http://codeial.com:8000/api/v2';

export const APIUrls = {
    login: () => `${API_ROOT}/users/login`,
    signup: () => `${API_ROOT}/users/signup`,
    //instead of string we use function and this function will return a string
    //bcz we are fetching page and limit and we want to make it dynamic 

    fetchPosts: (page, limit) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,

};