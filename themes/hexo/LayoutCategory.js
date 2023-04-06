import BlogPostListScroll from './components/BlogPostListScroll'
import BlogPostListPage from './components/BlogPostListPage'
import LayoutBase from './LayoutBase'
import BLOG from '@/blog.config'

export const LayoutCategory = props => {
  const { category } = props
  return <LayoutBase {...props} className='mt-12'>
        <div className="cursor-pointer text-lg px-5 py-1 mb-2 font-light hover:text-green-600 dark:hover:text-green-500 transform dark:text-white">
            <i className="mr-1 far fa-folder-open" />
            {category}
        </div>
        {BLOG.POST_LIST_STYLE === 'page' ? <BlogPostListPage {...props} /> : <BlogPostListScroll {...props} />}
    </LayoutBase>
}
