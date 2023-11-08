import React from "react";
import Footer from "./Footer";

const YouTubeVideos = () => {
  const questions = [
    {
      answer: "A kind gesture can reach a wound that only compassion can heal.",
      author: "Steve Maraboli",
    },
    {
      answer: "The meaning of life is to find your gift. The purpose of life is to give it away.",
      author: "Pablo Picasso",
    },
    {
      answer: "Charity is not about 'giving to', charity is about 'being with'.",
      author: "Mother Teresa",
    },
    {
      answer: "Kindness is a language that the deaf can hear and the blind can see",
      author: "Mark Twain",
    },
  ];

  const videoSources = [
    "https://www.youtube.com/embed/jQeKEGrDoQ4?si=qK8IBJVZj7hDQGV-",
    "https://www.youtube.com/embed/0suVUkppxNs?si=l87B05pjNmcyC4QA",
    "https://www.youtube.com/embed/4PmCimD1MMc?si=QzHyYDt5ftC35VJK",
    "https://www.youtube.com/embed/3APqpb-TWi0?si=5I98wPX0M1U8nhQ4",
  ];


  return (
    <>
    <div className=" py-10 ml-44 mt-12 bg-gray-100 shadow-xl w-4/5" style={{ background: 'linear-gradient(-70deg, #027884, transparent 50%)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ml-12 ">
          {questions.map((question, index) => (
            <div className="question-container" key={index}>
              <div className="question">
                <p className="question-answer font-semibold text-black text-lg">{question.answer}</p>
                <cite className="question-author text-black">- {question.author}</cite>
              </div>
              <div className="video-container">
                <iframe
                  width="60%"
                  height="280"
                  src={videoSources[index]}
                  title={question.question}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default YouTubeVideos;
