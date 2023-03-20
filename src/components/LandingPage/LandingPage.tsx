import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import useMouseHover from "../../hooks/useMouseHover"

const LargeLeftPane = () => {
  return (
    <>
      <div>
        <p className="text-gray-500 text-sm uppercase">Hi, I'm</p>
        <h1 className="text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Leo Paz</h1>
      </div>
      <div className="absolute flex flex-row bottom-5 space-x-2">
        {/* social media icons */}
        <a className="social-link" href="https://www.linkedin.com/in/leopaz/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>


      </div>
    </>
  )
}

const UpperRightPane = () => {
  return (
    <div>
      <p className="text-gray-500 text-sm uppercase">Hi, I'm</p>
      <h1 className="text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Work</h1>
    </div>
  )
}

const LowerRightPane = () => {
  return (
    <div>
      <p className="text-gray-500 text-sm uppercase">Hi, I'm</p>
      <h1 className="text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Fun</h1>
    </div>
  )
}

const LandingPage = () => {
  useMouseHover();

  return (
    // <div className="flex w-full h-screen font-fredoka font-medium">
    //   <div className="w-full bg-gray-50 grid place-content-center place-items-center">
    //     {/* First column */}
    //     <LargeLeftPane />
    //   </div>
    //   <div className="w-full lg:w-1/2">
    //     {/* Second column */}
    //     <div className="flex flex-col h-full">
    //       <div className="w-full h-1/2 bg-gray-100 grid place-content-center place-items-center">
    //         {/* First row */}
    //         <UpperRightPane />
    //       </div>
    //       <div className="w-full h-1/2 bg-gray-200 grid place-content-center place-items-center">
    //         {/* Second row */}
    //         <LowerRightPane />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div id="cards" className="font-fredoka flex flex-row space-x-2 h-screen py-4">
      <div className="card w-1/2 tw-card group">
        <div className="card-content tw-card-content">
          <div className="card-info-wrapper">
            <div className="card-info">
              {/* rounded imamge */}
              <img className="rounded-full w-40 h-40 object-fit aspect-square grayscale" src="/headshot.jpeg" alt="Leo Paz" />
              <div
                className="card-info-title mt-5">
                <h4 className="card-subtitle text-center -ml-6">Hi, I'm</h4>
                <h1 className="card-title from-cyan-400 to-blue-400">Leo.</h1>
              </div>
            </div>
          </div>
          <div
            className="absolute invisible cursor-pointer z-40 flex-row bottom-5 space-x-2 transform flex 
              opacity-0 group-hover:visible group-hover:opacity-100 ease-in-out duration-500"
          >
            {/* social media icons */}
            <a className="social-link" href="https://github.com/leo-paz" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/leo-paz/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="social-link" href="https://twitter.com/LeosReal" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="social-link" href="mailto:omarleopaz@hotmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>


          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col space-y-2 h-full">

        <div className="card w-full tw-card h-1/2 group">
          <div className="card-content tw-card-content">
            <div className="card-image">
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-unicorn"></i>
                <div className="card-info-title">
                  <h4 className="card-subtitle">My</h4>
                  <h1 className=" card-title from-pink-500 to-indigo-400">
                    Work<span className="question-mark opacity-100 group-hover:opacity-0 ">.</span><span className="question-mark opacity-0 group-hover:opacity-100">?</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full tw-card h-1/2 group">
          <div className="card-content tw-card-content">
            <div className="card-image">
              <i className="fa-duotone fa-blender-phone"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-blender-phone"></i>
                <div className="card-info-title">
                  <h4 className="card-subtitle">A little</h4>
                  <h1 className=" card-title from-lime-400 to-orange-400">About.</h1>
                  <h4 className="card-subtitle">me</h4>
                </div>.
              </div>
            </div>
            <div
              className="absolute invisible cursor-pointer z-40 flex-row bottom-5 space-x-2 transform flex 
              opacity-0 group-hover:visible group-hover:opacity-100 ease-in-out duration-500"
            >
              {/* social media icons */}
              <h4 className="card-subtitle">Loading...</h4>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;