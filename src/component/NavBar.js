import React from 'react';
import {Nav} from './style';
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
			<nav className="navbar navbar-expand-sm navrbar-light bg-light">
				<Nav>Caption<span style={{fontFamily:"Open Sans", color:"#555"}}>Cards</span></Nav>
                <div className="collapse navbar-collapse show ml-sm-5 justify-content-end">
					<ul className="navbar-nav">
						<li className="navbar-item pl-3">
							<Link to="/" className="nav-link text-secondary">
								<h5>Captions </h5>
							</Link>
						</li>
						
						<li className="navbar-item pl-3">
							<Link to="/tags" className="nav-link text-secondary">
								<h5>Tags</h5>
							</Link>
						</li>
					</ul>
				</div>
				
			</nav>
		);
}

  

export default NavBar
