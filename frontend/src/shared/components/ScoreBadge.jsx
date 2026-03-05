const ScoreBadge = ({ score, size = 'sm' }) => {
  const color =
    score >= 90
      ? 'bg-success/10 text-success'
      : score >= 75
      ? 'bg-warning/10 text-warning'
      : 'bg-destructive/10 text-destructive'

  const sizeClass = size === 'md' ? 'px-3 py-1.5 text-sm' : 'px-2 py-0.5 text-xs'

  return (
    <span className={`inline-flex items-center rounded-full font-semibold ${color} ${sizeClass}`}>
      {score}
    </span>
  )
}

export default ScoreBadge

