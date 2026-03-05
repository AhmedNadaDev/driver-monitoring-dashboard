import { Link } from 'react-router-dom'
import { Plus, Eye } from 'lucide-react'
import { drivers } from '../../data/mockData.js'
import ScoreBadge from '../../shared/components/ScoreBadge.jsx'

const DriversPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">{drivers.length} drivers registered</p>
      <Link
        to="/drivers/new"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        <Plus className="h-4 w-4" /> Add Driver
      </Link>
    </div>

    <div className="hidden rounded-lg bg-card shadow-card md:block">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-muted-foreground">
            <th className="px-6 py-3 font-medium">Driver</th>
            <th className="px-6 py-3 font-medium">ID</th>
            <th className="px-6 py-3 font-medium">Avg Score</th>
            <th className="px-6 py-3 font-medium">Total Trips</th>
            <th className="px-6 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((d) => (
            <tr
              key={d.id}
              className="border-b last:border-0 hover:bg-muted/30 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {d.avatar}
                  </div>
                  <span className="font-medium text-card-foreground">{d.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-muted-foreground">{d.id}</td>
              <td className="px-6 py-4">
                <ScoreBadge score={d.avgScore} />
              </td>
              <td className="px-6 py-4 text-muted-foreground">{d.totalTrips}</td>
              <td className="px-6 py-4">
                <Link
                  to={`/drivers/${d.id}`}
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
      {drivers.map((d) => (
        <Link
          key={d.id}
          to={`/drivers/${d.id}`}
          className="block rounded-lg bg-card p-4 shadow-card"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {d.avatar}
              </div>
              <div>
                <p className="font-medium text-card-foreground">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.id}</p>
              </div>
            </div>
            <ScoreBadge score={d.avgScore} />
          </div>
          <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
            <span>{d.totalTrips} trips</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

export default DriversPage

