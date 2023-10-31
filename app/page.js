import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" h-screen p-4 flex justify-center items-center align-middle">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-semibold text-center pb-8 font-sans">
          @ITSJMENDEZ
        </h1>
        <div className="grid grid-flow-row grid-rows-4 gap-4 place-items-center	">
          <Link href="https://www.linkedin.com/in/itsjmendez/" target="_blank">
            <Image
              src={'/linkedIn-icon.svg'}
              alt="LinkedIn Logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://medium.com/@itsjmendez" target="_blank">
            <Image
              src={'/medium-icon.svg'}
              alt="Medium Logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://twitter.com/itsjmendez" target="_blank">
            <Image
              src={'/x-icon.svg'}
              alt="X Icon Logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://github.com/itsjmendez" target="_blank">
            <Image
              src={'/github-icon.svg'}
              alt="Github Logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
