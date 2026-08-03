export default function Header() {
  return (
    <header
      className="
      flex
      h-20
      items-center
      justify-between
      border-b
      bg-white
      px-8
      "
    >
      <h1 className="text-xl font-bold text-slate-900">Welcome Back 👋</h1>

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <div className="text-right">
          <p className="font-semibold">User Name</p>

          <p className="text-sm text-slate-500">Student</p>
        </div>

        <div
          className="
          h-10
          w-10
          rounded-full
          bg-blue-600
          "
        />
      </div>
    </header>
  );
}
