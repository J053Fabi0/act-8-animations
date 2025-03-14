import { useSignal } from "@preact/signals";
import { JSX } from "preact/src/index.d.ts";

export default function Home() {
  const isFormSubmitted = useSignal(false);

  function handleSubmit(e: JSX.TargetedSubmitEvent<HTMLFormElement>) {
    isFormSubmitted.value = true;
    e.preventDefault();
  }

  return (
    <div class="px-4 py-8 mx-auto h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-5">Actividad 8</h1>

        <a
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform transform hover:rotate-6"
        >
          Regístrate ahora
        </a>

        <hr class="border-t-2 border-blue-700 my-8 w-full" />

        <h3 class="text-2xl font-bold mb-5">Comentarios</h3>

        <form
          onSubmit={handleSubmit}
          className={"flex flex-col justify-center items-center w-full" +
            (isFormSubmitted.value
              ? " transform transition-transform translate-x-96 translate-y-96 delay-75"
              : "")}
        >
          <div class="flex gap-2 mb-3">
            {new Array(5).fill(0).map(() => (
              <button
                type="button"
                class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 transition-transform transform hover:scale-125"
              >
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            ))}
          </div>

          <label className="block mb-4">
            <input
              type="text"
              name="comment"
              placeholder="Comentario"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform transform hover:-rotate-6"
          >
            Subir comentario
          </button>
        </form>
      </div>
    </div>
  );
}
