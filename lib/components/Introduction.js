import React from 'react';

const Introduction = () => {
  return (
    <section className="text-format">
      <h1>I would love the opportunity to work at</h1>
      <h2><img className="logo" src="https://crew.co/hiring/assets/img/logo.svg" alt="Crew logo"/>/ Unsplash</h2>
      <article>
        <p className="letter-address">Dear Unsplash Team,</p>
        <p>
          I was thrilled to see your opening for the Unsplash Designer position and would love the opportunity to work at Unsplash. I'm a creative driven person that seeks a challenge and has the ability to quickly assimilate new technologies. I'm excessively organized and pay close attention-to-details, so every detail is polished in a timely manner.<br/><br/>I love learning about new things, whether it's experiencing a new culture, learning how to ride a motorcycle, or uncovering a new programming language. On the flip side, I enjoy teaching others new things as well. I taught English in Korea for two years and that was probably the best thing I have ever done in my life. It was rewarding teaching children, college students, and adults a language that will further their lives in the future. Additionally, I have written a couple <a href="https://medium.com/@kswanie21" target="_blank">technical blogs </a>about interesting topics to me that will hopefully benefit and enlighten others.
        </p>
      </article>
      <a href="https://twitter.com/kswanie21" target="_blank">
        <img className="react-tweet" src="./img/learning-example.png" alt="react native blog" />
      </a>
    </section>
  );
}

export default Introduction;
