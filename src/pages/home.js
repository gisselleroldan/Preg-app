import React, { Component } from 'react'
import FindFruit from '../components/FindFruit'
import Books from '../components/Books'
import {connect} from 'react-redux'
import '../index.css'

export class home extends Component {

    render() {
        return (
            <div>
                
		{/* <!-- Wrapper --> */}
			<div id="wrapper">

				{/* <!-- Header --> */}
					<header id="header" className="alt">
						<span className="logo"><img style={{width:"100px"}} src="assets/images/preg-icon1.png" alt="" /></span>
						<h1>Preggie</h1>
						<p>A way to connect with your baby's growth every week<br /></p>
					</header>

				{/* <!-- Nav --> */}
					<nav id="nav">
						<ul>
							<li><a href="#intro" className="active">How it Works</a></li>
							<li><a href="#first">Find Your Fruit</a></li>
							<li><a href="#second">Book Recommedations</a></li>
							<li><a href="#cta">About Us</a></li>
						</ul>
					</nav>

				{/* <!-- Main --> */}
					<div id="main">

						{/* <!-- How it works --> */}
							<section id="intro" className="main special">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<h2>How it works</h2>
										</header>
										<p>Enter in your due date. Once we have the due date, you will be able to see how big your baby is relative to a fruit or vegetable. It is remarkable to know that babies at 4 weeks start off the size of a poppy seed and by week 40 they are as big as a watermelon! Pregnancy is an amazing experience and we hope you enjoy using this app. </p>
									</div>
								</div>
							</section>

						{/* <!-- Find Your Fruit --> */}
							<section id="first" className="main special">
								<header className="major">
									<h2>Find Your Fruit</h2>
								</header>
                                <div className=""></div>
								<ul className="features">
									<li>
                                        {/* <Container>
                                            <Row className="justify-content-center" >
                                                <Col xs={6} md={4}>
                                                    <Image style={{width: "100px"}}src="./assets/images/blueberry1.png" roundedCircle />
                                                </Col>
                                            </Row>
                                        </Container> */}
									    <FindFruit data={this.props.weeklyData} />
									</li>
								</ul>
								{/* <footer className="major">
									<ul className="actions special">
										<li><a href="generic.html" className="button">Learn More</a></li>
									</ul>
								</footer> */}
							</section>

						{/* <!-- Book recommendations --> */}
							<section id="second" className="main special">
								<header className="major">
									<h2>Book recommendations</h2>
									<p>Some pregnancy nutrition book options:</p>
								</header>
								<ul className="statistics">

                                    
									{/* <li className="style1">
										<span className="icon solid fa-code-branch"></span>
										<strong>5,120</strong> Etiam
									</li>
									<li className="style2">
										<span className="icon fa-folder-open"></span>
										<strong>8,192</strong> Magna
									</li>
									<li className="style3">
										<span className="icon solid fa-signal"></span>
										<strong>2,048</strong> Tempus
									</li>
									<li className="style4">
										<span className="icon solid fa-laptop"></span>
										<strong>4,096</strong> Aliquam
									</li>
									<li className="style5">
										<span className="icon fa-gem"></span>
										<strong>1,024</strong> Nullam
									</li> */}
                                    <Books/>
								</ul>
								{/* <footer className="major">
									<ul className="actions special">
										<li><a href="generic.html" className="button">Learn More</a></li>
									</ul>
								</footer> */}
							</section>

						{/* <!-- About US --> */}
							<section id="cta" className="main special">
								<header className="major">
									<h2>About Us</h2>
									<p>This app was made by Gisselle Roldan, a react.js student</p>
								</header>
								{/* <footer className="major"> */}
									{/* <ul className="actions special">
										<li><a href="generic.html" className="button">Learn More</a></li>
									</ul>
								</footer> */}
							</section>

					</div>

				{/* <!-- Footer --> */}
					<footer id="footer">
						{/* <!-- <section>
							<h2>Aliquam sed mauris</h2>
							<p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
							<ul className="actions">
								<li><a href="generic.html" className="button">Learn More</a></li>
							</ul>
						</section> --> */}
						<section>
							<h2>Contact Us</h2>
							<dl className="alt">
								<dt>Github</dt>
								<dd><a href="https://github.com/gisselleroldan">https://github.com/gisselleroldan</a></dd>
								<dt>Email</dt>
								<dd><a href="#">gisselle.roldan@outlook.com</a></dd>
							</dl>
							<ul className="icons">
								<li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
							</ul>
						</section>
						<p className="copyright">&copy; Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
					</footer>

			</div>

		{/* <!-- Scripts --> */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weeklyData: state.weeklyData
    }
}


export default connect(mapStateToProps, null)(home)
