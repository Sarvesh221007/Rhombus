// SectionHeader.jsx
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-blue-800">{title}</h2>
    {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
  </div>
);
export default SectionHeader;
