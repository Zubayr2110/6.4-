import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
        <nav>
            <div className="nav_list">
                <img src="/src/assets/logo.svg" alt="img" className="nav_list-logo" />
                <div className="nav_list-item">
                    <button className="nav_list-item-button"><img src="/src/assets/menu.svg" alt="img"/>Каталог</button>
                    <form className="formc">
                        <input type="search" id="srchinp" placeholder="Найти товар" />
                        <button className="srchbtn"><img src="/src/assets/search.svg" alt="img"/></button>
                    </form>
                </div>
            </div>
            <div className="nav_list1">
                <div className="nav_list1-menu">
                    <img src="/src/assets/Frame 211.svg" alt="" />
                    <p className="nav_list1-menu-text">Избранное</p>
                </div>
                <div className="nav_list1-menu1">
                    <img src="/src/assets/Frame 211 (1).svg" alt="" />
                    <p className="nav_list1-menu-text">Заказы</p>
                </div>
                <div className="nav_list1-menu2">
                    <img src="/src/assets/shopping-cart.svg" alt="" />
                    {/* <p className="shopcart"></p> */}
                    <p className="nav_list1-menu-text">Корзина</p>
                </div>
                <div className="nav_list1-usermenu">
                    <img src="/src/assets/avatar.svg" alt="img" class="avatarimg" />
                    <p className="nav_list1-usermenu-text">Zubayr</p>
                    <img src="/src/assets/chevron-down.svg" alt="img" className="chevron" />
                </div>
            </div>
        </nav>
    </header>
  )
}
