import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link className="link" to="/">
                    <li>Home</li>
                </Link>
                <li>
                    Leadership
                    <ul className="subnav-links">
                        <Link className="link" to="/exec">
                            <li>Executive Team</li>
                        </Link>
                        <Link className="link" to="/past-exec">
                            <li>Past Executive Cabinests</li>
                        </Link>
                        <Link className="link" to="advisers">
                            <li>Advisers</li>
                        </Link>
                    </ul>
                </li>
                <li>
                    Events
                    <ul className="subnav-links">
                        <Link className="link" to="/conference2020">
                            <li>Blockchain Conference 2020</li>
                        </Link>
                        <Link className="link" to="/blockathon2019">
                            <li>Blockathon Hackathon 2019</li>
                        </Link>
                        <Link className="link" to="/conference2019">
                            <li>Blockchain Conference 2019</li>
                        </Link>
                    </ul>
                </li>
                <li>
                    Resources
                    <ul className="subnav-links">
                        <Link className="link" to="/media">
                            <li>Media</li>
                        </Link>
                        <Link className="link" to="/workshops">
                            <li>Workshops</li>
                        </Link>
                        <Link className="link" to="/online-learning">
                            <li>Online Learning</li>
                        </Link>
                    </ul>
                </li>
                <li>
                    Contact
                    <ul className="subnav-links">
                        <Link className="link" to="/sponsor">
                            <li>Sponsors</li>
                        </Link>
                        <Link className="link" to="/partner">
                            <li>Partners</li>
                        </Link>
                        <Link className="link" to="/register">
                            <li>Join MUBC</li>
                        </Link>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav