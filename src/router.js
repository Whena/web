// pages
import  {
    Home,
    NotFound,
    About,
    Blog,
    BlogDetail,
    Portfolio
}  from './pages/Index.js';
  
export const routers =[
    {
        namePage: 'Gerald\'\s site ',
        Component: Home,
        path: "/",
        mainNavigation: true

    },
    {
        namePage: 'Portfolio',
        Component: Portfolio,
        path: "/portfolio",
        mainNavigation: true
    },
    {
        namePage: 'Blog',
        Component: Blog,
        path: "/blog",
        mainNavigation: true
    },
    {
        namePage: 'Blog',
        Component: BlogDetail,
        path: "/blog/:id",
        mainNavigation: false
    },
    {
        namePage: 'About',
        Component: About,
        path: "/about",
        mainNavigation: true
    },
    {
        namePage: 'NotFound',
        Component: NotFound,
        path: "*",
        mainNavigation: false
    }
]