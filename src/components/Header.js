import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title, onToggleAdd, showAdd}) => {
    
    return (
        <header className = "header">
            <h1>{title}</h1>
            <Button 
            color = {showAdd ? "red" : "green"}
            text={showAdd ? "Close" : "Add" }
            onClick = {onToggleAdd}/>
        </header>
    )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header



// CSS STYLE IN JSX
// const headingStyle = {
//     color: "red", backgroundColor:"black"
// }







