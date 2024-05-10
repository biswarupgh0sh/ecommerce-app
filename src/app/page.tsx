import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:pt-24 lg:pb-52 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:pt-32 xl:gap-x-8">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="reltive mx-auto text-center flex flex-col items-center lg:text-left lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance font-bold text-gray-900 text-5xl !leading-tight lg:text-6xl xl:text-7xl">
                Your image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                front page
              </h1>
              <p className="mt-5 text-lg text-balance text-center max-w-prose md:text-wrap lg:pr-10 lg:text-left">Capture your favourite memories with your own, <span className="font-semibold">one-of-one</span> phone case. CaseBrand allows you to protect your memories, not just your phone.</p>

              <ul className="mt-8 flex flex-col space-y-2 text-left font-medium items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">High quality, durable material</li>
                </div>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
