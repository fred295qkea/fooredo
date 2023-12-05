export default function Frontpage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-center mb-16">WELCOME TO FOO FEST!</h1>
      <div>
        <button className="bg-blue-500 p-2 mx-4">PROGRAM</button>
        <button className="bg-blue-500 p-2 mx-4">MAP</button>
      </div>
    </div>
  );
}
