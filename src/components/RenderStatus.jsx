const RenderStatus = ({status, size, styles}) => {
  const colors = {
    active: "#6ABF2F",
    available: "#6ABF2F",
    passed: "#6ABF2F",
    Passed: "#6ABF2F",
    accepted: "#6ABF2F",
    approved: "#6ABF2F",
    running: "#6ABF2F",
    inactive: "#AA3C4B",
    success: "#6ABF2F",
    sent: "#6ABF2F",
    upcoming: "#F9D32C",  
    Upcoming: "#F9D32C",  
    pending: "#F9D32C",  
    "under-review": "#F9D32C",  
    "in-progress": "#F9D32C",  
    "not-paid": "#F9D32C",
    due: "#AA3C4B",
    expired: "#AA3C4B",
    error: "#AA3C4B",
    failed: "#AA3C4B",
    Failed: "#AA3C4B",
    finished: "#AA3C4B",
    terminated: "#AA3C4B",
    disabled: "#333",
  };

  const getBackgroundColor = (hexColor) => {
    return `${hexColor}18`;
  };

  const getTextColor = (status) => {
    if (status === "upcoming" || status === "under-review" || status === "pending" || status === "not-paid") {
      return "#b1a900";
    }
    return colors[status];
  };

  return (
    <>
      <span style={{ 
        backgroundColor: getBackgroundColor(colors[status]),
        color: getTextColor(status),
        padding: "5px 10px", 
        borderRadius: "5px", 
        textTransform: "uppercase", 
        fontSize: size ? `${size}px` : "10px",
        fontWeight: "600",
        ...styles 
      }}
      >
        {status}
      </span>
    </>
  );
};

export default RenderStatus;