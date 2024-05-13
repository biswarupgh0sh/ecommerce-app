"use client"; //to use useRef
import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function splitArray<T>(a: Array<T>, num: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < a.length; i++) {
    const index = i % num;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(a[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel,
}: {
  reviews: string;
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    ></div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);
  return (
    <div
      ref={containerRef}
      className="relative -mx-4 grid grid-cols-1 h-[49rem] max-h-[150vh] mt-16 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 ld:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn />
        </>
      ) : null}
    </div>
  );
}

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hiddden="true"
        src="/what-people-are-buying.png"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
