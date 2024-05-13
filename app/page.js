import dynamic from "next/dynamic";

/**
 * @type {import("next").Viewport}
 */
export const viewport = {
  userScalable: false,
}

// /**
//  * 
//  * @param {any} param 
//  * @returns {import("next").Viewport}
//  */
// export function generateViewport({ params }) {
//   return {
//     userScalable: false
//   }
// }

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false
})

export default function Home() {
  return (
    <main className="relative bg-black/95 h-screen flex flex-col justify-center items-center">
      <div className="">
        <h1 className="animate-shimmer text-xl text-white font-mono">Fallen Angels</h1>
      </div>
      <div className="h-80 w-full md:size-80 lg:size-96">
        <Scene />
      </div>
    </main>
  );
}
