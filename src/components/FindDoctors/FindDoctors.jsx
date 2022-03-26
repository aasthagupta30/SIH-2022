import React, { useState } from "react";
import styles from "./FindDoctors.module.css";
import SearchBar from "../SearchBar/Searchbar";
import cart from "./shopping-cart-simple.png";
import record from "./notebook.png";
import article from "./book-open.png";
import img1 from "./farmproduce.jpeg";
import img2 from "./tips.jpg";
import img3 from "./tips2.jpg";
import img4 from "./tips3.jpg";
import img5 from "./tips4.jpg";


export default function FindDoctors() {
  const [position, setPosition] = useState(0);
  const [position1, setPosition1] = useState(0);

  let arr = [
    {
      img: img1,

      title: "Tips to follow for greater farm produce",
      spanDoctors: "Yogesh Kumar, Agro expert",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: img2,

      title: "Tips to follow for greater farm produce",
      spanDoctors: "Yogesh Kumar, Farm Expert",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: img3,

      title: "Tips to follow for greater farm produce",
      
      spanDoctors: "Yogesh Kumar, Farm Expert",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: img4,

      title: "Tips to follow for greater farm produce",
      
      spanDoctors: "Yogesh Kumar, Farm Expert",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: img5,

      title: "Tips to follow for greater farm produce",
      
      spanDoctors: "Yogesh Kumar, Farm Expert",
      likeSpan: "309 Likes● 36501Views",
    },
  ];

  const commentArr1 = [
    {
      starIcon: "ion-ios7-star",
      summary:
        " Very helpful. Far easier than doing same things oncomputer. Allows quick and easy search with speedybooking. Even maintains history of experts consulted.",
      personIcon: "ion-ios7-person-outline",
      name: "Aditya Pathak",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Boon for Farmers.God bless who made this website.I would not recover so soon if this website would not be there. Feedback- Krishi Konnect has experts for everything",
      personIcon: "ion-ios7-person-outline",
      name: "Anoop Kumar",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Very good app. Well thought out about booking/rescheduling/cancelling an appointment. Also Doctor's feedbac k mechanism is good and describes all the basics in good way.",
      personIcon: "ion-ios7-person-outline",
      name: "Avinash Kumar",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Very easy to use, user interface is amazing. The option Where I can book a cab truly showed how much this app-makers cares about the patient's health👍",
      personIcon: "ion-ios7-person-outline",
      name: "Anjani Sirivella",
    },
  ];
  const handleNext1 = () => {
    if (position1 >= 0 && position1 < 4) {
      setPosition1(position1 + 1);
    }
  };

  const handleNext = () => {
    if (position >= 0 && position < 3) {
      setPosition(position + 1);
    }
  };
  const handlePrev1 = () => {
    if (position1 >= 1) {
      setPosition1(position1 - 1);
    }
  };
  const handlePrev = () => {
    if (position >= 1) {
      setPosition(position - 1);
    }
  };

  return (
    <>
      <div className={styles.headerDiv}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>Your Home for Agricultural Consultation</h1> 
          </div>
          <div className={styles.headerSmallTitle}>
            <h3>Find and Book</h3>
          </div>
          <div className={styles.headerSearchBar}>
            <div>
              <SearchBar />
              <div className={styles.headerPopularSearchDiv}>
                <div className={styles.headerPopularSearch}>
                  <span>Popular searches:</span>
                  <span href="/">Organic Farming Expert</span>
                  <span href="/">Hi-Tech Equipment Expert</span>
                  <span href="/">Floriculture Expert</span>
                  <span href="/">Other</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerIconDiv}>
        <div>
          <div className={styles.headerIcon}>
            <div> 
            
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8478 7.07227H17.6956V8.23798H18.8478V15.2323H17.4598C17.1636 15.7855 16.6147 16.1831 15.9674 16.2711V16.5338L15.5646 16.2894H9.14501C9.29266 16.3591 9.45724 16.398 9.63065 16.398H13.5036L17.1196 18.5936V16.398H18.8478C19.4832 16.398 19.9999 15.8752 19.9999 15.2323V8.23798C19.9999 7.59509 19.4832 7.07227 18.8478 7.07227ZM8.47852 15.2336V8.23673C8.47852 8.23715 8.47852 8.23757 8.47852 8.23798V15.2323C8.47852 15.2327 8.47852 15.2331 8.47852 15.2336Z" fill="white"/>
            <path d="M16.8256 4H4.53618C3.68898 4 3 4.68898 3 5.53618V14.7533C3 15.6005 3.68898 16.2894 4.53618 16.2894H6.84045V19.1828L11.6618 16.2894H16.8256C17.6728 16.2894 18.3618 15.6005 18.3618 14.7533V5.53618C18.3618 4.68898 17.6728 4 16.8256 4ZM16.8256 14.7533H11.2362L8.37663 16.4684V14.7533H4.53618V5.53618H16.8256V14.7533Z" fill="white"/>
            <path d="M6.84033 7.84033H14.5213V9.37651H6.84033V7.84033ZM6.84033 10.9127H12.217V12.4489H6.84033V10.9127Z" fill="white"/>
            </svg>
            

              <div>Consult with an Expert</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7H18.8767L17.0989 15H8.5C7.11929 15 6 13.8807 6 12.5V7Z" stroke="white"/>
            <path d="M4 4H6V7.5" stroke="white"/>
            <path d="M9 19.5C9.82843 19.5 10.5 18.8284 10.5 18C10.5 17.1716 9.82843 16.5 9 16.5C8.17157 16.5 7.5 17.1716 7.5 18C7.5 18.8284 8.17157 19.5 9 19.5Z" fill="white"/>
            <path d="M15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z" fill="white"/>
            </svg>
            

              <div>Marketplace </div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4.5H7C6.17157 4.5 5.5 5.17157 5.5 6V18C5.5 18.8284 6.17157 19.5 7 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18V6C19.5 5.17157 18.8284 4.5 18 4.5Z" stroke="white"/>
            <path d="M8.5 5V19" stroke="white"/>
            <path d="M13.5 9V14" stroke="white"/>
            <path d="M16 11.5H11" stroke="white"/>
            <path d="M16 16.5H11" stroke="white"/>
            </svg>
            

              <div>View Production Records</div>
            </div>
            <div style={{ marginTop: "1px" }}>
              <div style={{ display: "flex" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11.5V6H14V11.5L19 19H5L10 11.5Z" stroke="white"/>
              <path d="M7.5 6H16.5" stroke="white"/>
              <path d="M7.5 15.5002C8 14.8335 9.49998 13.9754 11.5 14.7754C14 15.7754 14.5 16.7754 16.5 15.7754" stroke="white" stroke-width="0.75"/>
              </svg>
              

                <span className={styles.new_badge}
                >
                  New
                </span>
              </div>
              <div>Book Crop Test</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 18V6C8.6 6 11.5 7.33333 12.5 8V19C9.3 17.4 6.16667 17.6667 5 18Z" stroke="white" stroke-width="0.75"/>
            <path d="M20 18V6C16.4 6 13.5 7.33333 12.5 8V19C15.7 17.4 18.8333 17.6667 20 18Z" stroke="white" stroke-width="0.75"/>
            <path d="M7.5 9.5H10.5" stroke="white"/>
            <path d="M14.5 9.5H17.5" stroke="white"/>
            <path d="M7.5 12.5H10.5" stroke="white"/>
            <path d="M14.5 12.5H17.5" stroke="white"/>
            <path d="M7.5 15.5H10.5" stroke="white"/>
            <path d="M14.5 15.5H17.5" stroke="white"/>
            </svg>
            

              <div>Read Articles</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7.5H6C5.17157 7.5 4.5 8.17157 4.5 9V17C4.5 17.8284 5.17157 18.5 6 18.5H19C19.8284 18.5 20.5 17.8284 20.5 17V9C20.5 8.17157 19.8284 7.5 19 7.5Z" stroke="white"/>
            <path d="M4.5 11.5C6.83333 12.3333 13.3 13.5 20.5 11.5" stroke="white" stroke-width="0.75"/>
            <path d="M15 5.5H10C9.72386 5.5 9.5 5.72386 9.5 6V7C9.5 7.27614 9.72386 7.5 10 7.5H15C15.2761 7.5 15.5 7.27614 15.5 7V6C15.5 5.72386 15.2761 5.5 15 5.5Z" stroke="white"/>
            <path d="M13.5 11H11.5C11.2239 11 11 11.2239 11 11.5C11 11.7761 11.2239 12 11.5 12H13.5C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11Z" fill="white"/>
            </svg>
            

              <div>For Consultancy Providers</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h4>Safety of your data is our priority</h4>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Multi-level security checks</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Multiple data backups</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Stringent data privacy policies</span>
                  </div>
                </div>
                <div className={styles.readMoreBox}>
                  <a href="/">Read more</a>
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src={require('./unkil.png')}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.iconBox}>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png"
                alt="img"
              />
              <div>
                <p>256-bit</p>
                <p>encryption</p>
              </div>
            </div>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png"
                alt="img"
              />
              <div>
                <p>ISO 27001</p>
                <p>certified</p>
              </div>
            </div>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png"
                alt="img"
              />
              <div>
                <p>HIPAA</p>
                <p>compliant data centers</p>
              </div>
            </div>
            <div>
              <img
                src="//www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png"
                alt="img"
              />
              <div>
                <p>DSCI</p>
                <p>member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex1}>
              <div style={{ position: "relative" }}>
                <div className={styles.flex1Heading}>
                  <h5 styles={{ display: "inline" }}>
                    Instant appointment with experts , Guaranteed.
                  
                  </h5>
                  <div className={styles.flex1Heading2ndH2}></div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span><span className={styles.bold_txt}>100,000</span> Verified experts</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span><span className={styles.bold_txt}>3K+</span> Farmers recommendations</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span><span className={styles.bold_txt}>25K</span> Farmers/year</span>
                  </div>
                </div>
                <div className={`${styles.readMoreBox} ${styles.readMoreBox2}`}>
                  <a href="/">Find me the right expert</a>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={styles.testimonials}>
                    <div
                      className={styles.slide1}
                      style={{
                        left: `${position1 * -460}px`,
                      }}
                    >
                      {commentArr1.map((el) => (
                        <div key={el.name} className={styles.testimonialsearch}>
                          <div className={styles.starsDiv}>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                          </div>
                          <div className={styles.review_text}>{el.summary}</div>
                          <div>
                            <div className={styles.profileIcon}>
                              <i className={el.personIcon}></i>
                            </div>
                            <span className={styles.reviewer_name}>{el.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-prevTest"]} ${styles["ctrl-btnTestWhite"]}`}
                    onClick={handlePrev1}
                    style={{ visibility: position1 === 0 && "hidden" }}
                  >
                    <i className="ion-chevron-left" />
                  </button>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-next-Test"]} ${styles["ctrl-btnTestWhite"]}`}
                    onClick={handleNext1}
                    style={{ visibility: position1 === 3 && "hidden" }}
                  >
                    <i className="ion-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                <img
                   src={require('./von.png')}
                    alt="img"
                  />	
                </div>
              </div>
            </div>
          </div>
          <div className={styles.iconBox}>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
          </div>
        </div>
      </div>

      <div className={styles.fourthPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex2}>
              <div>
                <div>
                <img 
                   src={require('./Group 15.png')}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.flex1} ${styles.flex12}`}>
              <div>
                <div className={styles.flex1Heading}>
                  <h6 styles={{ display: "inline" }}>
                    Skip the waiting room.<strong>Consult with a Expert</strong>
                  </h6>
                  <div className={styles.flex1Heading2ndH2}></div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>
                      Fees starting at <span className={styles.bold_txt}><span className="rupees_symbol"> ₹</span>99</span>
                    </span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Verified experts respond in <span className={styles.bold_txt}>5 minutes</span></span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span><span className={styles.bold_txt}>100%</span> Private and confidential</span>
                  </div>
                </div>
                <div className={styles.spanBox}>
                  <div className={`${styles.readMoreBox}`}>
                    <a href="/">Consult now</a>
                  </div>
                  <i
                    className={`ion-ios7-circle-filled ${styles.cercleIcon}`}
                  ></i>
                  <span>5000+ experts online</span>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={styles.testimonials}>
                    <div
                      className={styles.slide1}
                      style={{
                        left: `${position1 * -460}px`,
                      }}
                    >
                      {commentArr1.map((el, indx) => (
                        <div key={indx} className={styles.testimonialsearch}>
                          <div className={styles.starsDiv}>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                          </div>
                          <div className={styles.review_text}>{el.summary}</div>
                          <div>
                            <div className={styles.profileIcon}>
                              <i className={el.personIcon}></i>
                            </div>
                            <span className={styles.reviewer_name}>{el.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-prevTest"]}`}
                    onClick={handlePrev1}
                    style={{ visibility: position1 === 0 && "hidden" }}
                  >
                    <i className="ion-chevron-left" />
                  </button>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-next-Test"]}`}
                    onClick={handleNext1}
                    style={{ visibility: position1 === 3 && "hidden" }}
                  >
                    <i className="ion-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eighthPage}>
        <div className={styles.secondPageSubject}>
          <h2 className={styles.secondPageSubjectHeading}>
            Read top articles from Agricultural Experts
          </h2>
          <div className={styles.secondPageSubjectData}>
            <div className={styles.slider}>
              <div
                className={styles.slide}
                style={{ left: `${position * -350}px` }}
              >
                {arr.map((el, indx) => (
                  <div key={indx} className={styles.item}>
                    <div className={styles.imageBox}>
                      <img src={el.img} alt="img" />
                    </div>
                    <div className={styles.detailBox}>
                      <h2>{el.title}</h2>
                      <span>{el.spanDoctors}</span>
                      <br />
                      <span>{el.likeSpan}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`${styles["ctrl-btn"]} ${styles["pro-prev"]}`}
              onClick={handlePrev}
              style={{ visibility: position === 0 && "hidden" }}
            >
              <i className="ion-ios7-arrow-back" />
            </button>
            <button
              className={`${styles["ctrl-btn"]} ${styles["pro-next"]}`}
              onClick={handleNext}
              style={{ visibility: position === 2 && "hidden" }}
            >
              <i className="ion-ios7-arrow-forward" />
            </button>
          </div>
          <div className={styles.secondPageSubjectReadmoreDiv}>
            <div className={styles.secondPageSubjectReadmore} style={{}}>
              More articles
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifthPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h4>Get all your Products.</h4>
                  
                  <h5>
                    <strong>Everytime. On time.</strong>
                  </h5>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Guaranteed availability</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Over <span className={styles.bold_txt}>130,000+</span> genuine products</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Home delivery in <span className={styles.bold_txt}>24hrs</span> </span>
                  </div>
                </div>
                <div className={styles.readMoreBox4}>
                  <div
                    className={`${styles.readMoreBox} ${styles.readMoreBox3}`}
                  >
                    <a href="/">Order Farming Products</a>
                  </div>
                  <i
                    className={`ion-ios7-circle-filled ${styles.cercleIcon} ${styles.cercleIcon2}`}
                  ></i>
                  <div className={styles.spanBox2}>
                    <span>
                      Last order delivered<span className={styles.bold_txt}> 2 mins 
                      ago</span> in Amritsar, Punjab
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                   src={require('./sabziyan.png')}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sixthPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src="//www.practostatic.com/web-assets/home/assets/images/record.bfc5241f9b15340a32c98eb360d1005a.svg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h4>All your farm records</h4>
                  <h5>In one secure website.</h5>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>256-bit end to end encryption</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Records are accessible only by you</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Access your records across 80+ centers</span>
                  </div>
                </div>
                <div className={`${styles.readMoreBox} ${styles.readMoreBox5}`}>
                  <a href="/">Find out more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h4>Leading Agriculture Consultants.</h4>
                  <h6>Trust us for Business</h6>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Get seen by 3K+ experts on Krishi Konnect.com</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>
                      The most advanced software for farmers and experts
                    </span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>
                      State of the art business analytics for enterprises
                    </span>
                  </div>
                </div>
                <div className={styles.spanBox}>
                  <div className={styles.readMoreBox}>
                    <a href="/">Learn more</a>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={styles.testimonials}>
                    <div
                      className={styles.slide1}
                      style={{
                        left: `${position1 * -460}px`,
                      }}
                    >
                      {commentArr1.map((el, indx) => (
                        <div key={indx} className={styles.testimonialsearch}>
                          <div className={styles.starsDiv}>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                            <i className={`${el.starIcon} ${styles.stars}`}></i>
                          </div>
                          <div className={styles.review_text}>{el.summary}</div>
                          <div>
                            <div className={styles.profileIcon}>
                              <i className={el.personIcon}></i>
                            </div>
                            <span className={styles.reviewer_name}>{el.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-prevTest"]}`}
                    onClick={handlePrev1}
                    style={{ visibility: position1 === 0 && "hidden" }}
                  >
                    <i className="ion-chevron-left" />
                  </button>
                  <button
                    className={`${styles["ctrl-btnTest"]} ${styles["pro-next-Test"]}`}
                    onClick={handleNext1}
                    style={{ visibility: position1 === 3 && "hidden" }}
                  >
                    <i className="ion-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.flex2} ${styles.flex4}`}>
              <div>
                <div>
                  <img
                     src={require('./chat.png')}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.seventhPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src={require('./Group 1.png')}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h4>Download the Krishi Konnect app</h4>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Book appointments and crop tests</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Order Products</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Consult experts online</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Set appointment reminders</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Store farm records</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Read agriculture activities tips</span>
                  </div>
                </div>
                <div className={`${styles.appDownloadIcons}`}>
                  <a href="https://app.appsflyer.com/com.practo.fabric?pid=web&amp;amp;c=homepage">
                    <img
                      src="//www.practostatic.com/web-assets/home/assets/images/google_badge.bfeb9607baa4c7c0b6897ad8c3adbebe.png"
                      alt="Get it on Google Play"
                    />
                  </a>
                  <a href="https://app.appsflyer.com/id953772015?pid=web&amp;amp;c=homepage">
                    <img
                      src="//www.practostatic.com/web-assets/home/assets/images/appstore_badge.adc5473a4cad8e6b9d80f29477b68ae5.png"
                      alt="Get it on App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}