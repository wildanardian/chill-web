interface RatingBadgeProps {
  rating: number
  maxRating?: number
}

export function RatingBadge({ rating, maxRating = 5 }: RatingBadgeProps) {
  return (
    <p className="text-white text-xs">
      ★ {rating}/{maxRating}
    </p>
  )
}