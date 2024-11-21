import "./App.css";
import Card from "./components/card.jsx";
import Carousel from "./components/carousel.jsx";
import Navbar from "./components/navbar.jsx";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="section hero">
        <div className="gap-3vw flex justify-center">
          <div className="flex-item">
            <h1 className="markazi-text-header text-color-primary title">
              Little Lemon
            </h1>
            <h3 className="subtitle text-color-white-secondary">Chicago</h3>
            <p className="text-color-white-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <button className="button text-color-black">Reserve a table</button>
          </div>
          <div className="overflow">
            <img id="header-img" src="restauranfood.jpg"></img>
          </div>
        </div>
      </div>
      <div className="section specials">
        <div className="container flex flex-row  ">
          <div className="section flex justify-between">
            <h2>Specials</h2>
            <div className="align-center">
              <button className="button">Online Menu</button>
            </div>
          </div>
        </div>
        <div className="container">
          <Carousel>
            <Card width={"20rem"} height={"30rem"}>
              <div className="card-img">
                <img src="/greenSalad.webp"></img>
              </div>

              <div>
                <div className="flex card-header">
                  <div>Green Salad</div>
                  <div> $123</div>
                </div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </Card>
            <Card width={"20rem"} height={"30rem"}>
              <div className="card-img">
                <img src="/greenSalad.webp"></img>
              </div>

              <div>
                <div className="flex card-header">
                  <div>Green Salad</div>
                  <div> $123</div>
                </div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </Card>

            <Card width={"20rem"} height={"30rem"}>
              <div className="card-img">
                <img src="/greenSalad.webp"></img>
              </div>

              <div>
                <div className="flex card-header">
                  <div>Green Salad</div>
                  <div> $123</div>
                </div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </Card>
          </Carousel>
        </div>
      </div>
      <div className="section specials">
        
        <div className="container ">
          <Carousel>
            <Card width={"15rem"} height={"15rem"}>
              <div>
                <div className="flex card-header">
                  <div>Green Salad</div>
                  <div> $123</div>
                </div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
              </div>
            </Card>
            <Card width={"15rem"} height={"15rem"}>
              <div>
                <div className="flex card-header">
                  <div>Green Salad</div>
                  <div> $123</div>
                </div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
              </div>
            </Card>
            <Card width={"15rem"} height={"15rem"}>
              <div>
                <div className="flex card-header">
                  <div>Green Salad</div>
                  <div> $123</div>
                </div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
              </div>
            </Card>
            <Card width={"15rem"} height={"15rem"}>
              <div>
                <div className="flex card-header">
                  <div>Green Salad</div>
                  <div> $123</div>
                </div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
              </div>
            </Card>
          </Carousel>
        </div>
      </div>
      <div>D</div>
      <div>E</div>
    </div>
  );
}

export default App;
