import React, { useState, useRef, useEffect } from 'react';
import '../styles/CameraCapture.css';

const CameraCapture = () => {
    const [stream, setStream] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    // Attach stream to video element when stream changes
    useEffect(() => {
        if (videoRef.current && stream) {
            try {
                videoRef.current.srcObject = stream;
            } catch (err) {
                // Fallback for older browsers
                videoRef.current.src = window.URL.createObjectURL(stream);
            }
        }
    }, [stream]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [stream]);

    const startCamera = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const constraints = {
                video: {
                    facingMode: 'user',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            };
            let mediaStream;
            try {
                mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
            } catch (err) {
                console.log('Trying with basic constraints...');
                mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            }
            setStream(mediaStream);
        } catch (err) {
            console.error('Camera error:', err);
            setError('Error accessing camera: ' + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
            if (videoRef.current) {
                videoRef.current.srcObject = null;
                videoRef.current.src = '';
            }
        }
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageDataUrl = canvas.toDataURL('image/jpeg');
            setImage(imageDataUrl);
        }
    };

    const downloadImage = () => {
        if (image) {
            const link = document.createElement('a');
            link.href = image;
            link.download = 'captured-image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="camera-container">
            <h2>Camera Capture</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="camera-controls">
                {!stream ? (
                    <button onClick={startCamera} className="btn primary" disabled={isLoading}>
                        {isLoading ? 'Starting Camera...' : 'Start Camera'}
                    </button>
                ) : (
                    <button onClick={stopCamera} className="btn secondary">
                        Stop Camera
                    </button>
                )}
                {stream && (
                    <button onClick={captureImage} className="btn primary">
                        Capture Image
                    </button>
                )}
                {image && (
                    <button onClick={downloadImage} className="btn secondary">
                        Download Image
                    </button>
                )}
            </div>
            <div className="camera-preview">
                {stream && (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="video-preview"
                    />
                )}
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                {image && (
                    <div className="captured-image">
                        <img src={image} alt="Captured" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CameraCapture; 