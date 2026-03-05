import { Users, MapPin, Shield, AlertTriangle, AlertCircle, Info } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import StatCard from '../../shared/components/StatCard.jsx'
import { drivers, trips, notifications, safetyScoreHistory } from '../../data/mockData.js'

const OverviewPage = () => {
  const totalDrivers = drivers.length
  const totalTrips = trips.length
  const avgScore = Math.round(drivers.reduce((s, d) => s + d.avgScore, 0) / drivers.length)
  const totalViolations = trips.reduce((s, t) => s + t.violations.length, 0)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Drivers" value={totalDrivers} icon={Users} trend="2 this month" trendUp />
        <StatCard title="Total Trips" value={totalTrips} icon={MapPin} trend="12% vs last month" trendUp />
        <StatCard title="Avg Safety Score" value={avgScore} icon={Shield} trend="3.2% improvement" trendUp />
        <StatCard
          title="Total Violations"
          value={totalViolations}
          icon={AlertTriangle}
          trend="8 this week"
          trendUp={false}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-lg bg-card p-6 shadow-card lg:col-span-2">
          <h2 className="mb-4 text-base font-semibold text-card-foreground">Fleet Safety Score Trend</h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={safetyScoreHistory}>
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(220 70% 50%)" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(220 70% 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(220 10% 50%)' }}
              />
              <YAxis
                domain={[70, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(220 10% 50%)' }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,.1)',
                }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="hsl(220 70% 50%)"
                strokeWidth={2.5}
                fill="url(#scoreGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-card">
          <h2 className="mb-4 text-base font-semibold text-card-foreground">Recent Notifications</h2>
          <div className="space-y-3">
            {notifications.map((n) => (
              <div key={n.id} className="flex gap-3 rounded-lg border p-3">
                <div
                  className={`mt-0.5 shrink-0 ${
                    n.type === 'alert'
                      ? 'text-destructive'
                      : n.type === 'warning'
                      ? 'text-warning'
                      : 'text-primary'
                  }`}
                >
                  {n.type === 'alert' ? (
                    <AlertCircle className="h-4 w-4" />
                  ) : n.type === 'warning' ? (
                    <AlertTriangle className="h-4 w-4" />
                  ) : (
                    <Info className="h-4 w-4" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-card-foreground">{n.message}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewPage

