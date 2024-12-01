
import "./css/timeline.css";

const MinimalTimeline = () => {
    const timelineItems = [
        {
            year: "2024",
            title: "Future Goals",
            description: "Looking ahead to new horizons and opportunities."
        },
        {
            year: "2023",
            title: "Key Achievement",
            description: "Major milestone reached in professional development."
        },
        {
            year: "2022",
            title: "New Beginning",
            description: "Started an exciting journey in tech."
        }
    ];

    return (
        <div className="container h-100 d-flex align-items-center justify-content-center overflow-auto">
            <div className="row justify-content-center w-100 py-5">
                <div className="col-lg-10">
                    {timelineItems.map((item, index) => (
                        <div
                            key={index}
                            className="d-flex mb-5"
                        >
                            {/* Year Column */}
                            <div className="year-column">
                                <span className="fs-4 fw-bold text-secondary">{item.year}</span>
                            </div>

                            {/* Timeline Line and Dot */}
                            <div className="timeline-line-container">
                                <div className="timeline-line" />
                                <div
                                    className="timeline-dot"
                                />
                            </div>

                            {/* Content */}
                            <div className="timeline-content">
                                <h3 className="mb-3 fw-bold">{item.title}</h3>
                                <p className="text-secondary mb-0 fs-5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



function App2() {
    return (
        <MinimalTimeline/>
    )
}

export default App2;