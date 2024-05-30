export default function HeroSection() {
    return (
    <section id="HeroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hello, I am Satyaki Roy Chowdhury</p>
                <h1 className="hero--section--title">
                    <span className="hero-section-title-color"> An AI Enthusiast</span>{" "}
                </h1>
                <p className="hero--section-description"> Currently pursuing MS in Electrical and Computer Engineering at <a 
                href="https://ece.osu.edu" style={{textDecoration:'none'}}>The Ohio State University</a>.</p>
                <p className="hero--section-description">Previously at <a href="https://www.tcs.com" style={{textDecoration:'none'}}>Tata Consultancy Services</a> and <a href="https://www.hp.com/us-en/hp-information.html" style={{textDecoration:'none'}}>HP Inc.</a></p>
            </div>
        </div>
        <div className="hero-section-image">
            <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
    </section>
    );
}
