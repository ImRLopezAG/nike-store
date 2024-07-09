import { Button } from '@ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@ui/sheet';
import {
  Menu
} from 'lucide-react';
import { Navigation } from './navigation';
export const SheetAside: React.FC<Props> = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Navigation className='grid' />
      </SheetContent>
    </Sheet>
  );
};
