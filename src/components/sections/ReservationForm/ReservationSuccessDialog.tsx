"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

type ReservationSuccessDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  firstName: string;
  guests: number | string;
  date: string;
  time: string;
};

function formatDateENGB(dateStr: string): string {
  // Try to format the date string in en-GB
  try {
    const date = new Date(dateStr + "T00:00:00");
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  } catch {
    // Fall through
  }
  return dateStr;
}

export function ReservationSuccessDialog({
  isOpen,
  onClose,
  firstName,
  guests,
  date,
  time,
}: ReservationSuccessDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      // Focus the close button when opened
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClick = (event: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        onClose();
      }
    };

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("click", handleClick);
    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("click", handleClick);
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [onClose]);

  const guestText = Number(guests) === 1 ? "guest" : "guests";
  const formattedDate = formatDateENGB(date);

  return (
    <dialog
      ref={dialogRef}
      className={`backdrop:bg-black/60 bg-cream-surface text-black rounded-2xl p-8 max-w-md w-[calc(100%-2rem)] mx-auto shadow-lg border border-border ${
        isReducedMotion ? "" : "animate-in fade-in duration-200"
      }`}
      aria-labelledby="reservation-success-title"
    >
      <div className="flex flex-col items-center text-center">
        <div className="h-14 w-14 rounded-full bg-deep-red flex items-center justify-center mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 8L11 18L7 14"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2
          id="reservation-success-title"
          className="text-2xl font-bold text-black mb-4"
        >
          Request received
        </h2>
        <p className="text-base text-text-muted mb-8">
          Thanks {firstName}. We have your request for {guests} {guestText} on{" "}
          {formattedDate} at {time}. We will confirm your booking shortly.
        </p>
        <Button
          ref={closeButtonRef}
          variant="primary"
          size="md"
          className="w-full"
          onClick={onClose}
        >
          Done
        </Button>
      </div>
    </dialog>
  );
}
