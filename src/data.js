
import {nanoid} from 'nanoid'
import ds from './assets/card/dataStructure.svg'
import { about, academic, avatar, cart, logout, path, phone, policy, pricing, terms, wishlist } from './assets/menu'

export const courseData=[
    {
        id:nanoid(),
        title:'Data Structure',
        image:ds,
        rating:'4.2',
        totalRating:'3022',
        tag:'sceince',
        credit:4,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        available:['Stanford University','CS102','Internidiate','computer scince'],
        about:{
            'Max GPA' :4,
'Course Length' :'Semester',
'State' :'CA',
'Country' :'Santa clara'
        }
    },
    {
        id:nanoid(),
        title:'English',
        image:ds,
        rating:'4.5',
        totalRating:'3022',
        tag:'sceince',
        credit:3,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        available:['Stanford University','CS102','Internidiate','computer scince'],
        about:{
            'Max GPA' :4,
'Course Length' :'Semester',
'State' :'CA',
'Country' :'Santa clara'
        }
    },
]

export const menulist=[
    {
      id:1,
      icon:academic,
      title:"Course",
      goto:'/course'
    },
    {
      id:2,
      icon:pricing,
      title:"Pricing",
      goto:'/pricing'
    },
    {
      id:3,
      icon:path,
      title:"My Path",
      goto:'/my-path'
    },
    {
      id:4,
      icon:cart,
      title:"My Cart",
      goto:'/cart'
    },
    {
      id:5,
      icon:wishlist,
      title:"Wish List",
      goto:'/wishlist'
    },
    {
      id:6,
      icon:about,
      title:"About us",
      goto:'/aboutus'
    },
    {
      id:7,
      icon:phone,
      title:"Contact us",
      goto:'/contactus'
    },
    {
      id:8,
      icon:policy,
      title:"Privacy policy",
      goto:'/policy'
    },
    {
      id:9,
      icon:terms,
      title:"Terms of service & Use",
      goto:'/terms'
    },
  
  ]

  export const navMenulist=[
    {
      id:1,
      icon:avatar,
      title:"My Profile",
      goto:'/myprofile'
    },
 
    {
      id:3,
      icon:path,
      title:"My Path",
      goto:'/my-path'
    },
    {
      id:4,
      icon:cart,
      title:"My Cart",
      goto:'/cart'
    },
    {
      id:5,
      icon:wishlist,
      title:"Wish List",
      goto:'/wishlist'
    },
   


  
  ]
  