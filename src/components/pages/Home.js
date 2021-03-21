import React from "react";
import { Helmet } from "react-helmet";

import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import History from "../History";

function Home() {
  return (
    <>
      <Helmet>
        <title>New System Box </title>
      </Helmet>
      <HeroSection />
      <History
        titulo="QUIENES SOMOS"
        descripcion="NEW SYSTEM BOX es una empresa española dedicada a la fabricación de cajas rígidas especiales para transporte de determinados artículos que requieren una protección especial: mesas de sonido, iluminación y vídeo, instrumentos musicales, armas, equipos electrónicos (sonido, iluminación, vídeo, informática, etc), vestuario, equipos médicos, ...
       En NEW SYSTEM BOX llevamos más de 20 años fabricando una a una nuestras cajas, siempre a medida según el objeto a transportar, adecuándonos a las exigencias de nuestros clientes y siempre a partir de un presupuesto previo. Podemos fabricar cajas, maletines y baúles de todos los tamaños, adaptando su forma exterior y su protección interior a cualquier tipo de artículo.
       Nuestras cajas y baúles son productos de alta calidad y muy larga duración que, con un uso adecuado, duran “toda la vida”. Además, están garantizados por un periodo de dos años, durante los cuales, repararemos cualquier desperfecto siempre que éste sea debido a un defecto de fabricación."
      />
      <History
        titulo="CLIENTES"
        descripcion="Trabajamos para empresas y particulares de muy diversos sectores de actividad: desde empresas de iluminación y sonido hasta Compañías aéreas, pasando por Ministerios, Compañías artísticas de teatro, danza, etc., artistas y grupos musicales, cuadrillas taurinas…"
      />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
