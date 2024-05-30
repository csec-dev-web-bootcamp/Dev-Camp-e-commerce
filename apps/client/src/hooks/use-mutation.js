"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect, useState, useTransition } from "react";

export default function useMutation() {
  const router = useRouter();
  const [isPending, setPending] = useState(false);
  const [isMutating, setMutating] = useState(false);
  const [isTransitionStarted, startTransition] = useTransition();

  useLayoutEffect(() => {
    setMutating(isPending || isTransitionStarted);
  }, [isPending, isTransitionStarted]);

  async function startMutation(callBack) {
    try {
      setPending(true);
      await callBack();
      startTransition(router.refresh);
      setPending(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  return {
    startMutation,
    isMutating,
  };
}
