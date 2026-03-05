import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import { trips } from '../../data/mockData.js'
import ScoreBadge from '../../shared/components/ScoreBadge.jsx'

const TripsPage = () => (
  <div className="space-y-6">
    <p className="text-sm text-muted-foreground">{trips.length} trips recorded</p>

    <div className="hidden rounded-lg bg-card shadow-card md:block">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-muted-foreground">
            <th className="px-6 py-3 font-medium">Trip ID</th>
            <th className="px-6 py-3 font-medium">Driver</th>
            <th className="px-6 py-3 font-medium">Duration</th>
            <th className="px-6 py-3 font-medium">Score</th>
            <th className="px-6 py-3 font-medium">Date</th>
            <th className="px-6 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((t) => (
            <tr
              key={t.id}
              className="border-b last:border-0 hover:bg-muted/30 transition-colors"
            >
              <td className="px-6 py-4 font-medium text-card-foreground">{t.id}</td>
              <td className="px-6 py-4 text-muted-foreground">{t.driverName}</td>
              <td className="px-6 py-4 text-muted-foreground">{t.duration}</td>
              <td className="px-6 py-4">
                <ScoreBadge score={t.score} />
              </td>
              <td className="px-6 py-4 text-muted-foreground">{t.date}</td>
              <td className="px-6 py-4">
                <Link
                  to={`/trips/${t.id}`}
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  <Eye className="h-4 w-4" /> View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="space-y-3 md:hidden">
      {trips.map((t) => (
        <Link
          key={t.id}
          to={`/trips/${t.id}`}
          className="block rounded-lg bg-card p-4 shadow-card"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">{t.driverName}</p>
              <p className="text-xs text-muted-foreground">
                {t.id} · {t.date}
              </p>
            </div>
            <ScoreBadge score={t.score} />
          </div>
          <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
            <span>{t.duration}</span>
            <span>{t.violations.length} violations</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

export default TripsPage

