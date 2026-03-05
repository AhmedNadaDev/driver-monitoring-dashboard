import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'

const AddDriverPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [driverId, setDriverId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !driverId.trim()) return
    toast.success(`Driver "${name}" added successfully`)
    navigate('/drivers')
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <Link
        to="/drivers"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Drivers
      </Link>

      <div className="rounded-lg bg-card p-6 shadow-card">
        <h2 className="mb-6 text-lg font-semibold text-card-foreground">Add New Driver</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-card-foreground">
              Driver Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-card-foreground">
              Driver ID
            </label>
            <input
              value={driverId}
              onChange={(e) => setDriverId(e.target.value)}
              placeholder="e.g. DRV-009"
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Add Driver
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddDriverPage

