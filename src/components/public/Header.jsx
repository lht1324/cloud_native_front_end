import './Header.css';
import MenuButton from "./MenuButton";
import Divider from "./Divider";

function Header(
    {
        onClickMenuList,
        onClickMap
    }
) {
    return (
        <div className="header_wrapper">
            <div className="title">
                <h1>ㅇㅈㅁ?</h1>
            </div>
            <Divider/>
            <div className="menu_list">
                <MenuButton text="메뉴1" onClick={onClickMenuList}></MenuButton>
                <MenuButton text="메뉴2" onClick={onClickMenuList}></MenuButton>
                <MenuButton text="메뉴3" onClick={onClickMenuList}></MenuButton>
                <MenuButton text="메뉴4" onClick={onClickMenuList}></MenuButton>
                <MenuButton text="메뉴5" onClick={onClickMenuList}></MenuButton>
            </div>
            <Divider/>
        </div>
    )
}

export default Header;