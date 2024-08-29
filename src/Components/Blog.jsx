import PropTypes from 'prop-types';
const Blog = ({blog,handleBookmarksClick,handleTimeFixed}) => {
    const {cover,author_img,author,posted_date,reading_time,title,hashtags} = blog;
    return (
        <div>
            <img className='w-full rounded-xl' src={cover} alt="" />
            <div className='flex justify-between items-center py-2'>
                <div className='flex  items-center gap-4'>
                    <img className='w-[50px]' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div >
                <p className='text-xl flex gap-2 items-center'>{reading_time} min read<span onClick={()=>handleTimeFixed(reading_time)} className='text-2xl text-red-800'><MaterialSymbolsBookmark/></span></p>
                </div>
            </div>
            <h1 className='text-xl pb-2'>Title :{title}</h1>
            <p className='flex gap-2 text-xl py-2'>
            {
                hashtags.map((hash,idx) => <p key={idx}>#{hash}</p>)
            }
            </p>
            <button onClick={()=>handleBookmarksClick(blog)} className='underline text-violet-900 text-xl font-bold pb-2'>Mark As Red</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object,
    handleBookmarksClick:PropTypes.func,
    handleTimeFixed:PropTypes.func
}

export function MaterialSymbolsBookmark(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"></path></svg>
    )
  }
export default Blog;