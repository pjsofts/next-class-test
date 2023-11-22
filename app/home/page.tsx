import Image from "next/image";

function Home() {
  return (
    <div>
      Home
      <div className="flex gap-x-4">
        <div className="parent">
          <Image
            className=""
            src="/images/1.png"
            width={430}
            height={250}
            alt="desktop image"
          />
          <div className="child">
            <div className="child2">Salam Salam</div>
          </div>
        </div>
        <Image
          className=""
          src="/images/2.png"
          width={430}
          height={250}
          alt="desktop image"
        />
        <Image
          src="/images/3.png"
          width={430}
          height={250}
          alt="desktop image"
        />
      </div>
    </div>
  );
}

export default Home;
