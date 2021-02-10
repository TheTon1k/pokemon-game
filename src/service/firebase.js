import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyD31DcUjNpfo-gCaqrAXDXxI0pBxVoi8kg",
    authDomain: "pokemon-game-aaf60.firebaseapp.com",
    databaseURL: "https://pokemon-game-aaf60-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-aaf60",
    storageBucket: "pokemon-game-aaf60.appspot.com",
    messagingSenderId: "813117200088",
    appId: "1:813117200088:web:4fb521148d362f2515e9ad"
};



class Firebase{
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }else {
            firebase.app(); // if already initialized, use that one
        }
        this.fire = firebase;
        this.database = this.fire.database();
    }
    getPokemonsSocket = (cb)=>{
        this.database.ref('pokemons').on('value',(spanshot)=>{
            cb(spanshot.val())
        })
    }

    postPokemon =(key,pokemon)=>{
        this.database.ref('pokemins/'+key).set(pokemon)
    }
    addPokemon =(cb)=>{
        let newPoke = {
            "abilities" : [ "keen-eye", "tangled-feet", "big-pecks" ],
            "base_experience" : 122,
            "height" : 11,
            "id" : Math.floor(Math.random()*5000),
            "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "name" : "newPoke",
            "stats" : {
                "attack" : 60,
                "defense" : 55,
                "hp" : 63,
                "special-attack" : 50,
                "special-defense" : 50,
                "speed" : 71
            },
            "type" : "flying",
            "values" : {
                "bottom" : 7,
                "left" : 5,
                "right" : 2,
                "top" : "A"
            }
        }
        const newPostKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/'+newPostKey).set(newPoke)
    }
}
export default Firebase



