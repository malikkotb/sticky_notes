export default function SBIcon({ icon, text = "tooltip 💡", showTooltip }: any) {
  return (
    <div className="sidebar-icon group">
      {icon}
      {showTooltip && <span className="sidebar-tooltip group-hover:scale-100">{text}</span>}
    </div>
  );
}
