import { create } from "apisauce";

const api = create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: 'application/vnd.github.v3+json'
    },
});
export const getCardApi = async () => {
    let response = { data: null, error: "" };
    await api
        .get("/posts")
        .then((apiResponse) => {
            if (apiResponse.ok) {
                response.data = apiResponse.data;
            } else {
                response.error = "Unable to fetch data"
            }
        })
        .catch((error) => {
            response.error = error;
        })
    return response;
}
export const getCommentsApi = async () => {
    let postID = window.location.href.split("/").pop();
    let commentresponse = { commentdata: null, error: "" };
    await api
        .get(`/comments?postId=${postID}`)
        .then((apiResponse) => {
            if (apiResponse.ok) {
                commentresponse.data = apiResponse.data;
            } else {
                commentresponse.error = "Unable to fetch data"
            }
        })
        .catch((error) => {
            commentresponse.error = error;
        })
    return commentresponse;
}
export const getAuthorsApi = async () => {
    let authorresponse = { authordata: null, error: "" };
    await api
        .get("/users")
        .then((apiResponse) => {
            if (apiResponse.ok) {
                authorresponse.authordata = apiResponse.data;
            } else {
                authorresponse.error = "Unable to fetch data"
            }
        })
        .catch((error) => {
            authorresponse.error = error;
        });
    return authorresponse;
}