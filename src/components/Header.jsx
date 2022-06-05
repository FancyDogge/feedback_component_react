//тема для указания какого типа должна быть property
// import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyler = {
      backgroundColor: bgColor,
      color: textColor,
  }  

  return (
    <header style={headerStyler}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// способ устанавливать деволтные значения для properties компонента
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

//собсна назначение типа, который должен передаваться, можно добавить .isRequired
// Header.PropTypes = {
//     text: PropTypes.string
// }

export default Header