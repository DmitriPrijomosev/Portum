import '../CSS/footer.css';

function Footer() {
	return (
    <div className="footer">
      <div className="_container footer_container">
        <div className="footer_column">
          <div className="footer_column_header">
            <p>
              ÖÖPÄEVARINGNE DISPETŠER 
            </p>
            <p>LAHKUNU TRANSPORT SURNUKUURI</p>
          </div>
          <div className="footer_column_phone">
            <a href="tel:+37259180009">+372 5918 0009</a>
          </div>
        </div>
        <div className="footer_column">
          <div className="footer_column_header">
            <p>Kontaktandmed</p>
          </div>
          <div className="footel_column_text">
            <p>Matusebüroo portum</p>
            <p>männiku tee 104 kontor 444, tallinn</p>
            <a href="mailto:info@portum.ee">info@portum</a>
          </div>
        </div>
        <div className="footer_column">
          <div className="footer_column_header">
            <p>Lahtiolekuajad</p>
          </div>
          <div className="footel_column_text">
            <p>
              E - R 9.00-18.00<br></br>L - P 10.00-16.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;