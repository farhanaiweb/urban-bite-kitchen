"use server";

import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { reservationSchema } from "@/lib/validation/reservation";
import { siteConfig } from "@/config/site";

type ActionState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
  values?: Record<string, string>;
};

export async function createReservation(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    guests: formData.get("guests"),
    date: formData.get("date"),
    time: formData.get("time"),
    specialRequests: formData.get("specialRequests"),
    website: formData.get("website"),
  };

  const parsed = reservationSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path.join(".");
      if (!fieldErrors[path]) fieldErrors[path] = [];
      fieldErrors[path].push(issue.message);
    }
    return {
      ok: false,
      fieldErrors,
      values: rawData as Record<string, string>,
    };
  }

  if (parsed.data.website && parsed.data.website.trim() !== "") {
    return { ok: true };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return {
      ok: false,
      message: `Online booking is not available right now. Please call us on ${siteConfig.phone}.`,
      values: rawData as Record<string, string>,
    };
  }

  const { error } = await supabase.from("reservations").insert({
    // @ts-expect-error Supabase types don't know the table schema
    name: parsed.data.fullName,
    phone: parsed.data.phone,
    email: parsed.data.email,
    guests: parsed.data.guests,
    reservation_date: parsed.data.date,
    reservation_time: parsed.data.time,
    special_requests: parsed.data.specialRequests ?? null,
    status: "pending",
  });

  if (error) {
    console.error("Reservation insert failed:", error.message);
    return {
      ok: false,
      message: "Something went wrong. Please try again or call us.",
      values: rawData as Record<string, string>,
    };
  }

  return { ok: true };
}