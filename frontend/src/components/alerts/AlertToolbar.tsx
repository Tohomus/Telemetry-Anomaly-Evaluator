function AlertToolbar() {
  return (
    <div className="mb-5 flex flex-wrap gap-4">

      <input
        type="text"
        placeholder="Search alerts..."
        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
      />

      <select className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
        <option>All Types</option>
        <option>Voltage</option>
        <option>Temperature</option>
        <option>Current</option>
      </select>

      <select className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
        <option>All Confidence</option>
        <option>90%+</option>
        <option>80%+</option>
      </select>

    </div>
  );
}

export default AlertToolbar;