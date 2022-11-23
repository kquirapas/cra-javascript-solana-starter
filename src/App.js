import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { data: program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div class="container">
        <div class="iconContainer">
          <img
            src="/thirdweb.svg"
            height={75}
            width={115}
            alt="thirdweb"
            className="icon"
          />
          <img
            width={75}
            height={75}
            src="/sol.png"
            className="icon"
            alt="sol"
          />
        </div>
        <h1 class="h1">Solana, meet thirdweb 👋</h1>
        <p class="explain">
          Explore what you can do with thirdweb&rsquo;s brand new{" "}
          <b>
            <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              class="lightPurple"
            >
              Solana SDK
            </a>
          </b>
          .
        </p>
        <div class="buttonContainer">
          <WalletMultiButton style={{}} />
        </div>
      </div>
    </>
  );
};

export default Home;
