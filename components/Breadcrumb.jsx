export default function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="list-reset flex">
        <li><span className="text-blue-600 font-medium">Home</span></li>
        <li><span className="mx-2">/</span></li>
        <li><span className="text-gray-500">Mortgage Calculator</span></li>
      </ol>
    </nav>
  );
}