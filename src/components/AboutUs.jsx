import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Your one-stop destination for quality products and exceptional service.</p>
      </div>

      <section className="about-us-content">
        <div className="about-us-intro">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>YourShop</strong>, your trusted online store. We
            specialize in providing a wide range of high-quality products,
            tailored to meet your needs and lifestyle. From electronics to
            fashion, home decor to personal care, we have it all!
          </p>
        </div>

        <div className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver top-notch products with seamless shopping
            experiences. We prioritize customer satisfaction and are dedicated
            to bringing you the best products at unbeatable prices.
          </p>
        </div>

        <div className="about-us-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> Only the best products make it to our shelves.</li>
            <li><strong>Integrity:</strong> Honesty and transparency in all our dealings.</li>
            <li><strong>Customer Focus:</strong> You are at the center of everything we do.</li>
            <li><strong>Innovation:</strong> Embracing the latest trends and technology.</li>
          </ul>
        </div>

        <div className="about-us-vision">
          <h2>Our Vision</h2>
          <p>
            To become a leading e-commerce platform where quality, affordability,
            and customer satisfaction come together seamlessly.
          </p>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>
          <em>Thank you for choosing <strong>YourShop</strong>. We’re excited to be part of your journey!</em>
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
