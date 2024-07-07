import { AspectRatio } from '@ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/carousel';

interface Props {
  item: Product;
}

export const Portrait: React.FC<Props> = ({ item }) => {
  const { images, colorways } = item;
  const hasColorways = colorways.length > 1;
  return (
    <>
      {hasColorways && (
        <Carousel>
          <CarouselContent>
            {colorways.map(({ images, colorDescription }, index) => {
              const { squarishURL } = images;
              return (
                <CarouselItem key={index}>
                  <AspectRatio ratio={1 / 1}>
                    <img
                      className='object-cover w-full h-full rounded-lg'
                      src={squarishURL}
                      alt={colorDescription}
                    />
                  </AspectRatio>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      {!hasColorways && (
        <AspectRatio ratio={1 / 1}>
          <img
            loading='lazy'
            className='object-cover w-full h-full rounded-lg'
            src={images.squarishURL}
            alt={item.title}
          />
        </AspectRatio>
      )}
    </>
  );
};
