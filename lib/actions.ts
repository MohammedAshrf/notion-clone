"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";
import { title } from "process";

export async function createNewDocument() {
  //   auth().protect();
  auth();

  const { sessionClaims } = await auth();

  const docCallectionRef = adminDb.collection("documents");
  const docRef = await docCallectionRef.add({
    title: "New Doc",
  });

  await adminDb.collection("users").doc(sessionClaims?.email!);
}
