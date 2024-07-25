import { db } from "../week-8/_utils/firebase"; // Adjust the import path as necessary
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The ID of the user for whom to fetch items.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of items.
 */
export const getItems = async (userId) => {
  try {
    // Reference to the user's items collection
    const itemsRef = collection(db, `users/${userId}/items`);
    const itemsQuery = query(itemsRef);

    // Fetch the documents from Firestore
    const querySnapshot = await getDocs(itemsQuery);

    // Create an array of item objects
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return items;
  } catch (error) {
    console.error("Error fetching items: ", error);
    throw new Error("Error fetching items");
  }
};

/**
 * Adds a new item to a specific user's list of items in Firestore.
 * @param {string} userId - The ID of the user to whom the item will be added.
 * @param {Object} item - The item object to add.
 * @returns {Promise<string>} - A promise that resolves to the ID of the newly created document.
 */
export const addItem = async (userId, item) => {
  try {
    // Reference to the user's items collection
    const itemsRef = collection(db, `users/${userId}/items`);

    // Add a new document to the collection
    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw new Error("Error adding item");
  }
};
