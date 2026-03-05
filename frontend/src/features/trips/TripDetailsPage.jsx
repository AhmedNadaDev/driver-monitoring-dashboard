import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle, Clock, MapPin } from 'lucide-react'
import { trips } from '../../data/mockData.js'
import ScoreBadge from '../../shared/components/ScoreBadge.jsx'
import MockMap from '../../shared/components/MockMap.jsx'

const TripDetailsPage = () => {
  const { id } = useParams()
  const trip = trips.find((t) => t.id === id)

  if (!trip) {
    return <div className="p-8 text-center text-muted-foreground">Trip not found</div>
  }

  return (
    <div className="space-y-6">
      <Link
        to="/trips"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Trips
      </Link>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-card p-6 shadow-card">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Trip {trip.id}</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-medium text-card-foreground">{trip.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="font-medium text-card-foreground">{trip.date}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Driver</p>
              <Link
                to={`/drivers/${trip.driverId}`}
                className="font-medium text-primary hover:underline"
              >
                {trip.driverName}
              </Link>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Safety Score</p>
              <div className="mt-1">
                <ScoreBadge score={trip.score} size="md" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-card">
          <h3 className="mb-4 text-base font-semibold text-card-foreground">Route Map</h3>
          <MockMap />
        </div>
      </div>

      <div className="rounded-lg bg-card p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-card-foreground">
          Violations ({trip.violations.length})
        </h3>
        {trip.violations.length === 0 ? (
          <p className="text-sm text-success font-medium">No violations — clean trip! ✓</p>
        ) : (
          <div className="space-y-3">
            {trip.violations.map((v, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{v.type}</p>
                  <p className="text-xs text-muted-foreground">
                    {v.time} · {v.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TripDetailsPage

