import Banner from "@/app/(client)/_components/Banner";
import CrimeFeed from "@/app/(client)/_components/CrimeFeed";

export default async function Home() {
  return (
    <>
      <Banner />
      <CrimeFeed />
    </>
  );
}
