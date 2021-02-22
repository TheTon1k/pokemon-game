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


firebase.initializeApp(firebaseConfig);
class Firebase{
    constructor() {
        if (!firebase.apps.length) {

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
    offPokemonsSocket =()=>{
        this.database.ref('pokemons').off()

    }

    postPokemon =(key,pokemon)=>{
        this.database.ref('pokemons/'+key).set(pokemon)
    }
    addPokemon =(pokemonData)=>{
        const newPostKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/'+newPostKey).set(pokemonData)
    }
}
export default Firebase



