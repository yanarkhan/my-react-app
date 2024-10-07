const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props;
  return (
    <button
      class={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="bg-blue-600 flex justify-center min-h-screen items-center">
      <div className="flex gap-3">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
