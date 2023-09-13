import PropTypes from 'prop-types';

export const Actions = ({ tries, showAfter, next, show }) => {
  return (
    <>
        {
            tries >= showAfter &&
            <div>
                <button type="button"
                    onClick={ () => show() }>
                    Ver respuesta
                </button>
                <button type="button"
                    onClick={ () => next() }>
                    Siguiente
                </button>
            </div>
        }
    </>
  )
}

Actions.propTypes = {
    tries: PropTypes.number,
    showAfter: PropTypes.number,
    next: PropTypes.func,
    show: PropTypes.func
}
