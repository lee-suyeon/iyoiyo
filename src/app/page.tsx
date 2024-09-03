import Link from "next/link";
import { Button } from "@/common";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div className="font-logo text-blue-950 text-center mb-3">
        <h1 className="text-5xl">
          <strong className="text-7xl font-semibold">iyoiyo</strong> <br />
          workroom
        </h1>
        <p>All the happiness in a knit!</p>
      </div>

      <div className="mt-5 mb-5">
        <svg
          width="95"
          height="16"
          viewBox="0 0 95 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M93.5 13.5L82 2.5L70.5 13.5L59 2.5L47.5 13.5L36 2.49999L24.5 13.5L13 2.49999L1.5 13.5"
            stroke="#000958"
            strokeWidth="3"
          />
        </svg>
      </div>

      <p className="text-sm text-center mt-5 mb-10">
        니터들을 위한 온라인 작업실입니다. <br />
        뜨개 프로젝트를 관리하고 <br />
        완성된 작품은 갤러리에서 감상할 수 있어요.
      </p>
      <Button>작업실 만들기</Button>
      <Link href="" className="text-sm font-semibold text-blue-950 mt-3">
        이미 작업실이 있으신가요?
      </Link>
    </main>
  );
}
