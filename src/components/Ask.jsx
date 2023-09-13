import PropTypes from 'prop-types';

export const Ask = ({ word, from, to }) => {
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

Ask.propTypes = {
    word: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string
}