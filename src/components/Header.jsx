import React,{useState,useEffect} from "react"
import {Link,useLocation} from "react-router-dom"

export default function Header(){
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollpos]);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
      setPrevScrollpos(currentScrollPos);
      setVisible(visible);
    };

    const [active,setActive] = useState(false);
    function handleActive(){
        setActive(prevValue => !prevValue);
    }

    const [activeSubmenu,setActiveSubmenu] = useState(false);
    function handleSubmenu(){
        setActiveSubmenu(prevValue => !prevValue);
    }

    useEffect(() => {
        return () => {
          setActive(false);
          setActiveSubmenu(false);
        };
      }, [location]);

    return (
        <header className={visible ? "header--visible" : "header--hidden"}>
            <nav>
                <div className="nav-logo">
                    <div className="hamburger" onClick={handleActive}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>
                    <Link to="/">
                        <img src="/website-logo.jpg" alt="" />
                    </Link>
                </div>
                <div className={active ? "nav-ul-helper active" : "nav-ul-helper"}>
                    <div className="nav-ul-close" onClick={handleActive}>
                        <ion-icon name="close-outline" className="nav-icon"></ion-icon>
                    </div>
                    <ul>
                        <li>
                            <a className="main-menu" onClick={handleSubmenu}>Watches <ion-icon name="chevron-down-outline"></ion-icon></a>  
                            <ul className={activeSubmenu ? "submenu show" : "submenu"}>
                                <li>
                                    <Link to="/rolex">Rolex</Link>
                                </li>
                                <li>
                                    <Link to="/patek">Patek Philippe</Link>
                                </li>
                                <li>
                                    <Link to="/omega">Omega</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}