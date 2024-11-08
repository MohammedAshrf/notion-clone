"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { createNewDocument } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleCreateNewDocument() {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc${docId}`);
    });
  }

  return (
    <div>
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
        {isPending ? "Creating..." : "New Document"}
      </Button>
    </div>
  );
}
