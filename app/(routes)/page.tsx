import getBanners from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
  const banner = await getBanners("4d434752-7aeb-4912-8990-8de61da31f17");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
      </div>
    </Container>
  );
}

export default HomePage;

