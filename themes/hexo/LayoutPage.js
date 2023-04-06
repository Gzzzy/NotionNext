import BlogPostListPage from './components/BlogPostListPage'
import LayoutBase from './LayoutBase'

export const LayoutPage = (props) => {
  return <LayoutBase {...props} className='mt-12'>
      <BlogPostListPage {...props}/>
  </LayoutBase>
}
