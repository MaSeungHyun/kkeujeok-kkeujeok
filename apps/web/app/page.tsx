import { Button } from "@kkeujeok-kkeujeok/ui/components/button";
import Input from "@kkeujeok-kkeujeok/ui/components/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <div className="flex-1 flex flex-col gap-4 items-center justify-center">
        🙂 Hello, World!
        <Input className="" />
        <Button>Click me</Button>
      </div>
    </main>
  );
}
