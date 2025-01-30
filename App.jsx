import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <img
            src='public\Wha.jpg' // Replace with your photo URL
            alt="Pranav's Profile"
            className="profile-pic"
          />
          <div className="bio">
            <h1>Hi, I'm Pranav!</h1>
            <p>
              I'm a passionate developer and tech enthusiast with a strong focus on
              <strong> React</strong>, <strong>Node.js</strong>, and blockchain technologies like
              <strong> Motoko</strong> and <strong>ICP</strong>. Currently, I am working on a billing
              application with integrated features like inventory management, customer billing, and
              reports.
            </p>
            <h2>Skills:</h2>
            <ul>
              <li><strong>Web Development</strong>: Proficient in React, Node.js, and EJS for building dynamic, user-friendly web applications.</li>
              <li><strong>Blockchain</strong>: Hands-on experience with ICP Protocol and Motoko for decentralized applications and smart contract development.</li>
              <li><strong>Smart Contract Development</strong>: Experienced in creating secure and efficient smart contracts, especially for NFT marketplaces.</li>
            </ul>
            <h2>Interests:</h2>
            <ul>
              <li><strong>Tech Trends</strong>: Always keeping up with the latest in blockchain, NFTs, and Web3.</li>
              <li><strong>Cricket</strong>: Love to follow and play.</li>
              <li><strong>Movies</strong>: Just Love watching them.</li>
            </ul>
            <p>Feel free to reach out for collaboration or just to chat about tech, cricket, or anything else!</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;


