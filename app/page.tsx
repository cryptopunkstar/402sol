import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full">

          <Image
        src="/images/mw3rise.png" // Path to the image
        alt="Mw3 Image"
        width={125} // The desired width of the image
        height={150} // The desired height of the image
      />

          <h1 className="text-4xl font-bold mb-4">x402 Solana Modularweb3</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This is a Next.js template with Solana payment integration using the x402 protocol. 
            Use wallet phantom with Devnet token Solana and USDC.           

          </p>
          <Image
        src="/images/og-image.png" // Path to the image
        alt="x402 Image"
        width={500} // The desired width of the image
        height={300} // The desired height of the image

      />
          <h2 className="text-4xl font-bold mb-4">Get token on faucet :</h2>
         
            <ul>
            <li>   
            <a href="https://faucet.circle.com/" target="_blank" rel="noopener noreferrer">https://faucet.circle.com/</a>
            </li>  
            <li>
              <a href="https://faucet.solana.com/" target="_blank" rel="noopener noreferrer">https://faucet.solana.com/</a>
            </li>
            </ul>
         
          <h3 className="text-4xl font-bold mb-4">Payment !</h3>
          <div className="flex gap-4">
            <Link
              href="/content/cheap"
              className="inline-block px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Access Cheap Content 🪣 0.01 $USDC
            </Link>
            <Link
              href="/content/expensive"
              className="inline-block px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Access Expensive Content 💰 0.05 $USDC
            </Link>

            
          </div>
          *With Solana developer ecosystem template Framework kit <br />
            https://solana.com/developers/templates<br />
            https://github.com/solana-foundation/framework-kit
        </div>
      </main>
    </div>
  )
}
