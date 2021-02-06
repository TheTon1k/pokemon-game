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

firebase.initializeApp(firebaseConfig)



export const fire = firebase
export  const database = firebase.database()
export default database

export function changeCardStatus(objId,isActive) {
    database.ref('pokemons/'+objId ).update({
        isActive
    });
}



