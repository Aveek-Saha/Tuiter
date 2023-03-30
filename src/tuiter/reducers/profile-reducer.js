import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: "Jose",
    lastName: "Annunziato",
    handle: "@jannunzi",
    profilePicture:
        "https://i.pcmag.com/imagery/articles/04e4rbdlYClonRk2T3FiJXN-1..v1569492116.jpg",
    bannerPicture:
        "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "4/2009",
    followingCount: 340,
    followersCount: 223,
    tuits: 6144,
};

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateUser(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.handle = action.payload.handle;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
        },
    },
});

export const { updateUser } = profileSlice.actions;
export default profileSlice.reducer;
