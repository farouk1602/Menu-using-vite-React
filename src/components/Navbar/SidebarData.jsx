import { FaHome } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome /> ,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <HiDocumentReport /> ,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaShoppingCart /> ,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <RiTeamFill /> ,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <MdMessage />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BsQuestionCircleFill /> ,
        cName: 'nav-text'
    },

]


