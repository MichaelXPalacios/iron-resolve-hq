import Header from "@/components/Header";
import VideoLibrary from "@/components/VideoLibrary";
import Footer from "@/components/Footer";

const Videos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VideoLibrary />
      <Footer />
    </div>
  );
};

export default Videos;