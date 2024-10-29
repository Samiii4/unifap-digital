import {Link, useLocation} from 'react-router-dom'
import {FaHome, FaUserCog, FaCog } from "react-icons/fa";

export default function SideBar(){
    const location = useLocation();

    const menuItems = [
        {path: "/", name: 'paladino', icon: <FaHome size={20} /> }, {path: "/profile", name: 'perfil', icon: <FaHome size={20} /> },{path: "/settings", name: 'configurações', icon: <FaHome size={20} /> },
    ]

    return (
        <div classname='fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white p-4'>
        <div classname='text-2x1 font-bold mb-8 text-center'>paladino</div>
        <nav>
            <ul classname='space-y-2'>
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link to={item.path} className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${location.pathname === item.path}`}>
                        {item.icon}
                        <span>{item.name}</span>
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
        
        </div>

    )
}


