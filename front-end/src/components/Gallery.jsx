  
import React from "react";
import Footer from "./Footer";

const imageInfo = [
    {
      imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
      
    },
    {
      imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
      
    },
    {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
      {
        imageUrl: "https://tagree.de/wp-content/uploads/2021/12/Photo-by-Samson-Otieno-from-the-series-Life-in-Kibera-on-the-outskirts-of-Nairobi-1-@-Samson-Otieno.jpg",
        
      },
  
  

  ];
  

const galleryStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
  gridGap: "20px",
  width:"1500px",
  margin: "0 auto",
  
};

const itemStyles = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

function PhotoGalleryAK() {
    return (
        <div>
            <h1 className="text-black text-xl font-semibold py-10 text-center">PHOTO GALLERY</h1>
            
        <div className="photo-gallery bg-gray-100 p-12 shadow-xl" style={galleryStyles}>
          {imageInfo.map((image, index) => (
            <div key={index} className="photo-item" style={itemStyles}>
              <img
                src={image.imageUrl}
                alt={`Image ${index}`}
                className="max-w-full h-auto"
              />
              <p className="text-gray-700 text-sm mt-2">{image.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-24">
        {/* <Footer/> */}

        </div>
        </div>
      );}  
export default PhotoGalleryAK;
  
