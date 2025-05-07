import React, { useState } from "react";
import "./GraduationProject.css";
import YoloDetection1 from "../assets/Images/YoloDetection1.jpg";
import YoloDetection2 from "../assets/Images/YoloDetection2.jpg";
import SystemArchitecture from "../assets/Images/System Architecture.png";
import Mapping1 from "../assets/Images/Mapping1.jpg";
import Mapping2 from "../assets/Images/Mapping2.jpg";
import Results1 from "../assets/Images/Parking_Space7_result.jpg";
import Results2 from "../assets/Images/Parking_Space13_result.jpg";

const images = [
  // Replace these with your actual image paths
  [
    {
      src: YoloDetection1,
      alt: "Project Aim Image 1",
      caption: "Project Aim – Example 1",
    },
    {
      src: YoloDetection2,
      alt: "Project Aim Image 2",
      caption: "Project Aim – Example 2",
    },
  ],
  [
    {
      src: YoloDetection1,
      alt: "YOLO Model Image 1",
      caption: "YOLO Detection – Example 1",
    },
    {
      src: YoloDetection2,
      alt: "YOLO Model Image 2",
      caption: "YOLO Detection – Example 2",
    },
  ],
  [
    {
      src: Mapping1,
      alt: "Mapping Technique Image 1",
      caption: "Mapping – Example 1",
    },
    {
      src: Mapping2,
      alt: "Mapping Technique Image 2",
      caption: "Mapping – Example 2",
    },
  ],
  [
    { src: Results1, alt: "Results Image 1", caption: "Results – Example 1" },
    { src: Results2, alt: "Results Image 2", caption: "Results – Example 2" },
  ],
];

const GraduationProject = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="graduation-section">
            <h1>🎯 Project Aim</h1>
            <div className="project-overview">
              <p>
                The goal of this project was to create a smart system that
                detects occupancy in parking lots using live camera feeds. We
                wanted to reduce the time drivers spend searching for parking
                and make better use of available space. Our solution uses
                computer vision to automatically detect cars and maps it to
                specific parking spots in a parking lot and present them to
                users in real time. The project is an industrial project that
                was done in collaboration with "German University in Cairo" and
                "SEITech Solutions"
              </p>
            </div>
            <div className="image-grid-aim">
              <div className="overview-image-container">
                <img src={SystemArchitecture} alt="System Architecture" />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="graduation-section">
            <h1>🧠 YOLO Model</h1>
            <div className="project-overview">
              <p>
                To detect cars accurately in real-time, we used the YOLO (You
                Only Look Once) model, a fast and efficient object detection
                system. YOLO processes the camera feed in one go, instantly
                identifying which spaces are occupied by vehicles. This allowed
                us to quickly mark spots as taken or free, even in large or
                crowded parking areas.
              </p>
            </div>
            <div className="image-grid">
              <div className="image-container">
                <img src={images[1][0].src} alt={images[1][0].alt} />
                <p>{images[1][0].caption}</p>
              </div>
              <div className="image-container">
                <img src={images[1][1].src} alt={images[1][1].alt} />
                <p>{images[1][1].caption}</p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="graduation-section">
            <h1>🗺️ Mapping Technique</h1>
            <div className="project-overview">
              <p>
                Once cars are detected, we map their positions to specific
                parking slots in the lot. This is done by defining a custom
                layout of the parking area and assigning unique IDs to each
                spot. When YOLO detects a vehicle, we check if its location
                overlaps with a parking zone, and mark it as occupied if there's
                a match.
              </p>
            </div>
            <div className="image-grid">
              <div className="image-container">
                <img src={images[2][0].src} alt={images[2][0].alt} />
                <p>{images[2][0].caption}</p>
              </div>
              <div className="image-container">
                <img src={images[2][1].src} alt={images[2][1].alt} />
                <p>{images[2][1].caption}</p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="graduation-section">
            <h1>📊 Results</h1>
            <div className="project-overview">
              <p>
                Our system achieved high accuracy in identifying free and
                occupied spots during both daytime and nighttime tests. It
                successfully handled different angles and lighting conditions.
                The final product was able to provide real-time updates on
                parking availability, making it practical for integration into
                smart city infrastructure or mobile applications. You can view
                demo video of the full system using this link{" "}
                <a href="https://drive.google.com/drive/folders/1or5PGoynkLNbcVMc4QcX1aJ4_LBmzFn2?usp=sharing">
                  here
                </a>
              </p>
            </div>
            <div className="image-grid">
              <div className="image-container">
                <img src={images[3][0].src} alt={images[3][0].alt} />
                <p>{images[3][0].caption}</p>
              </div>
              <div className="image-container">
                <img src={images[3][1].src} alt={images[3][1].alt} />
                <p>{images[3][1].caption}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="graduation-container">
      <button className="back-button" onClick={onBack}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="graduation-content">
        {renderContent()}
        <div className="pagination-controls">
          <button
            className="pagination-button"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <span className="page-indicator">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraduationProject;
