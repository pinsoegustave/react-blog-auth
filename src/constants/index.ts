import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
}
 from "react-icons/hi";
// NAVBAR_LINKS
export const NAVBAR_LINKS = [
    {
        label : "Home",
        sublabel : "home",
        path : "/",
    },
    {
        label : "About Us",
        sublabel : "about",
        path : "/about",
    },
    {
        label : "Events",
        sublabel : "event",
        path : "/event",
    },
    {
        label : "Contact",
        sublabel : "contact",
        path : "/contact",
    },
]

// IMAGE_DETAILS
export const IMAGE_DETAILS = [
    {
        date : "January 12 2024",
        image : "./src/assets/images/world.jpg",
        title : "VISIT RWANDA",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "./src/assets/images/world.jpg",
        title : "VISIT UGANDA",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/world.jpg",
        title : "VISIT KENYA",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/world.jpg",
        title : "VISIT MALAYSIA",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/world.jpg",
        title : "VISIT SWEDEN",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/world.jpg",
        title : "VISIT ARGENTINA",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/world.jpg",
        title : "VISIT BRAZIL",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/travel.jpg",
        title : "VISIT JAPAN",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/travel.jpg",
        title : "VISIT IRAQ",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/travel.jpg",
        title : "VISIT SAUDI",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
    {
        date : "January 12 2024",
        image : "src/assets/images/travel.jpg",
        title : "VISIT TURKEY",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium Corrupti, suscipit laudantium! Deleniti sequi numquam est libero",
    },
]

// FOOTER
export const FOOTER_LINKS = [
    {
        title : 'Learn More',
        links : [
            'About TPS',
            'Press Releases',
            'Environment',
            'Jobs',
            'Privacy Policy',
            'Contact Us',
        ],
    },
    {
        title: 'Our community',
        links : [
            'Climbing xixii',
            'Hiking mountains',
            'Sailing in boats'
        ],
    }
]



export const DASHBOARD_SIDEBAR_LINKS = [
        {
            key: "dashboard",
            label: "Dashboard",
            path: "/",
            // icon: <HiOutlineViewGrid/>
        },
        {
            key: "products",
            label: "Add Event",
            path: "/addEvent",
            // icon: <HiOutlineCube/>
        },
        {
            key: "orders",
            label: "Edit Event",
            path: "/orders",
            // icon: <HiOutlineShoppingCart/>
        },
        {
            key: "customers",
            label: "Delete Event",
            path: "/customers",
            // icon: <HiOutlineUsers/>
        },
        {
            key: "transcations",
            label: "Comments",
            path: "/transcations",
            // icon: <HiOutlineDocumentText />
        },
        {
            key: "messages",
            label: "Feedback",
            path: "/messages",
            // icon: <HiOutlineAnnotation />
        },
];


export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: "settings",
        label: "Settings",
        path: "/settings",
        // icon: <HiOutlineCog/>
    },
    {
        key: "support",
        label: "Help & Support",
        path: "/support",
    // icon: <HiOutlineQuestionMarkCircle/>
    },
]

// AUTHORS_MOCKDATA
export const AUTHORS_MOCKDATA = [
    {
        id : 1,
        avatar: 'src/assets/images/travel.jpg',
        name : 'Place 1'
    },
    {
        id : 2,
        avatar: './src/assets/images/world.jpg',
        name: 'Place 2'
    },
    {
        id : 3,
        avatar: './src/assets/images/river.avif',
        name: 'Place 3'
    }
]