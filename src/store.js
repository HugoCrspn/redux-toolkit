import { configureStore, createSlice } from "@reduxjs/toolkit";

const figurineSlice = createSlice({
    name: "figurine",
    initialState: [
        {id: 1, number: 503, name: "Bartman", category: "Pop Television", description: "Offert pas Jacques lors de mon anniversaire, état neuf", publishDate: "2022-9-27 12:08:28", purchaseDate: "20/07/2022", box: true, chase: false, exclusive: true, imgUrl: "./img/bartman.jpg"},
        {id: 2, number: 421, name: "Eleven with eggos", category: "Pop Television", description: "Chase édition acheté à Geek'n'pop dans un magasin à Tours, état neuf", publishDate: "2022-9-27 13:53:28", purchaseDate: "14/05/2022", box: true, chase: true, exclusive: true, imgUrl: "./img/eleven.jpg"},
        {id: 3, number: 121, name: "Matt Murdock", category: "Pop Marvel", description: "Récupéré d'occasion dans un micromania, pas très cher mais sans boite", publishDate: "2022-9-25 13:53:28", purchaseDate: "05/02/2022", box: false, chase: false, exclusive: false, imgUrl: "./img/mattmurdock.jpg"},
        {id: 4, number: 243, name: "Chell", category: "Pop Games", description: "Issue de la licence Portal, figurine accompagnée du cube iconique du jeux, très bon état, avec boite", publishDate: "2022-10-1 13:53:28", purchaseDate: "28/11/2021", box: true, chase: false, exclusive: false, imgUrl: "./img/shell.jpg"}
    ],
        // Reducers (initialState, action)
    reducers: {
        addFigurine: (state, action) => {
            // {type: "figurine/addFigurine", payload: {}}
            state.push(action.payload);
        },
        modifyFigurine: (state, action) => {
            // {type: "figurine/modifyFigurine", payload: id, infos}
            const updatedFigurine = state.find((figurine) => figurine.id === action.payload.id);
            updatedFigurine.name = action.payload.name;
            updatedFigurine.category = action.payload.category;
            updatedFigurine.number = action.payload.number;
            updatedFigurine.description = action.payload.description;
            updatedFigurine.purchaseDate = action.payload.purchaseDate;
            updatedFigurine.box = action.payload.box;
            updatedFigurine.chase = action.payload.chase;
            updatedFigurine.exclusive = action.payload.exclusive;
        },
        deleteFigurine: (state, action) => {
            // {type: "figurine/deleteFigurine", payload: id}
            return state.filter((figurine) => figurine.id !== action.payload);
        }
    }
});

export const store = configureStore({
    reducer: {
        figurine: figurineSlice.reducer
    },
})