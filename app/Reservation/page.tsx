import { Suspense } from "react";
import ReservationClient from "./ReservationClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-28 text-center">Chargement…</div>}>
      <ReservationClient />
    </Suspense>
  );
}
