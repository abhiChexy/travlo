import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      Buttons
      <div className="flex gap-6">
        <Button> Testing </Button>
        <Button size={"lg"}> Testing </Button>
        <Button size={"xl"}> Testing</Button>
      </div>
      <div className="flex gap-6">
        <Button variant={"secondary"}> Testing </Button>
        <Button size={"lg"} variant={"secondary"}>
          Testing
        </Button>
        <Button size={"xl"} variant={"secondary"}>
          Testing
        </Button>
      </div>
      <div className="flex gap-6">
        <Button variant={"danger"}> Testing </Button>
        <Button size={"lg"} variant={"danger"}>
          Testing
        </Button>
        <Button size={"xl"} variant={"danger"}>
          Testing
        </Button>
      </div>
      <div className="flex gap-6">
        <Button variant={"success"}> Testing </Button>
        <Button size={"lg"} variant={"success"}>
          Testing
        </Button>
        <Button size={"xl"} variant={"success"}>
          Testing
        </Button>
      </div>
    </div>
  );
}
