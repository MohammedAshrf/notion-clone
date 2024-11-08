import { DocumentData } from "firebase-admin/firestore";

export type User = {
  email: string;
  fullName: string;
  image: string;
};

export type AuthResult = {
  userId: string;
};

export interface RoomDocument extends DocumentData {
  createAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}
