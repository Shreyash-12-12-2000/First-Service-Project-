import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, MoreVertical, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/65 backdrop-blur-sm border-b border-border z-50"
    >
      <div className="container mx-auto px-4 py-1">
        <div className="relative w-full flex items-center justify-between h-20">
          {/* Logo - centered on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
            <Link to="/" className="flex items-center space-x-2">
            <img
             src="logo.png"
             alt="BusinessPro Logo"
             className="max-w-[16rem] h-auto md:max-w-[17rem]"
            />

            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-accent pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (right side) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-2"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
