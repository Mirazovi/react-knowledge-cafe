
import PropTypes from 'prop-types';
const Bookmark = ({ bookmark}) => {
    return (
        <div>
            <div className='bg-gray-300 rounded-xl m-4'>
                <h1 className='p-4 text-2xl my-2'>{bookmark.title}</h1>
            </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;