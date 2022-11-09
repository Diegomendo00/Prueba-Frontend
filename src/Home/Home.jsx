import React from "react";
import "./Home.css";
import Inicio from "../Inicio/Inicio.jsx";
import bolsa from "../images/bolsa.png";
import nap from "../images/nap.png";
import puff from "../images/puff.png";
import sombrilla from "../images/sombrilla.png";
import parag from "../images/rain_azul.png";
import img_puff from "../images/puff_morado.jpg";
import bolsa_bio from "../images/bolsa-bio.jpg";
import nap_azul from "../images/nap_azul.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import escudo from "../images/escudo.png";
import qr from "../images/Qr.png";
import puffi from "../images/pufiFooter.png";
import face from "../images/facebook.png";
import insta from "../images/instagram.png";
import twitter from "../images/twiter.png";

export default function Home() {
  return (
    <div>
      <div className="inicio">
        <Inicio bolsa={bolsa} nap={nap} puff={puff} sombrilla={sombrilla} />
        <p>
          ESTÁR CÓMODO,
          <br /> NUNCA FUE TAN FÁCIL.
        </p>
        <button>SHOP</button>
        <div className="rad">
          <input type="radio" name="rad"></input>
          <input type="radio" name="rad"></input>
          <input type="radio" name="rad"></input>
        </div>
      </div>
      <div className="pagina">
        <div className="primero">
          <div className="shop_somb">
            <button>SHOP</button>
          </div>
          <div className="paraguas">
            <div className="cont_parag">
              <img src={parag} width="200px" alt="parag" />
              <div>
                <h3>Pufi RAIN</h3>
              </div>
              <span>____</span>
              <p>
                Descipción del producto. Este es <br /> un texto simulado
              </p>
            </div>
            <h5>VER MAS</h5>
          </div>
        </div>
        <div className="segundo">
          <div className="puff">
            <div className="cont_puff">
              <img src={img_puff} alt="mora" width="200px"></img>
              <div>
                <h3>Pufi PUFF</h3>
              </div>
              <span>____</span>
              <p>
                Descipción del producto. Este es <br /> un texto simulado
              </p>
            </div>
            <h5>MAS INFO</h5>
          </div>
          <div className="shop_puff"></div>
        </div>
        <div className="tercero">
          <div className="shop_bolsa"></div>
          <div className="bolsa">
            <div className="cont_bolsa">
              <img src={bolsa_bio} width="200px" alt="bio" />
              <div>
                <h3>Pufi CART</h3>
              </div>
              <span>____</span>
              <p>
                Descipción del producto. Este es <br /> un texto simulado
              </p>
            </div>
            <h5>VER MAS</h5>
          </div>
        </div>
        <div className="cuarto">
          <div className="nap">
            <div className="cont_nap">
              <img src={nap_azul} alt="napi" width="200px"></img>
              <div>
                <h3>Pufi NAP</h3>
              </div>
              <span>____</span>
              <p>
                Descipción del producto. Este es <br /> un texto simulado
              </p>
            </div>
            <h5>MAS INFO</h5>
          </div>
          <div className="shop_nap"></div>
        </div>
      </div>
      <div className="cont_insta">
        <div className="insta">
          <p>INSTAGRAM</p>
          <span>#ESPUFI</span>
        </div>
        <div className="imagenes">
          <img src={img1} width="200px" height="200px" alt="relax" />
          <img src={img2} width="200px" height="200px" alt="puffi" />
          <img src={img3} width="200px" height="200px" alt="nap" />
          <img src={img4} width="200px" height="200px" alt="niños" />
          <img src={img5} width="200px" height="200px" alt="cart" />
          <img src={img6} width="200px" height="200px" alt="meet" />
        </div>
        <div className="insta">
          <p>NEWSLETTER</p>
          <span>SUSCRIBITE</span>
        </div>
        <span className="noved">y enterate de todas las novedades</span>
        <div className="formulario">
          <form action="https://formspree.io/f/{form_id}" method="post">
            <label for="email"></label>
            <input
              name="Email"
              id="email"
              type="email"
              placeholder="Ingresa tu email"
              required
            />
            <button type="submit">🡲</button>
          </form>
        </div>
        <footer className="footer">
          <div className="cont_footer">
            <div className="puffi">
              <img src={puffi} alt="puffi" />
            </div>
            <div className="productos">
              <h5>PUFI RAIN</h5>
              <h5>PUFI PUFF</h5>
              <h5>PUFI CART</h5>
              <h5>PUFI NAP</h5>
            </div>
            <div className="info">
              <h5>CONTACTO</h5>
              <h5>AYUDA</h5>
              <h5>CÓMO COMPRAR</h5>
              <h5>TÉRMINOS &#38; CONDICIONES</h5>
            </div>
            <div className="compra">
              <div>
                <h5>COMPRA 100&#37; SEGURA</h5>
              </div>
              <div className="logi">
                <img src={escudo} width="40px" height="50px" alt="escu" />
                <img src={qr} width="40px" height="50px" alt="qr" />
                <span className="garantia">COMPRA CON LA GARANTÍA DE PUFI</span>
              </div>
            </div>
            <div className="redes">
              <span>SEGUINOS EN</span>
              <img src={face} width="40px" height="30px" alt="face" />
              <img src={twitter} width="40px" height="30px" alt="twit" />
              <img src={insta} width="40px" height="30px" alt="insta" />
            </div>
          </div>
          <div className="derechos">
            PUFI Copyright 2017 - Todo los derechos reservados
          </div>
        </footer>
      </div>
    </div>
  );
}
