import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full p-4 flex justify-center items-center">
      <div className=" pt-36">
        <h1 className="text-xl font-semibold text-center pb-8">@itsjmendez</h1>
        <div className="grid grid-flow-row grid-rows-4 gap-8 place-items-center	">
          <Link href="https://www.linkedin.com/in/itsjmendez/" target="_blank">
            <Image
              src={'/linkedIn-icon.svg'}
              alt="LinkedIn Logo"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://medium.com/@itsjmendez" target="_blank">
            <Image
              src={'/medium-icon.svg'}
              alt="Medium Logo"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://twitter.com/itsjmendez" target="_blank">
            <Image
              src={'/x-icon.svg'}
              alt="X Icon Logo"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://github.com/itsjmendez" target="_blank">
            <Image
              src={'/github-icon.svg'}
              alt="Github Logo"
              width={28}
              height={28}
            />
          </Link>
          {/* <Link href="https://www.facebook.com/itsjmendez/" target="_blank">
            <Image
              src={'/fb-icon.svg'}
              alt="FAcebook Logo"
              width={28}
              height={28}
            />
          </Link> */}
          {/* <Link href="https://www.instagram.com/itsjmendez/" target="_blank">
            <Image
              src={'/ig-icon.svg'}
              alt="Instagram Logo"
              width={28}
              height={28}
            />
          </Link> */}
          {/* <Link href="https://www.threads.net/@itsjmendez" target="_blank">
            <Image
              src={'/threads-icon.svg'}
              alt="Threads Logo"
              width={28}
              height={28}
            />
          </Link> */}
        </div>
      </div>
    </main>
  );
}
