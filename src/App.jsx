import { useEffect } from 'react';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  useEffect(() => {
    const header = document.querySelector('.navbar');

    if (!header) {
      return undefined;
    }

    const headerHeight = header.offsetHeight;

    const handleScroll = () => {
      if (window.scrollY >= headerHeight) {
        header.classList.add('scrolled', 'shadow-sm');
      } else {
        header.classList.remove('scrolled', 'shadow-sm');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      message: form.message.value
    };

    fetch('http://your-backend.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json().catch(() => ({}));
      })
      .then(() => {
        alert('Gửi thành công!');
        form.reset();
      })
      .catch((error) => {
        console.error('Lỗi:', error);
        alert('Đã xảy ra lỗi khi gửi biểu mẫu.');
      });
  };

  return (
    <div data-bs-spy="scroll" data-bs-target="#navScroll">
      <nav id="navScroll" className="navbar navbar-expand-lg navbar-light fixed-top" tabIndex={0}>
        <div className="container">
          <a className="navbar-brand pe-4 fs-4" href="index.html">
            <img src="/img/img_Sune/index/logo.png" alt="SunEd logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/index.html" aria-label="Brings you to the frontpage">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus.html">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news.html">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Programs
                </a>
                <ul className="dropdown-menu-custom no-bullet-custom">
                  <li>
                    <a href="/Programs/EN/EnglishCourse_en.html" className="nav-decor nav-item-style">
                      Online English
                    </a>
                  </li>
                  <li>
                    <a href="/Programs/EN/DualDiploma_en.html" className="nav-decor nav-item-style">
                      Dual Diploma
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/index_vn.html">
                  VN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <div className="w-100 overflow-hidden bg-gray-100 carousel" id="top">
          <div className="container position-relative">
            <div
              className="col-12 col-lg-8 mt-0 h-100 position-absolute top-0 end-0 bg-cover"
              data-aos="fade-left"
              style={{ backgroundImage: 'url(img/img_Sune/index/carousel-background.avif)' }}
            />
            <div className="row">
              <div className="col col-lg-7 py-vh-6 position-relative" data-aos="fade-right">
                <h1 className="display-1 fw-bold mt-5 overflow-hidden">
                  <span style={{ color: '#ffbc2c' }}>Sun</span>
                  <span style={{ color: '#3c4493' }}>Ed</span>
                </h1>
                <p className="lead">Expanding Horizons - Empowering Futures</p>
                <a href="#" className="btn btn-dark btn-xl me-3 my-1">
                  <i className="fa-solid fa-envelope overflow-hidden" style={{ paddingRight: '0.3rem' }} />
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-vh-4 w-100 overflow-hidden" id="services">
          <div className="container">
            <div className="row d-flex justify-content-end slogan">
              <div className="col-lg-3 d-flex align-items-center" data-aos="fade-down">
                <h1 className="display-6" style={{ fontFamily: 'hanzel,serif' }}>
                  <span style={{ color: '#ffbc2c' }}>Sun</span>
                  <span style={{ color: '#3c4493' }}>Ed</span>
                </h1>
              </div>
              <div className="col-lg-8" data-aos="fade-left">
                <h2 className="display-6">"Expanding Horizons - Empowering Futures"</h2>
              </div>
            </div>
            <div className="row d-flex align-items-center value">
              <div className="col-1 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <span className="h5 fw-lighter">01.</span>
                <h3 className="py-5 border-top border-dark">
                  <span style={{ color: '#ffbc2c' }}>S</span> - Supportive
                </h3>
                <p>
                  SunEd seeks to offer personalized guidance, resources, and responsive assistance to help students achieve
                  their learning goals effectively. We ensure accessibility to learning tools and create a nurturing
                  environment that addresses both academic and personal needs of learners.
                </p>
              </div>
              <div className="col-2 col-md-6 col-lg-4 py-vh-4 pb-0" data-aos="fade-up" data-aos-delay="400">
                <span className="h5 fw-lighter">02.</span>
                <h3 className="py-5 border-top border-dark">
                  <span style={{ color: '#ffbc2c' }}>U</span> - Utilitarian
                </h3>
                <p>
                  Focusing on practical, outcome-oriented support maximizes educational benefits for the largest number of
                  students. This approach ensures efficient use of resources, streamlined curricula, and access to tools
                  that enhance skills and employability, directly aligning education with real-world applications and
                  learner success.
                </p>
              </div>
              <div className="col-3 col-md-6 col-lg-4 py-vh-6 pb-0" data-aos="fade-up" data-aos-delay="600">
                <span className="h5 fw-lighter">03.</span>
                <h3 className="py-5 border-top border-dark">
                  <span style={{ color: '#ffbc2c' }}>N</span> - Needed
                </h3>
                <p>
                  Cultivating knowledge, skills, and personal growth empowers individuals to make meaningful contributions to
                  society. SunEd plays a critical role in advancing community development, promoting lifelong learning, and
                  equipping learners to meet the changing demands of the workforce and civic responsibilities.
                </p>
              </div>
            </div>
            <div className="row d-flex align-items-center value">
              <div className="col-1 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <span className="h5 fw-lighter">04.</span>
                <h3 className="py-5 border-top border-dark">
                  <span style={{ color: '#3c4493' }}>E</span> - Efficient
                </h3>
                <p>
                  Streamlined, well-organized programs optimize learning outcomes and minimize wasted time and resources.
                  With clear communication, accessible support, and thoughtfully designed curricula, SunEd creates a
                  productive educational experience tailored to the needs of both students and families.
                </p>
              </div>
              <div className="col-2 col-md-6 col-lg-6 py-vh-3 pb-0" data-aos="fade-up" data-aos-delay="400">
                <span className="h5 fw-lighter">05.</span>
                <h3 className="py-5 border-top border-dark">
                  <span style={{ color: '#3c4493' }}>D</span> - Diligent
                </h3>
                <p>
                  SunEd aims to maintain high standards, consistently monitor progress, and offer tailored support to address
                  individual needs. Through attentive guidance and a commitment to continuous improvement, we ensure each
                  learner receives focused, quality education.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="vision">
          <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-lg-4">
                <h3 className="py-5 border-top border-dark" data-aos="fade-right" style={{ fontWeight: 800 }}>
                  Our Vision
                </h3>
                <p data-aos="fade-right" data-aos-delay="200" style={{ fontSize: '1rem' }}>
                  "SunEd becomes one of the leading education and training providers in Vietnam and the region to provide
                  affordable pathways for learners to interact with the international community."
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row gx-5 d-flex col-img">
                  <div className="col-md-6">
                    <div
                      className="shadow ratio ratio-1x1 rounded bg-cover bp-center"
                      data-aos="fade-up"
                      style={{ backgroundImage: 'url(img/Vision/Vision-pic.avif)' }}
                    />
                  </div>
                  <div className="col-md-5 offset-md-1">
                    <div
                      className="shadow ratio ratio-16x9 rounded bg-cover mt-5 bp-center float-end"
                      data-aos="fade-left"
                      style={{ backgroundImage: 'url(img/Vision/vision-pic4.png)', '--bs-aspect-ratio': '50%' }}
                    />
                  </div>
                  <div className="col-md-11">
                    <div
                      className="shadow ratio ratio-16x9 rounded bg-cover mt-5 bp-center"
                      data-aos="fade-down"
                      style={{ backgroundImage: 'url(img/Vision/vision-pic2.jpg)', '--bs-aspect-ratio': '50%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-vh-4 bg-gray-100 w-100 overflow-hidden mission" id="aboutus">
          <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="row gx-5 d-flex">
                  <div className="col-md-11">
                    <div
                      className="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end"
                      data-aos="fade-right"
                      style={{
                        backgroundImage: 'url(img/363e7da2-1024.jpeg)',
                        '--bs-aspect-ratio': '50%',
                        textAlign: 'center',
                        alignItems: 'center'
                      }}
                    />
                  </div>
                  <div className="col-md-5 offset-md-1">
                    <div
                      className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
                      data-aos="fade-up"
                      style={{ backgroundImage: 'url(img/74d6cec4-768.jpeg)' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div
                      className="col-12 shadow ratio rounded bg-cover mt-5 bp-center"
                      data-aos="fade-left"
                      style={{ backgroundImage: 'url(img/webp/people4.webp)', '--bs-aspect-ratio': '150%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h3 className="py-5 border-top border-dark" data-aos="fade-left" style={{ fontWeight: 800 }}>
                  Our Mission
                </h3>
                <ul data-aos="fade-left" data-aos-delay="200" style={{ fontSize: '1rem' }}>
                  <li>
                    To introduce liberal arts education to engage learners in different training activities to achieve
                    developmental milestones
                  </li>
                  <br />
                  <li>To equip learners with advanced teaching &amp; learning approach in world-class quality</li>
                  <br />
                  <li>To enable learners to access and participate in global discourses and practices</li>
                  <br />
                  <li>To instill a positive attitude towards continuous learning in learners.</li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative overflow-hidden w-100 bg-light news" id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 news-title">
                <h3 className="py-5 border-top border-dark" data-aos="fade-right">
                  OUR NEWS
                </h3>
              </div>
              <div className="col-12">
                <div className="row py-vh-5 d-flex align-items-center news-content" style={{ textAlign: 'center' }}>
                  <div className="col-md-4" data-aos="fade-up">
                    <img
                      src="img/img_Sune/news/blogs/blog1-1.avif"
                      className="img-fluid rounded shadow"
                      alt="Education sector focuses on reform and innovation"
                    />
                    <a href="/blog-1.html">
                      Education sector focuses on reform and innovation for the upcoming academic year
                    </a>
                  </div>
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                    <img
                      src="img/img_Sune/news/blogs/blog2-1.png"
                      className="img-fluid rounded shadow"
                      alt="Summary of the 2023-2024 school year"
                    />
                    <a href="/blog-2.html">Summary of the 2023-2024 school year for secondary education ...</a>
                  </div>
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                    <img
                      src="img/img_Sune/news/blogs/blog3-1.avif"
                      className="img-fluid rounded shadow"
                      alt="Making English Vietnam's second language"
                    />
                    <a href="/blog-3.html">Making English Vietnam's second language: A challenging but necessary task</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-vh-6 bg-gray-900 text-light w-100 overflow-hidden action-call" id="workwithus">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8 text-center" data-aos="fade">
                  <h2 className="display-6 mb-3">Ready to expand your horizons?</h2>
                </div>
                <div className="col-12">
                  <a
                    href="#"
                    className="btn btn-xl shadow me-3 mt-2"
                    style={{ backgroundColor: '#ffbc2c', borderRadius: '10px' }}
                    data-aos="fade-down"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-6 contact-left">
                <div className="text-center">
                  <h2 data-aos="fade-right" data-aos-delay="200">
                    Ready to expand your horizons?
                  </h2>
                  <img
                    src="img/img_Sune/index/contact-img.avif"
                    alt="Kite"
                    className="shadow"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  />
                </div>
              </div>
              <div className="col-6 contact-right">
                <h3 data-aos="fade-left" data-aos-delay="200">Contact us</h3>
                <form id="contactForm" data-aos="fade-left" data-aos-delay="500" onSubmit={handleContactSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="firstName">
                      First Name *
                    </label>
                    <input type="text" className="form-control" id="firstName" name="firstName" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="lastName">
                      Last Name *
                    </label>
                    <input type="text" className="form-control" id="lastName" name="lastName" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email *
                    </label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea className="form-control" rows="3" id="message" name="message" defaultValue="This is a message" />
                  </div>
                  <button type="submit" className="btn btn-custom w-100">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="our-partner-375px">
          <h2 className="title">Our Partners</h2>
          <div className="carousel-partner-375px container">
            <div className="partner-375px">
              <img src="/img/partner_1.png" alt="Partner 1" />
              <img src="/img/partner_2.png" alt="Partner 2" />
              <img src="/img/partner_3.png" alt="Partner 3" />
            </div>
          </div>
        </div>

        <div className="our-partner">
          <h2 className="tittle">Our Partners</h2>
          <div className="wrap">
            <img src="/img/partner_1.png" alt="Partner 1" />
            <img src="/img/partner_2.png" alt="Partner 2" />
            <img src="/img/partner_3.png" alt="Partner 3" />
            <img src="/img/partner_1.png" alt="Partner 1" />
            <img src="/img/partner_2.png" alt="Partner 2" />
            <img src="/img/partner_3.png" alt="Partner 3" />
          </div>
        </div>
      </main>

      <footer>
        <div className="container small border-top">
          <div className="row py-5 d-flex justify-content-between">
            <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
              <img src="/img/img_Sune/index/logo.png" alt="Company Logo" style={{ width: '8rem' }} />
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
              <h3 className="h6 mb-3">HEAD OFFICE</h3>
              <address className="text-secondary mt-3">
                478 Nguyen Tat Thanh Street, Xom Chieu Ward, Ho Chi Minh City, Viet Nam.
                <br />
                <br />
                <a href="tel:84 779 661 879">+84 779 661 879</a>
                <br />
                <br />
                <a href="mailto:info@suned.edu.vn">info@suned.edu.vn</a>
              </address>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
              <h3 className="h6 mb-3">NAVIGATION</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="/aboutus.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="/news.html">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="/contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 p-5">
              <h3 className="h6 mb-3">FOLLOW US</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link link-secondary ps-0" href="https://zalo.me/84779661879">
                    Zalo
                  </a>
                  <a className="nav-link link-secondary ps-0" href="https://www.facebook.com/profile.php?id=61568250823279">
                    Facebook
                  </a>
                  <a className="nav-link link-secondary ps-0" href="https://x.com/SunEd2024">
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container text-center py-3 small">
          © 2025 by{' '}
          <a href="https://www.suned.edu.vn/" className="copyright ink-fancy" target="_blank" rel="noreferrer">
            SunEd
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
