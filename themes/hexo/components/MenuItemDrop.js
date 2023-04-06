import Link from 'next/link'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  if (!link || !link.show) {
    return null
  }

  return <div onMouseOver={() => changeShow(true)} onMouseOut={() => changeShow(false)} >

        {!hasSubMenu &&
            <Link
                href={link?.to}
                className="font-serif font-bold menu-link ml-2 mr-2 text-gray-600 dark:text-gray-200 no-underline tracking-widest pb-1 block">
                {link?.icon && <i className={link?.icon}/>} {link?.name}
                {hasSubMenu && <i className='px-2 fa fa-angle-down'></i>}
            </Link>}

        {hasSubMenu && <>
            <div className='cursor-pointer font-serif font-bold menu-link ml-2 mr-2 pl-2 text-gray-600 dark:text-gray-200 no-underline tracking-widest pb-1'>
                {link?.icon && <i className={link?.icon}/>} {link?.name}
                <i className={`px-2 pr-0 fa fa-angle-down duration-300  ${show ? 'rotate-180' : 'rotate-0'}`}></i>
            </div>
        </>}

        {/* 子菜单 */}
        {hasSubMenu && <ul style={{ backdropFilter: 'blur(3px)' }} className={`${show ? 'visible opacity-100 top-12' : 'invisible opacity-0 top-20'} mt-2 ml-2 drop-shadow-md overflow-hidden rounded-md bg-white transition-all duration-300 z-20 absolute block  `}>
            {link.subMenus.map(sLink => {
              return <li key={sLink.id} className='cursor-pointer hover:bg-gray-100 text-gray-900 hover:text-red-600 tracking-widest transition-all duration-200 dark:border-gray-800  py-1 pr-6 pl-2'>
                    <Link href={sLink.to}>
                    <span className='font-serif text-sm text-nowrap font-extralight'>{link?.icon && <i className={sLink?.icon} > &nbsp; </i>}{sLink.title}</span>
                    </Link>
                </li>
            })}
        </ul>}

    </div>
}
