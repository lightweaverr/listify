"use server";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth/next";
import { AuthSession } from "@/types/types";
import axios from "axios";

export const customGet = async (url: string, session: AuthSession | null) => {
  if (!session) {
    return null;
  }

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    });
    return response.data;
  } 
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAuthSession = async () => {
  const session = (await getServerSession(authOptions)) as AuthSession;

  if (!session) {
    return null;
  }

  const currentTimestamp = Math.floor(Date.now());
  if (currentTimestamp >= session.user.expires_at * 1000) {
    return null;
  }

  return session;
};
