import PropTypes from 'prop-types';

export const ShowText = ({ word, from, to }) => {
  return (
    <div>
      <span>
          {
              `Translate ${ word } from ${ from } to ${ to }`
          }
      </span>
    </div>
  )
}

ShowText.propTypes = {
    word: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string
}