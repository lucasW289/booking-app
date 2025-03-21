import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SearchBar />
      </div>
      <div className="container flex-1 px-4 py-10 mx-auto sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
