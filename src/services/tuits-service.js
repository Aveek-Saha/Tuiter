import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE_DATABASE || "http://localhost:4000/api";
const TUITS_API = `${API_BASE}/tuits`;

const currentUser = {
    userName: "NASA",
    userHandle: "nasa",
    userAvatar:
        "https://npr.brightspotcdn.com/legacy/sites/wksu/files/201512/nasa_logo.jpg",
};

const templateTuit = {
    ...currentUser,
    topic: "Space",
    time: "2h",
};

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, { ...tuit, ...templateTuit });
    return response.data;
};

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
};

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`);
    return response.data;
};

export const updateTuit = async (tuit) => {
    await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
};
