
import { SearchBox, SheetAside, UserMenu, Navigation } from '.';

export const Header: React.FC<Props> = () => {
  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10'>
      <Navigation className='hidden flex-col md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6' />
      <SheetAside />
      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <SearchBox />
        <UserMenu />
      </div>
    </header>
  );
};
