
const Fyq = () => {
  const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    var i;
    const itemToggle = this.getAttribute("aria-expanded");
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }
    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }
  items.forEach((item) => item.addEventListener("click", toggleAccordion));
  return (
    <div className="FAQcontainer">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">Can multiple users use CollabEd?</span>
            <span className="icon" aria-hidden="true" />
          </button>
          <div className="accordion-content">
            <p>
              Yes it is possible for a group of users to collaborate on the
              same platform with real-time collaborations and cursor
              tracking with features of comments and version control.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-2" aria-expanded="false">
            <span className="accordion-title"> What can I expect from CollabEd?</span>
            <span className="icon" aria-hidden="true" />
          </button>
          <div className="accordion-content">
            <p>
              One can expect full freedom in seamless editing and document
              formatting options along with live chat options which can help
              one to keep connected with their group with regards to updates
              and important changes, with further more changes involving
              adding code to your document and many more.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-3" aria-expanded="false">
            <span className="accordion-title">
              How do I connect with my group?</span>
            <span className="icon" aria-hidden="true" />
          </button>
          <div className="accordion-content">
            <p>
              CollabEd provides a real-time chat option which can help
              individuals connect during document creation and formatting
              sessions.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-4" aria-expanded="false">
            <span className="accordion-title">Is CollabEd free for use for the general public?</span>
            <span className="icon" aria-hidden="true" />
          </button>
          <div className="accordion-content">
            <p>
              Yes! CollabEd is absolutely free to use for the general public
              with no pricey hiccups in your way!
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-5" aria-expanded="false">
            <span className="accordion-title"> Is CollabEd secure?</span>
            <span className="icon" aria-hidden="true" />
          </button>
          <div className="accordion-content">
            <p>
              Yes. You can securely discuss confidential information in
              CollabEd. CollabEd offers multiple ways to ensure that your
              information, conversations, and files stay safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fyq;


