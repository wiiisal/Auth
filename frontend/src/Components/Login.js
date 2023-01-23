import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Login() {
  return (
    <div>
        <h1>How kifech tjib component ta7t video  </h1>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.i-diamants.com/thmb/carre/512/medias_upload/moxie/bijoux/solitaire-classique-diamant-or-4-griffes-classic.jpg"
          alt="First bague"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.benjannet.com/2722-home_default/bague-mini-modele-pretty-woman.jpg"
          alt="Second bague"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.joaillerie-larous.com.tn/33649-large_default/bague-153993.jpg"
          alt="Third bague"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
