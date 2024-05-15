
import React from 'react';
import logoImage from '/Imagenes/logo.jpeg'; // Ruta ajustada
import './Header.css';

// Función Logo que renderiza la imagen del logo
function Logo() {
  return <img src={logoImage} alt="Logo" style={{ height: '50px' }} />;
}

// Nueva función para el botón de YouTube
function YouTubeButton() {
    const youtubeUrl = "https://www.youtube.com";  // Cambia esto por la URL de tu canal o video de YouTube
  
    return (
      <button onClick={() => window.open(youtubeUrl, '_blank')}>
        Visita nuestro YouTube
      </button>
    );
  }

// Función Header que utiliza la función Logo
export function Header() {
    return (
        <header className="header-container">
          <div className="header-logo-text">
            <Logo />
            <h1 className="header-h1">Header</h1>
          </div>
          <YouTubeButton />
        </header>
      );
    }





    /*
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
            <h1 style={{ margin: '0 20px' }}>Header</h1>
          </div>
          <YouTubeButton />
        </header>
      );
    }

*/

/*
  return (
    <header>
      <Logo />
      <h1>Mi empresa</h1>
      <YouTubeButton />
    </header>
  );
}
*/