import React from 'react';
import instaLogo from './mediaLogo/instagram.svg';
import linkedinLogo from './mediaLogo/linkedin.svg';
import twitterxLogo from './mediaLogo/twitterx.svg';
import githubLogo from './mediaLogo/github.svg';

export const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Where Creativity Meets Collaboration, Strength in Diversity, Unity in Purpose
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Team member 1 */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
              src="https://res.cloudinary.com/dxhmppter/image/upload/v1703098410/SAVE_20220111_160526_iestyl.jpg"
              alt="Hemant Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" target="blank">
                Hemant Arya
              </a>
            </h3>
            <ul className="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/hemantarya.194?igshid=YzVkODRmOTdmMw=="
                  target="blank"
                  className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={instaLogo} alt="instagram Logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/hemantarya194?t=tu6_oRGAKbOKQEn7lpASfA&s=08"
                  target="blank"
                  className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={twitterxLogo} alt="twitterx logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hemantarya194"
                  target="blank"
                  className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                >
                  <div className="w-6 h-6">
                    <img src={githubLogo} alt="github Logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hemant-arya-970207240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="blank"
                  className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={linkedinLogo} alt="linkedin logo" />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Team member 2 */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
              src="https://res.cloudinary.com/dya8zifir/image/upload/v1703013460/IMG_20231126_140422_2_qp5sue.jpg"
              alt="Jitesh Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" target="blank">
                Jitesh Ayam
              </a>
            </h3>
            <ul className="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/ay_am_aj_?igshid=YzVkODRmOTdmMw=="
                  target="blank"
                  className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={instaLogo} alt="instagram logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={twitterxLogo} alt="twitterx logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                >
                  <div className="w-6 h-6">
                    <img src={githubLogo} alt="github Logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jitesh-ayam-b2ba30203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="blank"
                  className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={linkedinLogo} alt="linkedin logo" />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Team member 3 */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://res.cloudinary.com/dya8zifir/image/upload/v1712469876/ashu.jpg"
              alt="Ashutosh Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" target="blank">
                Ashutosh
              </a>
            </h3>
            <ul className="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/i_am_ashutosh__9?igshid=YzVkODRmOTdmMw=="
                  target="blank"
                  className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={instaLogo} alt="instagram logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={twitterxLogo} alt="twitterx logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                >
                  <div className="w-6 h-6">
                    <img src={githubLogo} alt="github Logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashutosh-choubey-041177225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="blank"
                  className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={linkedinLogo} alt="linkedin logo" />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Team member 4 */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
              src="https://res.cloudinary.com/dya8zifir/image/upload/v1703012278/Amithesh.png"
              alt="Amithesh Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#" target="blank">
                Amitesh Keshri
              </a>
            </h3>
            <ul className="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={instaLogo} alt="instagram logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={twitterxLogo} alt="twitterx logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                >
                  <div className="w-6 h-6">
                    <img src={githubLogo} alt="github Logo" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="blank"
                  className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                >
                  <div className="w-6 h-6">
                    <img src={linkedinLogo} alt="linkedin logo" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
