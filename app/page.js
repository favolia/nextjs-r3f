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
    <main className="relative h-screen touch-">
      <Scene />
    </main>
  );
}
