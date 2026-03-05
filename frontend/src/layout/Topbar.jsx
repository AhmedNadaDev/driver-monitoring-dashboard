import { Bell, Menu, User } from 'lucide-react'

const Topbar = ({ title, onMenuClick }) => (
  <header className="flex h-16 shrink-0 items-center justify-between border-b bg-card px-4 shadow-card md:px-6">
    <div className="flex items-center gap-3">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-muted-foreground hover:bg-muted md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>
      <h1 className="text-lg font-semibold text-card-foreground">{title}</h1>
    </div>
    <div className="flex items-center gap-2">
      <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-muted">
        <Bell className="h-5 w-5" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
      </button>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
        <User className="h-4 w-4" />
      </div>
    </div>
  </header>
)

export default Topbar

