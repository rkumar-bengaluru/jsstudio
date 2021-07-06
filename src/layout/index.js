// Dependencies
import React from 'react';
import './layout.css'

const Layout = props => {

	var socialMediaColors = {
		"facebook": "#3B5998",
		"twitter": "#55ACEE",
		"pinterest": "#cb2027",
		"instagram": "#125688",
		"linkedin": "#007bb5",
		"youtube": "#bb0000",
		"whatsapp": "#0fec2d",
	};
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row justify-content-left border-bottom m-5">
					Header
				</div>
				{props.children}
				<div className="row justify-content-left border-bottom m-5">
					<footer className="navbar navbar-expand bottom_footer">
						<ul className="navbar-nav align-items-end mr-auto">
							<li className="nav-item"> <a className="nav-link bottom_links" id="ad_link" href="/advertising"
								target="_blank">Advertising</a> </li>
							<li className="nav-item"> <a className="nav-link bottom_links" href='#'>Contact - +91-7847956039</a> </li>
						</ul>
						<ul className="navbar-nav align-items-end">
							<li></li>
							<a className="dropdown-item" href="/privacy" target="_blank">Privacy</a>
							<li></li>
							<a className="dropdown-item" href="/terms" target="_blank">Terms</a>
							<li></li>
							<a className="dropdown-item" href="/report" target="_blank">Report Bug</a>
							<li>
								<a href="https://www.linkedin.com/in/vlocal-shop-707736205/" >
									<span style={{ color: socialMediaColors.linkedin }}>
										<i className="fab fa-3x fa-linkedin-square"></i>&nbsp;&nbsp;
									</span>
								</a>
							</li>
						</ul>
					</footer>
				</div>
			</div>
		</React.Fragment>
	);
};


export default Layout;
