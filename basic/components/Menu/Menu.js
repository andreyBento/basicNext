import * as React from "react";
import menu from './Menu.module.scss';
import Link from "next/link";

class Menu extends React.Component {

    render() {
        return <aside className={menu.aside}>
            <ul className={menu.userNav}>
                <li>
                    <p>
                        <Link href="/home">Home</Link>
                    </p>
                </li>
                <li>
                    <p>
                        <a>Notificações</a>
                    </p>
                </li>
            </ul>
            <ul className={menu.mainNav}>
                <li>
                    <p>Projetos</p>
                </li>
            </ul>
        </aside>
    }

}

export default Menu;