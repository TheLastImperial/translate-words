import PropTypes from 'prop-types'

export const Message = ( { msg } ) => {
  return (
    <>    
        {
            msg.length > 0 &&
            <div>
                <span>
                    { msg }
                </span>
            </div>
        }
    </>
  )
}

Message.propTypes = {
    msg: PropTypes.string
}
