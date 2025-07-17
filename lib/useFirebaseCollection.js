import useSWR from 'swr';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const fetcher = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => doc.data());
};

export const useFirebaseCollection = (collectionName) => {
    const { data, error, isLoading } = useSWR(collectionName, () => fetcher(collectionName), {
        revalidateOnFocus: false,
    });

    return {
        data,
        isLoading,
        error,
    };
};