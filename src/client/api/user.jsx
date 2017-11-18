import {fetchPost} from "../utils/fetch-wrapper";

export const signin = async (username, password) => {
    return fetchPost("/users/signin", JSON.stringify({username, password}));
};

