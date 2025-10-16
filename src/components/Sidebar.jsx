const Sidebar = ({ children, width = 250 }) => {
  return (
    <div
      style={{ width }}
      className="fixed top-0 bottom-0 left-0 z-40 bg-[#292929] text-white"
    >
      {children}
    </div>
  );
};

export default Sidebar;