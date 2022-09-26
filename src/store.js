import { configureStore, createSlice } from "@reduxjs/toolkit";

const figurineSlice = createSlice({
    name: "figurine",
    initialState: [
        {id: 1, number: 503, name: "Bartman", category: "Pop Television", description: "Offert pas Jacques lors de mon anniversaire, état neuf", purchaseDate: "20/07/2022", box: false, chase: false, exclusive: true, imgUrl: "./img/bartman.jpg"},
        {id: 2, number: 421, name: "Eleven with eggos", category: "Pop Television", description: "Chase édition acheté à Geek'n'pop dans un magasin à Tours, état neuf", purchaseDate: "14/05/2022", box: true, chase: true, exclusive: true, imgUrl: "./img/eleven.jpg"},
        {id: 3, number: 121, name: "Matt Murdock", category: "Pop Marvel", description: "Récupéré d'occasion dans un micromania, pas très cher mais sans boite", purchaseDate: "05/02/2022", box: false, chase: false, exclusive: false, imgUrl: "./img/mattmurdock.jpg"},
        {id: 4, number: 243, name: "Chell", category: "Pop Games", description: "Issue de la licence Portal, figurine accompagnée du cube iconique du jeux, très bon état, avec boite", purchaseDate: "28/11/2022", box: true, chase: false, exclusive: false, imgUrl: "./img/shell.jpg"}
    ],
        // Reducers (initialState, action)
    reducers: {
        addFigurine: (state, action) => {
            // {type: "figurine/addFigurine", payload: {}}
            console.log(action.payload);
        },
        modifyFigurine: () => {},
        deleteFigurine: () => {}
    }
});

export const store = configureStore({
    reducer: {
        figurine: figurineSlice.reducer
    },
})