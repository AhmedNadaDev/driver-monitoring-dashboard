import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, MapPin, ChevronLeft, ChevronRight, Shield, X } from 'lucide-react'

const navItems = [
  { label: 'Overview', path: '/', icon: LayoutDashboard },
  { label: 'Drivers', path: '/drivers', icon: Users },
  { label: 'Trips', path: '/trips', icon: MapPin },
]

const AppSidebar = ({ collapsed, onToggle, mobileOpen, onMobileClose }) => {
  const location = useLocation()

  const sidebarContent = (
    <div
      className={`flex h-full flex-col bg-sidebar transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
          <Shield className="h-4 w-4 text-sidebar-primary-foreground" />
        </div>
        {!collapsed && (
          <>
            <span className="text-lg font-bold text-sidebar-accent-foreground">Driver Monitor</span>
            <button
              type="button"
              onClick={onMobileClose}
              className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-sidebar-foreground hover:bg-sidebar-accent md:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-2">
        {navItems.map((item) => {
          const active =
            location.pathname === item.path ||
            (item.path !== '/' && location.pathname.startsWith(item.path))

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onMobileClose}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <button
        onClick={onToggle}
        className="m-2 hidden items-center justify-center rounded-lg p-2 text-sidebar-foreground hover:bg-sidebar-accent md:flex"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </div>
  )

  return (
    <>
      <aside className="hidden md:block">{sidebarContent}</aside>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          onClick={onMobileClose}
        />
        <aside
          className={`relative z-10 h-full w-64 max-w-full transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {sidebarContent}
        </aside>
      </div>
    </>
  )
}

export default AppSidebar

