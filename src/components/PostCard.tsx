import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function PostCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center p-4">
        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-semibold"
          prefetch={false}
        >
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          Acme Inc
        </Link>
        <div className="text-xs text-muted-foreground ml-auto">2h ago</div>
      </CardHeader>
      <CardContent className="p-0">
        <img
          src="https://images.unsplash.com/photo-1723653263152-f20aae931b99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          height="400"
          alt="Post Image"
          className="object-cover w-full aspect-square"
        />
      </CardContent>
      <CardFooter className="grid gap-4 p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <HeartIcon className="w-5 h-5" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircleIcon className="w-5 h-5" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon">
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="ghost" size="icon" className="ml-auto">
            <BookmarkIcon className="w-5 h-5" />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        <div className="space-y-2">
          <div>
            <Link href="#" className="font-medium" prefetch={false}>
              john
            </Link>
            This is a great photo! 🤩
          </div>
          <div className="text-sm text-muted-foreground">
            #nature #landscape #photography
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function BookmarkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
