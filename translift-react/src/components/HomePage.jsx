import React from 'react';
import './HomePage.css';



const HomePage = () => {
  return (
    <div>

      {/* Navbar */}
<header className="navbar">
  <img src="translift-logo.png" alt="TransLift Logo" className="logo" />
  <ul className="nav-links">
    <li><a href="#hero">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#stories">Stories</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#donate">Donate</a></li>
  </ul>
  <a href="#donate" className="donate-now-button">DONATE NOW</a>
</header>

  {/* ===== HERO SECTION START ===== */}
<section id="hero" className="hero">
  <div className="hero-content">
    
    {/* === Hero Text Block === */}
    <div className="hero-text">
      <h1>Support Trans Lives</h1>
      <p className="tagline">Make a Difference</p>
      <p className="description">
        “Their Survival Depends on Us — Let’s Not Look Away”

        Every day, transgender lives are at risk in countries where simply existing is punishable by prison—or worse. They are silenced, hunted, and denied basic medical care. Some are locked away. Some flee. Many don’t make it.

        Imagine being forced into hiding just because you had the courage to live as yourself. Imagine enduring a painful journey of gender affirmation, only to be abandoned by systems meant to protect you.

        This is the brutal reality for many of our siblings across the globe. But you can change that.

        Your donation isn’t just charity—it’s solidarity.
        It’s medication. It’s a bed in a safehouse. It’s the difference between despair and survival. It’s a message that says: “You’re not alone. We see you. We’re fighting for you.”

        Whether you’ve walked this road, are still on it, or simply care—now is the time to give. No amount is too small. Your token today might save someone’s tomorrow.

        They need us. We are them.
        Let’s rise for our community—because if we don’t, who will?

        Donate Now – Be the reason they survive.
      </p>

      {/* === Hero Buttons === */}
      <div className="hero-buttons">
        <a href="#donate" className="hero-donate">Donate Now</a>
        <a href="#about" className="hero-learn">Learn More</a>
      </div>
    </div>

    {/* === Hero Images Block === */}
    <div className="hero-image">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src="hero-image.png" alt="Support" className="shake" />
      <div className="hero-image-two">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src="hero-image2.png" alt="Support 2" className="shake" />
      </div>
    </div>

  </div>
</section>
{/* ===== HERO SECTION END ===== */}

      {/* About Mission Section */}
      <section id="about" className="section">
        <h2 className="section-title rainbow-underline">About Our Mission</h2>

        <div className="mission-grid">
          <div className="mission-card">
            <div className="about-icon">
              <img src="plus-icon.png" alt="Healthcare Access" className="about-icon-img" />
            </div>
            <h3>Healthcare Access</h3>
            <p>We help provide access to gender-affirming healthcare for those who need it most.</p>
          </div>
          <div className="mission-card">
            <div className="about-icon">
              <img src="community-image.png" alt="Community Support" className="about-icon-img" />
            </div>
            <h3>Community Support</h3>
            <p>Building safe spaces and supportive communities for transgender individuals.</p>
          </div>
          <div className="mission-card">
            <div className="about-icon">
              <img src="book-icon.png" alt="Education and Advocacy" className="about-icon-img" />
            </div>
            <h3>Education & Advocacy</h3>
            <p>Promoting understanding and advocating for transgender rights and equality.</p>
          </div>
        </div>
      </section>

      {/* Make a Donation Section */}
      <section className="section" id="donate">
        <h2 className="section-title rainbow-underline">Make a Donation</h2>

        <p>Your contribution helps us provide vital resources and support to transgender individuals in need.</p>

        <div className="donation-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '72.5%' }}></div>
          </div>
          <p className="progress-text">$7,250 raised of $10,000 goal</p>
        </div>

       <div className="donation-cards mission-grid">
  <div className="mission-card">
    <h3 className="donation-amount">$25</h3>
    <p>Provides a week of hormone therapy for one person</p>
  </div>
  <div className="mission-card">
    <h3 className="donation-amount">$50</h3>
    <p>Funds mental health counseling session</p>
  </div>
  <div className="mission-card">
    <h3 className="donation-amount">$100</h3>
    <p>Helps with legal name change expenses</p>
  </div>
</div>

        <section id="donation-form-section">
          <div className="donation-form-wrapper">
            <h3>Custom Amount</h3>
            <form>
              <input type="number" name="amount" placeholder="$ Enter amount" required />

              <h3>Your Information</h3>
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Phone (Optional)" />

              <h3>Donation Frequency</h3>
              <div className="frequency-options">
                <label><input type="radio" name="frequency" value="one-time" defaultChecked /> One-time</label>
                <label><input type="radio" name="frequency" value="monthly" /> Monthly</label>
                <label><input type="radio" name="frequency" value="annually" /> Annually</label>
              </div>

              <button type="submit" className="donate-now-button">Complete Donation</button>
            </form>
          </div>
        </section>
      </section>

      {/* Our Impact Section */}
      <section className="section" id="impact">
        <h2 className="section-title rainbow-underline">Our Impact</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <img src="impact-icon-1.png" alt="Individuals Supported" className="impact-icon" />
            <h3>500+ Individuals Supported</h3>
            <p>We've provided direct assistance to over 500 transgender individuals in need of healthcare, housing, and legal support.</p>
          </div>
          <div className="impact-card">
            <img src="impact-icon-2.png" alt="Community Centers" className="impact-icon" />
            <h3>20 Community Centers</h3>
            <p>We've helped establish and maintain 20 community centers providing safe spaces and resources across the country.</p>
          </div>
          <div className="impact-card">
            <img src="impact-icon-3.png" alt="Education" className="impact-icon" />
            <h3>50,000+ People Educated</h3>
            <p>Our educational programs have reached over 50,000 people, promoting understanding and acceptance.</p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section success-stories" id="stories">
       <h2 class="section-title rainbow-underline">Success Stories</h2>

        <div className="stories-grid">
          <div className="story-card">
            <img src="image1.jpg" alt="Story 1" className="story-image" />
            <h3>A - Alex</h3>
            <p>"The support I received changed my life. I was able to access the healthcare I needed and finally feel like myself. Thank you for making this possible."</p>
          </div>
          <div className="story-card">
            <img src="image2.jpg" alt="Story 2" className="story-image" />
            <h3>J - Jamie</h3>
            <p>"When I had nowhere else to turn, your organization provided me with safe housing and the resources I needed to get back on my feet. I'm forever grateful."</p>
          </div>
          <div className="story-card">
            <img src="image3.jpg" alt="Story 3" className="story-image" />
            <h3>L - Lauren</h3>
            <p>"Your support allowed me to transition with dignity and confidence. I now have a sense of belonging and peace."</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title rainbow-underline">Contact Us</h2>

        <p className="contact-subtext">Have questions or want to get involved? Reach out to us!</p>

        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />

              <label>Email</label>
              <input type="email" placeholder="Your Email" required />

              <label>Subject</label>
              <input type="text" placeholder="Subject" />

              <label>Message</label>
              <textarea placeholder="Your Message" rows="5" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <div className="icon-circle"><img src="images-email.png" alt="Email" /></div>
              <div>
                <strong>Email</strong><br />
                support@transsupport.org
              </div>
            </div>
            <div className="info-item">
              <div className="icon-circle"><img src="images-phone.png" alt="Phone" /></div>
              <div>
                <strong>Phone</strong><br />
                +1 (555) 123-4567
              </div>
            </div>
            <div className="info-item">
              <div className="icon-circle"><img src="images-location.png" alt="Location" /></div>
              <div>
                <strong>Address</strong><br />
                123 TransLift Street, Equality City, TX 75001
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        
      </footer>
    </div>
  );
};






export default HomePage;