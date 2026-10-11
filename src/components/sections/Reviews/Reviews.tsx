import { Section, Container } from "@/components/ui";
import { demoReviews } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  const filledStars = Math.max(0, Math.min(5, rating));
  const emptyStars = 5 - filledStars;

  return (
    <span className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: filledStars }, (_, i) => (
        <svg key={i} className="h-5 w-5 text-deep-red fill-current" viewBox="0 0 24 24">
          <path d="M12 2c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18zM7 6v2h10V6H7zm5 3.64L9.75 9.75l.75.75L14 7.25l4.25 4.25.88-.88L18.64 11H9.75l-1.06 1.06L7 13.25v-3.6z" />
        </svg>
      ))}
      {Array.from({ length: emptyStars }, (_, i) => (
        <svg key={i + filledStars} className="h-5 w-5 text-deep-red/40 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18zM7 6v2h10V6H7zm5 3.64L9.75 9.75l.75.75L14 7.25l4.25 4.25.88-.88L18.64 11H9.75l-1.06 1.06L7 13.25v-3.6z" />
        </svg>
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <Section id="reviews">
      <Container>
        <h2
          className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-wider mb-12"
        >
          What our guests say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {demoReviews.map((review) => (
            <div
              key={review.id}
              className="group rounded-xl overflow-hidden bg-cream-surface p-6 hover:shadow-sm transition-shadow hover:not-reduced-motion border border-border"
            >
              <Stars rating={review.rating} />

              <p
                className="text-black text-base leading-relaxed mb-6 line-clamp-3"
              >
                {review.comment}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-black font-semibold">
                  {review.authorName}
                </span>
              </div>
              <p className="text-text-muted text-xs mt-2">Demo review</p>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-text-muted text-xs text-center"
        >
          Demo reviews for portfolio purposes.
        </p>
      </Container>
    </Section>
  );
}