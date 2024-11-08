/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use server";

import { adminDb } from "@/firebase-admin";
import { AuthResult } from "@/types/types";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  //   auth().protect();
  auth();
  const authResult = (await auth()) as AuthResult;
  // console.log(authResult);

  // const user = authResult;
  // const { sessionClaims } = await auth();
  const { userId } = authResult;

  const docCallectionRef = adminDb.collection("documents");
  const docRef = await docCallectionRef.add({
    title: "New Doc",
  });

  await adminDb
    .collection("users")
    // .doc(sessionClaims?.email!)
    .doc(userId)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: userId,
      role: "owner",
      createAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}
