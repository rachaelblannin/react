import PropTypes from 'prop-types';

function Search({ text, changeHandler }) {
    return (
        <input value={text} onChange={changeHandler}/>
    );
}

Search.propTypes = {
    text: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

export default Search;