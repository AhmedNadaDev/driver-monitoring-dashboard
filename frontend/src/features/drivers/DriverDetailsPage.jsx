import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { drivers, trips } from '../../data/mockData.js'
import ScoreBadge from '../../shared/components/ScoreBadge.jsx'

const DriverDetailsPage = () => {
  const { id } = useParams()
  const driver = drivers.find((d) => d.id === id)
  const driverTrips = trips.filter((t) => t.driverId === id)

  if (!driver) {
    return <div className="p-8 text-center text-muted-foreground">Driver not found</div>
  }

  return (
    <div className="space-y-6">
      <Link
        to="/drivers"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Drivers
      </Link>

      <div className="rounded-lg bg-card p-6 shadow-card">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
            {driver.avatar}
          </div>
          <div>
            <h2 className="text-xl font-bold text-card-foreground">{driver.name}</h2>
            <p className="text-sm text-muted-foreground">{driver.id}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-muted-foreground">Avg Safety Score</p>
            <div className="mt-1">
              <ScoreBadge score={driver.avgScore} size="md" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Trips</p>
            <p className="mt-1 text-2xl font-bold text-card-foreground">{driver.totalTrips}</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-card p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-card-foreground">Recent Trips</h3>
        {driverTrips.length === 0 ? (
          <p className="text-sm text-muted-foreground">No trips found.</p>
        ) : (
          <div className="space-y-3">
            {driverTrips.map((t) => (
              <Link
                key={t.id}
                to={`/trips/${t.id}`}
                className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/30 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-card-foreground">{t.id}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.date} · {t.duration}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {t.violations.length} violations
                  </span>
                  <ScoreBadge score={t.score} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DriverDetailsPage

