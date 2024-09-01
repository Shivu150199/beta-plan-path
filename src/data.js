import { nanoid } from "nanoid";

import {
    about,
    academic,
    avatar,
    cart,
    logout,
    path,
    phone,
    policy,
    pricing,
    terms,
    wishlist,
} from "./assets/menu";
import { datastructure, ds, english, math, mathposter } from "./assets/course";

export const courseData = [
    {
        id: 1,
        title: "Data Structure",
        image: ds,
        rating: "4.2",
        totalRating: "3022",
        tag: "sceince",
        credit: 4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        available: [
            "Stanford University",
            "CS102",
            "Internidiate",
            "computer scince",
        ],
        about: {
            "Max GPA": 4,
            "Course Length": "Semester",
            State: "CA",
            Country: "Santa clara",
        },
    },
    {
        id: 2,
        title: "English 1 for Credit Recovery , [FL]",
        image: english,
        rating: "4.5",
        totalRating: "3022",
        tag: "sceince",
        credit: 3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        available: [
            "Stanford University",
            "CS102",
            "Internidiate",
            "computer scince",
        ],
        about: {
            "Max GPA": 4,
            "Course Length": "Semester",
            State: "CA",
            Country: "Santa clara",
        },
    },
    {
        id: 3,
        title: "Math 1 for Credit Recovery , [FL]",
        image: mathposter,
        rating: "4.5",
        totalRating: "3022",
        tag: "sceince",
        credit: 3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum minus fugit doloremque aperiam atque error optio ad facilis, nulla nesciunt, voluptatem quae accusantium commodi expedita voluptates dolores debitis? Dolores, in iure! Unde, accusantium numquam placeat reiciendis ipsam quod quam dignissimos ratione a officiis, velit recusandae dolor, magni neque enim natus? Dolores doloribus cumque quidem, architecto sit deleniti? Ab illo asperiores sed, maiores sunt quas quo atque hic corporis magni mollitia iste non at quibusdam dolores quod iusto eveniet ullam cum officiis consectetur temporibus cupiditate est dicta. Cum eos dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        available: [
            "Stanford University",
            "CS102",
            "Internidiate",
            "computer scince",
        ],
        about: {
            "Max GPA": 4,
            "Course Length": "Semester",
            State: "CA",
            Country: "Santa clara",
        },
    },
];

export const menulist = [
    {
        id: 1,
        icon: academic,
        title: "Course",
        goto: "/course",
    },
    {
        id: 2,
        icon: pricing,
        title: "Pricing",
        goto: "/pricing",
    },
    {
        id: 3,
        icon: path,
        title: "My Path",
        goto: "/my-path",
    },
    {
        id: 4,
        icon: cart,
        title: "My Cart",
        goto: "/cart",
    },
    {
        id: 5,
        icon: wishlist,
        title: "Wish List",
        goto: "/wishlist",
    },
    {
        id: 6,
        icon: about,
        title: "About us",
        goto: "/aboutus",
    },
    {
        id: 7,
        icon: phone,
        title: "Contact us",
        goto: "/contactus",
    },
    {
        id: 8,
        icon: policy,
        title: "Privacy policy",
        goto: "/policy",
    },
    {
        id: 9,
        icon: terms,
        title: "Terms of service & Use",
        goto: "/terms",
    },
];

export const navMenulist = [
    {
        id: 1,
        icon: avatar,
        title: "My Profile",
        goto: "/myprofile",
    },

    {
        id: 3,
        icon: path,
        title: "My Path",
        goto: "/my-path",
    },
    {
        id: 4,
        icon: cart,
        title: "My Cart",
        goto: "/cart",
    },
    {
        id: 5,
        icon: wishlist,
        title: "Wish List",
        goto: "/wishlist",
    },
];

export const filterObj = [
    {
        id: 1,
        title: "School",
        filterType: [
            { name: "Regular", total: 322 },
            { name: "Honors", total: 322 },
            { name: "AP Course", total: 322 },
            { name: "AICE", total: 322 },
            { name: "IB Course", total: 322 },
        ],
    },
    {
        id: 2,
        title: "Course Level",
        filterType: [
            { name: "Regular", total: 322 },
            { name: "Honors", total: 322 },
            { name: "AP Course", total: 322 },
            { name: "AICE", total: 322 },
            { name: "IB Course", total: 322 },
        ],
    },
    {
        id: 3,
        title: "Available Credit",
        filterType: [
            { name: "Regular", total: 322 },
            { name: "Honors", total: 322 },
            { name: "AP Course", total: 322 },
            { name: "AICE", total: 322 },
            { name: "IB Course", total: 322 },
            { name: "AP Course", total: 322 },
            { name: "AICE", total: 322 },
            { name: "IB Course", total: 322 },
        ],
    },
];

export const reviewData = [
    {
        id: 1,
        username: "Akshay singh",
        rating: 4.2,
        date: "Jun 2024",
        reviewContent:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare montes dignissim; a hendrerit. Venenatis at consectetur risus condimentum lacus mattis vivamus. Platea id porttitor neque vehicula montes fringilla. Amet lobortis sodales vestibulum tincidun",
    },
    {
        id: 2,
        username: "Shivam singh",
        rating: 4.2,
        date: "Jun 2024",
        reviewContent:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare montes dignissim; a hendrerit. Venenatis at consectetur risus condimentum lacus mattis vivamus. Platea id porttitor neque vehicula montes fringilla. Amet lobortis sodales vestibulum tincidun",
    },
    {
        id: 3,
        username: "Radhu kumar",
        rating: 4.2,
        date: "Jun 2024",
        reviewContent:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare montes dignissim; a hendrerit. Venenatis at consectetur risus condimentum lacus mattis vivamus. Platea id porttitor neque vehicula montes fringilla. Amet lobortis sodales vestibulum tincidun",
    },
];

export const reviewObj = [
    {
        id: 1,
        question: "What background knowledge is necessary?",
        answer: [
            {
                username: "anonymous",
                createdAt: "12 Jul 2024",
                ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
            },
            {
                username: "anonymous",
                createdAt: "12 Jul 2024",
                ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
            },
        ],
    },
    {
        id: 2,
        question: "Why background knowledge is necessary?",
        answer: [
            {
                username: "anonymous",
                createdAt: "12 Jul 2024",
                ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
            },
        ],
    },
];

export const courseAddedToCart = [
    {
        id: 1,
        subject: "General physics",
        about: {
            credit: "4.00",
            type: "Core",
        },
        liked: false,
    },
    {
        id: 2,
        subject: "General physics",
        about: {
            credit: "4.00",
            type: "Core",
        },
        liked: false,
    },
    {
        id: 3,
        subject: "General physics",
        about: {
            credit: "4.00",
            type: "Core",
        },
        liked: false,
    },
    {
        id: 4,
        subject: "General physics",
        about: {
            credit: "4.00",
            type: "Core",
        },
        liked: false,
    },
];
