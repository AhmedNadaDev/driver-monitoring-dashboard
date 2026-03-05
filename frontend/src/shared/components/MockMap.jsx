const MockMap = () => (
  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-muted">
    <svg viewBox="0 0 400 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect fill="hsl(220 15% 93%)" width="400" height="200" />
      <path
        d="M 30 150 Q 80 80 150 100 T 250 70 T 370 50"
        stroke="hsl(220 70% 50%)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="8 4"
      />
      <circle cx="30" cy="150" r="6" fill="hsl(160 60% 45%)" />
      <circle cx="370" cy="50" r="6" fill="hsl(0 72% 51%)" />
      <text x="40" y="160" fontSize="10" fill="hsl(220 10% 50%)">
        Start
      </text>
      <text x="340" y="42" fontSize="10" fill="hsl(220 10% 50%)">
        End
      </text>
    </svg>
    <div className="absolute bottom-2 left-2 rounded bg-card/80 px-2 py-1 text-xs text-muted-foreground backdrop-blur-sm">
      Route Map (Preview)
    </div>
  </div>
)

export default MockMap

