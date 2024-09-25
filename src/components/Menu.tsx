import Image from 'next/image';
import { IoLogoReact,  IoCalculator, IoAccessibility } from 'react-icons/io5';
import { SideBarComponent } from './SideBar';

const menuItems = [
  {
    path: '/',
    icon: <IoLogoReact size={40} />,
    title: 'Home',
    subTitle: 'Home'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoAccessibility size={40} />,
    title: 'Pokemons',
    subTitle: 'Estatic generation'
  }
];

export function MenuComponent() {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
              <h1 className="text-lg md:text-2xl font-bold text-white">
                <IoLogoReact className='mar' />
                <span>Dash</span>
                <span className="text-blue-500">8</span>.
              </h1>
              <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            
            <div id="profile" className="px-6 py-10">
              <p className="text-slate-500">Welcome back,</p>
              <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                  <Image
                    className="rounded-full w-8 h-8" 
                    src="/img/avatar.avif"
                    alt=""
                    width={30}
                    height={30}
                  />
                </span>
                <span className="text-sm md:text-base font-bold">Edward Tompson</span>
              </a>
            </div>
            
            <div id="nav" className="w-full px-6">
                {
                  menuItems.map((item, index) => (
                    <SideBarComponent 
                      path={item.path}
                      icon={item.icon}
                      title={item.title}
                      subTitle={item.subTitle}
                      key={index}
                    />
                  ))  
                }
              
            </div>
          </div>
  )
}