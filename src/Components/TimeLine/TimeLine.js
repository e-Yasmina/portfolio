import "./TimeLine.css";

const TimeLine = () => {

    const timelineTexts = [
        "text 01",
        "text 02",
        "text 03",
        "text 04",
        "text 05",
    ];
  return (
    <main>
      {timelineTexts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </main>
  );
};

export default TimeLine;