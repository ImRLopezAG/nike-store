import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { Mail } from 'lucide-react';
export const Landing = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#09090b] to-[#0056b3] animate-gradient-x rounded-md'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white'>
                Unlock Global Commerce for Your Business
              </h1>
              <p className='text-white text-2xl'>
                Our e-commerce app enables purchases in countries where major
                providers don't operate. Empower your local digital stores to
                reach new customers through our warehouse services.
              </p>
            </div>
            <div className='w-full max-w-sm space-y-2'>
              <form className='flex gap-2'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='max-w-lg w-full bg-white/10 text-white/80 focus:border-blue-500'
                />
                <Button
                  type='submit'
                  className='bg-white text-[#007bff] hover:bg-[#f0f0f0] focus:ring-0'
                >
                  <Mail className='mr-2 h-4 w-4' />
                  Subscribe
                </Button>
              </form>
              <p className='text-xs text-white/80'>
                Sign up to be notified when we launch.
              </p>
            </div>
          </div>
          <div className='flex justify-center relative hover:scale-105 transition-transform duration-300'>
            <img
              src='/landing.png'
              width='550'
              height='400'
              alt='Hero'
              className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last z-0'
            />
            <div className='absolute inset-0 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-3xl'>
              <h2 className='absolute top-0 left-1 text-7xl text-white opacity-10 font-bold -rotate-[20deg] w-fit tracking-tight md:text-9xl'>
                Just Do It.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
