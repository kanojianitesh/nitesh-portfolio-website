import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 w-full border-t border-border bg-background/60 py-6 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-3 text-center">
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2">
          <Button asChild variant="ghost">
            <a
              href="http://www.linkedin.com/in/nitesh-kanojia-1510"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              {/* <span>LinkedIn</span> */}
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="mailto:Kanojianitesh01@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
              <span>Kanojianitesh01@gmail.com</span>
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="tel:+919665957179" aria-label="Phone">
              <Phone className="h-5 w-5" />
              <span>+91 966-595-7179</span>
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} by{" "}
          <span className="font-medium text-primary">Nitesh</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
