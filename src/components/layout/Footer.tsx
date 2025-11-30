import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/comac-logo.svg"
                alt="company logo"
                width={50}
                height={10}
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Commercial Aircraft Corporation of China (COMAC) develops and
              manufactures trunk liners and regional jets, advancing global
              aviation with innovation, safety, and reliability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Products & Service
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              Products & Service
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">COMAC C909</li>
              <li className="text-sm text-muted-foreground">COMAC C919</li>
              <li className="text-sm text-muted-foreground">COMAC C929</li>
              <li className="text-sm text-muted-foreground">
                Operation Support & Services
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>COMAC Headquarters, Shanghai, China</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>+86 21 2088 8888</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <span>customerservice@comac.cc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 COMAC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Certified by CAAC • Operating under Chinese Civil Aviation
              Regulations (CCAR)
            </p>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
