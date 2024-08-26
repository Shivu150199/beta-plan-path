import React from 'react';
import notFound from '../assets/notFound.svg';

const PageNotFound = () => {
  return (
    <main
      className='w-screen h-[100%] flex items-center justify-center gap-2 flex-col'
      role='main' // Defines the main content area of the page
    >
      <figure>
        <img 
          src={notFound} 
          alt="An illustration of a broken page" 
          loading='lazy' 
        />
        <figcaption className='sr-only'>Image indicating page not found</figcaption>
      </figure>

      <h2 className='text-dark_violet text-5xl font-bold'>Oops!</h2>
      <p className='text-dark_violet text-sm text-center'>
        Something went wrong. Please try again later.
      </p>
    </main>
  );
};

export default PageNotFound;
