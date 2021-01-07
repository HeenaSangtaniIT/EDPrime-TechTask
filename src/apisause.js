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
            console.log(apiResponse);
            if (apiResponse.ok) {
                response.data = apiResponse.data;
            } else {
                response.error = "Unable to fetch data"
                console.log("response data", response.data);
            }
        })
        .catch((error) => {
            response.error = error;
        })
    return response;
}
export const getCommentsApi = async () => {
    let commentresponse = { commentdata: null, error: "" };
    await api
        .get("/comments")
        .then((apiResponse) => {
            console.log("apiResponse",apiResponse);
            if (apiResponse.ok) {
                commentresponse.data = apiResponse.data;
            } else {
                commentresponse.error = "Unable to fetch data"
                console.log("commentresponse data", commentresponse.data);
            }
        })
        .catch((error) => {
            commentresponse.error = error;
        })
    return commentresponse;
}
export const getAuthorsApi = async () => {
    let authorresponse = { authordata: null, error: "" };
    console.log("authorresponse", authorresponse);
    await api
        .get("/users")
        .then((apiResponse) => {
            if (apiResponse.ok) {
                authorresponse.authordata = apiResponse.data;
                console.log("apiResponse",apiResponse.data);
            } else {
                authorresponse.error = "Unable to fetch data"
                console.log("authorresponse data", authorresponse.authordata);
            }
        })
        .catch((error) => {
            console.log("authorresponse error", error);
            authorresponse.error = error;
        });
        console.log("apiResponse",authorresponse);
    return authorresponse;
}