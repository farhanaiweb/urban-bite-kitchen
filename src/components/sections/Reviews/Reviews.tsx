import { Section, Container } from "@/components/ui";
import { demoReviews } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  const filledStars = Math.max(0, Math.min(5, rating));
  const emptyStars = 5 - filledStars;

  return (
    <span className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: filledStars }, (_, i) => (
        <svg key={i} className="h-5 w-5 fill-deep-red" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {Array.from({ length: emptyStars }, (_, i) => (
        <svg key={i + filledStars} className="h-5 w-5 text-deep-red/40 fill-none stroke-deep-red" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" className="bg-cream-surface">
      <Container>
        <div className="mb-10 md:mb-12">
          <p className="text-deep-red text-sm font-medium tracking-widest uppercase mb-2">Reviews</p>
          <h2 className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-wider mb-4">
            What our guests say
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
            Don&apos;t just take our word for it — here&apos;s what our guests think.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {demoReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col rounded-xl bg-cream-surface p-6 hover:shadow-sm transition-shadow hover:not-reduced-motion border border-border"
            >
              <Stars rating={review.rating} />

              <p className="text-black text-base leading-relaxed mb-6 flex-1">
                {review.comment}
              </p>

              <div className="mt-auto">
                <span className="text-black font-semibold">
                  {review.authorName}
                </span>
                <p className="text-text-muted text-xs mt-2">Demo review</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-text-muted text-xs text-center">
          Demo reviews for portfolio purposes.
        </p>
      </Container>
    </Section>
  );
}