import { siteConfig } from "@/config/site";

export function ReservationAside() {
  const { openingHours, phone, whatsappDigits, address } = siteConfig;

  return (
    <div className="space-y-6">
      <div className="bg-cream-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-bold text-black mb-4">Opening hours</h3>
        <dl className="space-y-0">
          {openingHours.structured.map((item) => (
            <div
              key={item.day}
              className="flex justify-between py-2 border-b border-border last:border-0"
            >
              <dt className="text-sm text-black">{item.day}</dt>
              <dd className="text-sm text-text-muted">
                {item.open}–{item.close}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="bg-cream-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-bold text-black mb-4">Prefer to call?</h3>
        <address className="not-italic space-y-3">
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="text-lg font-semibold text-black hover:text-deep-red transition-colors"
          >
            {phone}
          </a>
          <a
            href={`https://wa.me/${whatsappDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-black hover:text-deep-red transition-colors block"
          >
            Chat on WhatsApp
          </a>
          <p className="text-sm text-text-muted">{address}</p>
        </address>
      </div>
    </div>
  );
}