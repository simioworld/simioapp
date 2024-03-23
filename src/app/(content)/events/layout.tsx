const EventsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex justify-center w-full p-6">{children}</div>;
};

export default EventsLayout;
