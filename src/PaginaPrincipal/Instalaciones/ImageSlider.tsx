import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaDotCircle, FaRegCircle } from "react-icons/fa";


type ImageSliderProps = {
    imagesUrls: string[]
}

export function ImageSlider({ imagesUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imagesUrls.length - 1
            return index - 1
        })
    }

    function showNextImage() {
        setImageIndex(index => {
            if (index === imagesUrls.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div className="slider-container">
            <div className="images-slider-container">
                {imagesUrls.map(url => (
                    <img key={url} src={url} className="img-slider" style={{
                        translate: `${-100 * imageIndex}%`
                    }} />
                ))}
            </div>

            <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}>
                <FaArrowLeft />
            </button>
            <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}>
                <FaArrowRight />
            </button>
            <div style={{ position: "absolute", bottom: "-1.5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem" }}>
                {imagesUrls.map((_, index) => (
                    <button key={index} className="img-slider-dot-btn" onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? <FaDotCircle /> : <FaRegCircle />}
                    </button>
                ))}
            </div>
        </div>
    )

}