import "isomorphic-fetch";

const initialHeaders = {"Content-Type": "application/json", "Accept": "application/json"};
const fetchWrapper = async ({url, method, body, headers, credentials = "include"}) => {
    const actualHeaders = {...initialHeaders, ...headers};
    const response = await fetch(url, {
        method,
        headers: actualHeaders,
        credentials,
        body
    });
    const responseType = response.headers.get("content-type");
    if (!response.ok) {
        throw Error(response.message || response.statusText);
    } else if (!responseType) {
        throw Error("Response type was not defined");
    } else if (responseType.indexOf("application/json") !== -1) {
        return response.json();
    } else if (responseType.indexOf("text/html") !== -1) {
        return response.text();
    } else {
        throw Error("Response type not supported yet!");
    }

};

export const fetchGet = (url, {headers, credentials}) => {
    return fetchWrapper({url, method: "GET", headers, credentials});
};

export const fetchPost = (url, {body, headers, credentials}) => {
    return fetchWrapper({url, method: "POST", body, headers, credentials});
};

export const fetchPut = (url, {body, headers, credentials}) => {
    return fetchWrapper({url, method: "PUT", body, headers, credentials});
};
export const fetchDelete = (url, {body, headers, credentials}) => {
    return fetchWrapper({url, method: "DELETE", body, headers, credentials});
};
