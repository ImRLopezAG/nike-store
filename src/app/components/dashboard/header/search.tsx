import { Input } from '@ui/input';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router'
import { usePage } from '@hooks/use-pagination'

export function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const endpoint = `/product_feed/rollup_threads/v2?filter=marketplace(US)&filter=language(en)&filter=employeePrice(true)&searchTerms="${search}"&anchor=30&consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&count=30&language=en&localizedRangeStr={lowestPrice} — {highestPrice}`
  const { handleCurrPage } = usePage();
  return (
    <div>
      <Input
        type='search'
        placeholder='Search...'
        className='md:w-[100px] lg:w-[300px]'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleCurrPage(endpoint)
            navigate({
              to: '/',
              search: `?search=${search}`,
            })
          }
        }}
      />
    </div>
  );
}
