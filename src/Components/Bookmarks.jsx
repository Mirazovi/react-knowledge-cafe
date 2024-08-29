import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks,times}) => {
    return (
        <div className="w-1/3 ">
             <div className='bg-gray-200 text-center rounded-xl my-3'>
                <h1 className='text-2xl font-bold p-4'>Spent Time on read : {times}</h1>
            </div>
            <div className='bg-gray-200 rounded-xl py-4'>
            <h1 className="text-center text-2xl py-2">Bookmarked Blogs :{bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx}
                     bookmark={bookmark}
                     ></Bookmark>)
                }
            </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.object,
    times:PropTypes.number
}
export default Bookmarks;