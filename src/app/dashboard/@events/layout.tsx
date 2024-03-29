import Image from "next/image";

const EventsLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="h-full w-full flex justify-center">{children}</main>;
};

export default EventsLayout;
