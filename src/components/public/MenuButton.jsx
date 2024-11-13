import "./MenuButton.css"

function MenuButton({ text, onClick }) {
    return (
        <div className="menu_button_container" onClick={onClick}>
            <div className="menu_text">{text}</div>
        </div>
    )
}

export default MenuButton;