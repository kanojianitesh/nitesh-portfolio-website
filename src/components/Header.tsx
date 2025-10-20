import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// --------------------
// Navigation Items
// --------------------
export const NAV_ITEMS = [
  { label: "About", path: "/" },
  { label: "Research", path: "/research" },
  { label: "Publications", path: "/publications" },
  { label: "Teaching", path: "/teaching" },
  { label: "Fun", path: "/fun" },
];

// --------------------
// Nav Links Component
// --------------------
interface NavLinksProps {
  onNavigate?: () => void;
  orientation?: "horizontal" | "vertical";
}

function NavLinks({ onNavigate, orientation = "horizontal" }: NavLinksProps) {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "text-sm font-medium",
        orientation === "horizontal"
          ? "hidden md:flex items-center space-x-6"
          : "flex flex-col space-y-3",
      )}
    >
      {NAV_ITEMS.map(({ label, path }) => (
        <Link
          key={path}
          to={path}
          onClick={onNavigate}
          className={cn(
            "transition-colors hover:text-primary",
            location.pathname === path
              ? "font-semibold text-primary"
              : "text-muted-foreground",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

// --------------------
// Header Component
// --------------------
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo / Avatar */}
        <Link to="/" className="flex items-center space-x-2">
          <Avatar className="h-9 w-9 ring-1 ring-border">
            <AvatarImage alt="Profile" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar>
        </Link>

        {/* Desktop Nav */}
        <NavLinks orientation="horizontal" />

        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:flex"
          >
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
