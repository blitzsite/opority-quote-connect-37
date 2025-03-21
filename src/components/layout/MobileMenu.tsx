
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

interface MobileMenuProps {
  links: {
    name: string;
    path: string;
    isButton?: boolean;
  }[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const location = useLocation();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-opority-navy" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[280px] sm:w-[350px]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left">
            <span className="text-2xl font-semibold">
              <span className="text-opority-blue">O</span>pority
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-3 text-base font-medium rounded-md transition-colors",
                link.isButton 
                  ? "bg-opority-blue text-white hover:bg-opority-blue-light"
                  : location.pathname === link.path
                    ? "text-opority-blue bg-opority-blue/10"
                    : "text-opority-navy hover:bg-gray-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-sm text-gray-500">© 2023 Opority. All rights reserved.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
