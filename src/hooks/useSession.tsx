import { IUser } from "@/@types/User";
import { faker } from "@faker-js/faker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const USER_KEY = "USER_INFO";

export default function useSession() {
  const [user, setUser] = useState<IUser | null>(null);

  const getUSerInfo = useCallback(async () => {
    return await AsyncStorage.getItem(USER_KEY);
  }, []);

  const setUserInfo = useCallback(async () => {
    await AsyncStorage.setItem(
      USER_KEY,
      JSON.stringify({
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        profileImage: faker.image.avatar(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
      } as IUser)
    );
  }, []);

  const deleteUserInfo = useCallback(async () => {
    await AsyncStorage.removeItem(USER_KEY)
      .then(() => setUser(null))
      .catch((error) => {
        console.error("🚀 ~ deleteUserInfo ~ error:", error);
      });
  }, []);

  useEffect(() => {
    getUSerInfo().then((val) => {
      if (val !== null) {
        setUser(JSON.parse(val));
      }
    });

    return () => {
      setUser(null);
    };
  }, []);

  return {
    user,
    setUserInfo,
    deleteUserInfo,
  };
}
