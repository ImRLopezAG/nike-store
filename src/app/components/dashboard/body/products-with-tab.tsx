import { createFileRoute } from '@tanstack/react-router';
import { File, ListFilter, MoreHorizontal } from 'lucide-react';
import { OrderDetails } from '@components/cart'

import { Badge } from '@ui/badge';

import { Button } from '@ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';


export const Route = createFileRoute('/')({
  component: () => <Index />,
});

function Index() {
  return (
    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
      <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
        <Tabs defaultValue='week'>
          <div className='flex items-center'>
            <TabsList>
              <TabsTrigger value='week'>Week</TabsTrigger>
              <TabsTrigger value='month'>Month</TabsTrigger>
              <TabsTrigger value='year'>Year</TabsTrigger>
            </TabsList>
            <div className='ml-auto flex items-center gap-2'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-7 gap-1 text-sm'
                  >
                    <ListFilter className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only'>Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size='sm' variant='outline' className='h-7 gap-1 text-sm'>
                <File className='h-3.5 w-3.5' />
                <span className='sr-only sm:not-sr-only'>Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value='week'>
            <Card x-chunk='dashboard-06-chunk-0'>
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage your products and view their sales performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='hidden w-[100px] sm:table-cell'>
                        <span className='sr-only'>img</span>
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className='hidden md:table-cell'>
                        Price
                      </TableHead>
                      <TableHead className='hidden md:table-cell'>
                        Total Sales
                      </TableHead>
                      <TableHead className='hidden md:table-cell'>
                        Created at
                      </TableHead>
                      <TableHead>
                        <span className='sr-only'>Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className='hidden sm:table-cell'>
                        <img
                          alt='Product img'
                          className='aspect-square rounded-md object-cover'
                          height='64'
                          src='/placeholder.svg'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className='font-medium'>
                        Laser Lemonade Machine
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline'>Draft</Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        $499.99
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>25</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-07-12 10:42 AM
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup='true'
                              size='icon'
                              variant='ghost'
                            >
                              <MoreHorizontal className='h-4 w-4' />
                              <span className='sr-only'>Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='hidden sm:table-cell'>
                        <img
                          alt='Product img'
                          className='aspect-square rounded-md object-cover'
                          height='64'
                          src='/placeholder.svg'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className='font-medium'>
                        Hypernova Headphones
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline'>Active</Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        $129.99
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        100
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-10-18 03:21 PM
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup='true'
                              size='icon'
                              variant='ghost'
                            >
                              <MoreHorizontal className='h-4 w-4' />
                              <span className='sr-only'>Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='hidden sm:table-cell'>
                        <img
                          alt='Product img'
                          className='aspect-square rounded-md object-cover'
                          height='64'
                          src='/placeholder.svg'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className='font-medium'>
                        AeroGlow Desk Lamp
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline'>Active</Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        $39.99
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>50</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-11-29 08:15 AM
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup='true'
                              size='icon'
                              variant='ghost'
                            >
                              <MoreHorizontal className='h-4 w-4' />
                              <span className='sr-only'>Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='hidden sm:table-cell'>
                        <img
                          alt='Product img'
                          className='aspect-square rounded-md object-cover'
                          height='64'
                          src='/placeholder.svg'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className='font-medium'>
                        TechTonic Energy Drink
                      </TableCell>
                      <TableCell>
                        <Badge variant='secondary'>Draft</Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        $2.99
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>0</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-12-25 11:59 PM
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup='true'
                              size='icon'
                              variant='ghost'
                            >
                              <MoreHorizontal className='h-4 w-4' />
                              <span className='sr-only'>Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='hidden sm:table-cell'>
                        <img
                          alt='Product img'
                          className='aspect-square rounded-md object-cover'
                          height='64'
                          src='/placeholder.svg'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className='font-medium'>
                        Gamer Gear Pro Controller
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline'>Active</Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        $59.99
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>75</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2024-01-01 12:00 AM
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup='true'
                              size='icon'
                              variant='ghost'
                            >
                              <MoreHorizontal className='h-4 w-4' />
                              <span className='sr-only'>Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='hidden sm:table-cell'>
                        <img
                          alt='Product img'
                          className='aspect-square rounded-md object-cover'
                          height='64'
                          src='/placeholder.svg'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className='font-medium'>
                        Luminous VR Headset
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline'>Active</Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        $199.99
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>30</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2024-02-14 02:14 PM
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup='true'
                              size='icon'
                              variant='ghost'
                            >
                              <MoreHorizontal className='h-4 w-4' />
                              <span className='sr-only'>Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className='text-xs text-muted-foreground'>
                  Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div><OrderDetails />
    </main>
  );
}
