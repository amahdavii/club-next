import LottarySection from "../components/lottary/lottary.component";
import FAQ from "../components/faq";
import HomeSlider from "../components/slider/slider.component";

export default function Home() {
  return (
    <div className="alinclub__mainSection">
      <img src="/assets/images/banner.png" alt="cta banner" />
      <div className="container mx-auto">
        <HomeSlider />
        <LottarySection />
        <FAQ/>
      </div>
    </div>
  );
}
