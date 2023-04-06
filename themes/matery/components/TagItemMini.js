import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-block rounded-xl  hover:text-white duration-200
        mr-2 py-0.5 px-2 text-xs whitespace-nowrap text-white bg-green-600`}>

      <div className='font-light'>{selected && <i className='mr-1 fa-tags'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

    </Link>
  )
}

export default TagItemMini
