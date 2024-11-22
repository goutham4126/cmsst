import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About AECS</h2>
            <p className="text-sm text-muted-foreground">
              The Centre for Memory Studies and Storytelling at AECS is dedicated to interdisciplinary research and education in the fields of memory studies and storytelling.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Board Members
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/mous" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  MOUs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <address className="text-sm text-muted-foreground not-italic">
              <p>Vignana Jyothi Nagar, Pragathi Nagar</p>
              <p>Hyderabad - 090</p>
              <p>India</p>
              <p className="mt-2">Email: cmsst@vnrvjiet.in</p>
              <p>Phone: +91 9849057294</p>
              <p className="mt-2">
                <a 
                  href="https://vnrvjiet.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Visit College Website
                </a>
              </p>
            </address>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 border-t pt-4 text-center">
          <div className="flex items-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Centre for Memory Studies and Storytelling, AECS. All rights reserved.
            website credits : <a href="https://www.linkedin.com/in/p-goutham-6a49292a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 ml-2 text-muted-foreground hover:text-primary transition-colors" />
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}