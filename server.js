// https://github.com/HackerNews/API
// https://firebase.google.com/docs/database
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const databaseURL= "https://hacker-news.firebaseio.com";

const app = initializeApp({ databaseURL });
const db = getDatabase(app);

const itemRef = ref(db, '/v0/item/8863');
onValue(itemRef, (snapshot) => {
  const data = snapshot.val();
  console.log("WBA4", data, snapshot)
  process.exit()
});
