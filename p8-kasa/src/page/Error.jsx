import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Error() {
  return (
    <div>
      <Header />
      <body>
        <section className="error">
          <h1 className="error-title">404</h1>
          <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
          <a href="/"><p className="error-nav">Retourner sur la page d’accueil</p></a>
        </section>
      </body>
      <Footer />
    </div>
  );
}

export default Error;