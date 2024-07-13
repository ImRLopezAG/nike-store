import { Search } from 'lucide-react';
import { Input } from '@ui/input';

import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router'
import { usePage } from '@hooks/use-pagination'

export const SearchBox: React.FC<Props> = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const enpoint = `/product_feed/rollup_threads/v2?filter=marketplace(US)&filter=language(en)&filter=employeePrice(true)&searchTerms=(${search})&anchor=24&consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&count=24&language=en&localizedRangeStr={lowestPrice} — {highestPrice}
`
  const { handleCurrPage } = usePage();
  return (
    <div className='relative ml-auto flex-1 md:grow-0'>
      <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
      <Input
        type='search'
        placeholder='Search...'
        className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleCurrPage(enpoint)
            navigate({
              to: '/',
              search: `?search=${search}`,
            })
          }
        }}
      />
    </div>
  );
};

