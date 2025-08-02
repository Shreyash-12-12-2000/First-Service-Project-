import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'IT Services', path: '/services/it-services'},
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
      { name: 'HR & Recruitment', path: '/services/hr-recruitment' },
      { name: 'Customer Support', path: '/services/customer-support' },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo4.png" alt="BusinessPro Logo" className="w-[17rem]" />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Leading provider of professional business services, delivering innovative solutions 
              to help your business grow and succeed in today's competitive market.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">umbrelladesk1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+917566026037</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Shope No 1 Shivheights Appartment <br />
                  Betarodi Road<br />
                  Nagpur , 440034
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Umbrelladesk. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer