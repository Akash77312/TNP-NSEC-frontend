import React, { useState, useEffect } from 'react';

function CutOff() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [rotation, setRotation] = useState(0);

  const imageData = {
    link: 'https://cache.careers360.mobi/media/articles/uploads/froala_editor/images/2024/8/27/1724749026492.png',
    name: 'Cut-Off Image',
    uploadDate: 'June 1, 2025',
  };

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  const handleImageLoad = () => setIsLoading(false);
  const zoomIn = () => zoomLevel < 200 && setZoomLevel(zoomLevel + 25);
  const zoomOut = () => zoomLevel > 50 && setZoomLevel(zoomLevel - 25);
  const rotate = () => setRotation((rotation + 90) % 360);
  const resetView = () => {
    setZoomLevel(100);
    setRotation(0);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageData.link;
    link.download = imageData.name + '.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  }, [isFullscreen]);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#111827',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '1rem',
  };

  const boxStyle = {
    backgroundColor: '#1f2937',
    borderRadius: '0.5rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    width: isFullscreen ? '100%' : '768px',
    height: isFullscreen ? '100%' : 'auto',
    position: isFullscreen ? 'fixed' : 'relative',
    top: isFullscreen ? 0 : 'auto',
    left: isFullscreen ? 0 : 'auto',
    zIndex: isFullscreen ? 9999 : 'auto',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle = {
    padding: '1rem',
    borderBottom: '1px solid #374151',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const controlsStyle = {
    display: 'flex',
    gap: '0.5rem',
  };

  const buttonStyle = {
    padding: '0.5rem 0.75rem',
    backgroundColor: '#4b5563',
    border: 'none',
    borderRadius: '0.25rem',
    color: 'white',
    cursor: 'pointer',
  };

  const imageWrapperStyle = {
    flex: 1,
    position: 'relative',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  };

  const footerStyle = {
    padding: '1rem',
    borderTop: '1px solid #374151',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <header style={headerStyle}>
          <div>
            <h2 style={{ margin: 0 }}>{imageData.name}</h2>
            <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Uploaded: {imageData.uploadDate}</p>
          </div>
          <div style={controlsStyle}>
            <button style={{ ...buttonStyle, backgroundColor: '#2563eb' }} onClick={handleDownload}>
              💾 Save
            </button>
            <button style={buttonStyle} onClick={toggleFullscreen}>
              {isFullscreen ? '🗕 Exit' : '🗖 Fullscreen'}
            </button>
          </div>
        </header>

        <div style={imageWrapperStyle}>
          {isLoading && (
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1f2937'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid transparent',
                borderTop: '4px solid #3b82f6',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            </div>
          )}
          <img
            src={imageData.link}
            alt={imageData.name}
            onLoad={handleImageLoad}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              transform: `rotate(${rotation}deg) scale(${zoomLevel / 100})`,
              transition: 'transform 0.2s ease',
            }}
          />
        </div>

        <div style={footerStyle}>
          <div style={controlsStyle}>
            <button style={buttonStyle} onClick={zoomIn}>➕</button>
            <span>{zoomLevel}%</span>
            <button style={buttonStyle} onClick={zoomOut}>➖</button>
            <button style={buttonStyle} onClick={rotate}>🔄</button>
            <button style={buttonStyle} onClick={resetView}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CutOff;
