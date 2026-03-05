const StatCard = ({ title, value, icon: Icon, trend, trendUp }) => (
  <div className="rounded-lg bg-card p-6 shadow-card animate-fade-in">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="mt-1 text-3xl font-bold text-card-foreground">{value}</p>
        {trend && (
          <p
            className={`mt-1 text-xs font-medium ${
              trendUp ? 'text-success' : 'text-destructive'
            }`}
          >
            {trendUp ? '↑' : '↓'} {trend}
          </p>
        )}
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </div>
  </div>
)

export default StatCard

