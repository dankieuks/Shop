import ReactCardFlip from "react-card-flip";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
function Index() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <section className="grid grid-cols-1 h-screen ">
      <div className="flex grid-cols-3  w-full justify-center items-center bg-primary  bg-cover bg-center bg-[url('https://kiavietnam.com.vn/storage/seltos-gt-line-kv.jpg')]">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Login handleCardClick={handleCardClick} />
          <Register handleCardClick={handleCardClick} />
        </ReactCardFlip>
      </div>
    </section>
  );
}

export default Index;
