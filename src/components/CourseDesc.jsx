import React, { useState } from 'react'

const CourseDesc = () => {
  let courseDescription=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.`
  return (
    <div>
      <h2 className='text-[#31225C] font-[700] text-[22px]'>Course Description</h2>

  <TruncatedParagraph text={courseDescription} limit={500} />



    </div>
  )
}

export default CourseDesc


const TruncatedParagraph = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = text.length > limit ? text.substring(0, limit) + '...' : text;

  return (
    <div className="text-[13px] font-[400] text-[#525252] mt-2 md:w-[75%]">
      <span>
        {isExpanded ? text : truncatedText}
      </span>
      {text.length > limit && (
        <button onClick={toggleExpansion} className="text-primary font-bold">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};