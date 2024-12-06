import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Photos({ photos }) {
  const [displayPhotos, setDisplayPhotos] = useState([]);

  useEffect(() => {
    if (photos && photos.length > 0) {
      setDisplayPhotos(photos.slice(0, 8)); // Display up to 8 photos
    } else {
      setDisplayPhotos([]);
    }
  }, [photos]); // Re-run when the photos prop changes

  if (displayPhotos.length > 0) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // Two images per row
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {displayPhotos.map((photo, index) => (
          <motion.div
            key={`${photo.src.landscape}-${index}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <img
              src={photo.src.landscape}
              alt={photo.alt || "Image"}
              style={{
                width: "100%", // Ensure image fits within its container
                height: "auto",
                maxWidth: "220px",
                borderRadius: "5px",
              }}
            />
          </motion.div>
        ))}
      </div>
    );
  } else {
    return (
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          color: "gray",
          marginTop: "20px",
        }}
      >
        No photos available.
      </p>
    );
  }
}
