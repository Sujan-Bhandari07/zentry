import { BsFillSendFill } from "react-icons/bs";



const Cards = () => {

  
  return (
    <div className="cards text-white ">
      <div>
        <div>Into the Metagame Layer</div>
        <div>
          Immerse yourself in a rich and ever-xpanding universe where a vibrant
          array of products coverage into an interconnected overlay experiences
          on your world.
        </div>
      </div>
      <div className="first">





        <video autoPlay muted loop src="/videos/feature-1.mp4"></video>



        <div>
          <h1>RADIANT</h1>
          <div>
            A cross platform metagame app,turning your activities across Web2
            and Web3 games into a rewarding adventure.
          </div>
        </div>
      </div>

      <div className="second">
        <div className="secondfirst">


          <video autoPlay muted loop src="/videos/feature-2.mp4"></video>

          <div>
            <h1>ZIGMA</h1>
            <div>
              An anime and gaming-inspired NFT collection – the IP primed for
              expansion.
            </div>
          </div>
        </div>

        <div className="secondsecond">
          <div>


            <video autoPlay muted loop src="/videos/feature-3.mp4"></video>

            <div>
              <h1>NEXUS</h1>
              <div>
                A gamified social hub, adding a new dimension of play to social
                interaction for Web3 communities.
              </div>
            </div>
          </div>
          <div>
            <video autoPlay muted loop src="/videos/feature-4.mp4"></video>
            <div>
              <h1>AZUL</h1>
              <div>
                A cross-world AI Agent – elevating your gameplay to be more fun
                and productive.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="third">
        <div className="third1">
<h1>MORE<br />COMMING<br />SOON.</h1>
<BsFillSendFill />
        </div>
        <div className="third2">
          <video autoPlay loop muted playsInline src="videos/feature-5.mp4"></video>
        </div>
      </div>
     
    </div>
  );
};

export default Cards;
