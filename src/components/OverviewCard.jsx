const OverviewCard = ({ title, desc, icon, bgColor }) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-5 py-4 sm:gap-4 ${bgColor}`}
    >
      <div className="text-2xl sm:text-3xl">{icon}</div>
      <div>
        <h2 className="text-2xl font-semibold text-[#2d2d2d]">{title}</h2>
        <p className="text-xs text-[#3d3d3d] sm:text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
