import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:pt-24 lg:pb-52 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:pt-32 xl:gap-x-8">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center flex flex-col items-center lg:text-left lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit tracking-tight text-balance font-bold text-gray-900 text-5xl !leading-tight md:text-6xl lg:text-7xl">
                Your image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                front page
              </h1>
              <p className="mt-5 text-lg text-balance text-center max-w-prose md:text-wrap lg:pr-10 lg:text-left">
                Capture your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone.
              </p>

              <ul className="mt-8 flex flex-col space-y-2 text-left font-medium items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern Iphone supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    className="w-10 h-10 rounded-full inline-block ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user_image"
                  />
                  <img
                    className="w-10 h-10 rounded-full inline-block ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user_image"
                  />
                  <img
                    className="w-10 h-10 rounded-full inline-block ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user_image"
                  />
                  <img
                    className="w-10 h-10 rounded-full inline-block ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user_image"
                  />
                  <img
                    className="w-10 h-10 rounded-full inline-block ring-2 ring-slate-100 object-cover"
                    src="/users/user-5.jpg"
                    alt="user_image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full px-8 mt-32 col-span-full h-fit sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 left-56 -top-20 select-none hidden sm:block lg:w-52 lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value proposition section */}
      <section className="bg-slate-200 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-center text-balance tracking-tight !leading-tight font-bold text-gray-900 text-5xl md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden pointer-events-none absolute inset-x-0 -bottom-6 text-green-500 sm:block" />
              </span>{" "}
              say
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid grid-cols-1 px-4 gap-y-16 max-2-2xl lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &#34;The case feels durable and I even got a compliment on the
                  desisn. Had the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before the image started started fading
                  into yellow-ish color after a couple of weeks. Love it.&#34;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-900">
                    <Check className="w-4 h-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &#34;I usually keep my phone together with my keys in my
                  pocket and that lead to some pretty heavy scratchmarkes on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it.&#34;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-900">
                    <Check className="w-4 h-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
