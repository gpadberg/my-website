// About.js

import React from 'react';
import cookingPhoto from '../images/cooking.png';
import volleyballPhoto from '../images/volleyball.png';
import travelPhoto from '../images/travel.png';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="hobby">
        <img src={cookingPhoto} alt="Cooking" />
        <h2>Cooking</h2>
        <p>
          Cooking is one of my favorite hobbies. I love experimenting with different ingredients and creating delicious dishes from scratch. Whether it's baking bread, making pasta, or trying out new recipes, I find joy and satisfaction in the kitchen.
        </p>
      </div>
      <div className="hobby">
        <img src={volleyballPhoto} alt="Volleyball" />
        <h2>Volleyball</h2>
        <p>
          Volleyball is another hobby I enjoy. I love the teamwork, strategy, and adrenaline rush that comes with playing this sport. Whether it's a casual game at the beach or a competitive match, volleyball always brings me excitement and joy.
        </p>
      </div>
      <div className="hobby">
        <img src={travelPhoto} alt="Travel" />
        <h2>Traveling</h2>
        <p>
          Traveling is one of my greatest passions. Exploring new places, experiencing different cultures, and trying exotic foods are some of the things I love about traveling. Whether it's hiking in the mountains, lounging on a tropical beach, or exploring bustling cities, I'm always up for an adventure.
        </p>
      </div>
    </div>
  );
}
