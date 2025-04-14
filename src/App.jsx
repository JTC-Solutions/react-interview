import {Assignment} from "./Assignment.jsx";

export const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8 rounded-lg bg-white shadow-md flex flex-col gap-3">
        <h1 className="text-center text-2xl font-bold uppercase text-blue-400">
          JTC React interview
        </h1>
        <div className="bg-gray-100 rounded-md p-4">
          <Assignment />
        </div>
        <div>
          TODO:
        </div>
      </div>
    </div>
  )
}

