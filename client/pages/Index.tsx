import React, { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full h-14 bg-epri-dark-blue flex items-center justify-between px-4 relative">
        <div className="flex items-center gap-5">
          {/* EPRI Logo */}
          <div className="text-white font-bold text-xl">
            <svg
              width="110"
              height="24"
              viewBox="0 0 110 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.3055 9.65961H9.14133C7.96836 9.65961 7.02128 10.7047 7.02128 11.9973C7.02128 13.2898 7.96836 14.3405 9.14133 14.3405H28.3055C29.4751 14.3405 30.4255 13.2898 30.4255 11.9973C30.4255 10.7047 29.4751 9.65961 28.3055 9.65961Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.5437 18.1127H6.00863C5.54962 18.1127 4.47053 18.1127 4.4151 16.851C4.41683 16.8859 4.40298 5.93002 4.40298 5.93002C4.45667 4.71367 5.53576 4.71367 5.99477 4.71367H30.5714C31.7821 4.71367 32.766 3.72213 32.766 2.50229C32.766 1.28595 31.7821 0.297882 30.5714 0.297882H5.98438C1.59352 0.297882 0 3.66636 0 5.93525C0 5.94048 0.0242493 16.8981 0.0242493 16.8981C0.0242493 17.1298 0.0710158 19.2715 1.6732 20.8852C2.4232 21.6362 3.78116 22.5319 6.00863 22.5319H30.5437C31.7579 22.5319 32.74 21.5421 32.74 20.324C32.74 19.1042 31.7579 18.1127 30.5437 18.1127Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.9816 10.2796C42.7866 10.2796 41.817 11.2548 41.817 12.461C41.817 13.6688 42.7866 14.6079 43.9816 14.6079H60.8118C61.1379 14.6079 64.057 14.5527 66.0782 12.5144C67.251 11.3341 67.8724 9.72822 67.8724 7.86905C67.8724 5.4878 66.8686 4.04562 66.0304 3.25646C63.9529 1.30253 60.9911 1.4576 60.6616 1.48C60.7111 1.47483 60.7606 1.47483 60.8118 1.47483H41.0061C36.6803 1.47483 35.1064 4.80892 35.1064 7.04888V21.519C35.1064 22.7252 36.076 23.7021 37.2727 23.7021C38.4676 23.7021 39.4373 22.7252 39.4373 21.519V7.04888C39.4919 5.84103 40.5537 5.84103 41.0061 5.84103L60.962 5.82724C62.1894 5.82724 63.1813 6.81972 63.1813 8.05514C63.1813 9.29229 62.1894 10.2951 60.962 10.2951L43.9816 10.2796Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M105.319 2.46435V20.3655C105.319 21.5624 106.368 22.5319 107.66 22.5319C108.951 22.5319 110 21.5624 110 20.3655V2.46435C110 1.26741 108.951 0.297882 107.66 0.297882C106.368 0.297882 105.319 1.26741 105.319 2.46435Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M95.9612 9.79364C97.1673 9.79364 98.1457 8.78506 98.1457 7.57341C98.1457 6.36004 97.1673 5.39071 95.9612 5.39071L75.9675 5.40095C75.514 5.40095 74.4574 5.40095 74.4047 6.64504V20.9255C74.4047 22.1167 73.4399 23.0895 72.2508 23.0895C71.0634 23.0895 70.0985 22.1167 70.0985 20.9255V6.66893C70.0985 4.43163 71.6613 1.09871 75.9675 1.09871H95.7862C95.7421 1.09871 95.6996 1.10554 95.6537 1.10895C95.9833 1.08847 98.9254 0.962188 100.984 2.90596C101.817 3.69269 102.809 5.12278 102.809 7.47613C102.809 9.33628 102.19 10.9353 101.017 12.1026C99.0206 14.0856 96.1701 14.0959 95.8831 14.0908L83.6236 14.0959C82.4073 14.0959 81.4153 15.0857 81.4153 16.3127C81.4153 17.538 82.4073 18.5551 83.6236 18.5551L100.408 18.5483C101.594 18.5483 102.561 19.492 102.561 20.6832C102.561 21.8812 101.594 22.8505 100.408 22.8505H84.0313C84.0771 22.8505 80.7698 22.9871 78.7058 21.0399C77.8242 20.2105 76.8237 18.6848 76.8237 16.1318C76.8237 13.7733 78.0315 12.3211 78.8689 11.536C80.9345 9.60421 84.0924 9.79706 84.0431 9.79706L95.9612 9.79364Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-6 text-white text-base">
            <span className="hover:text-epri-light-blue cursor-pointer">
              Thought Leadership
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer">
              Research
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer">
              Emerging Priorities
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer">
              Events & Training
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer">
              About
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer">
              Resource Center
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer">
              Newsroom
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer">
              Careers
            </span>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4 text-white">
          {/* Hamburger Menu Button - Only on tablet/mobile */}
          <button
            className="lg:hidden w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 my-1 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
          <div className="w-5 h-5 cursor-pointer">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z" />
            </svg>
          </div>
          <div className="w-5 h-5 cursor-pointer">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
            </svg>
          </div>
          <span className="hidden md:block text-base">Log In or Register</span>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-epri-dark-blue border-t border-epri-lighter-blue transition-all duration-300 z-50 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div className="flex flex-col py-4 px-4 space-y-4 text-white">
            <span className="hover:text-epri-light-blue cursor-pointer py-2 border-b border-epri-lighter-blue/20">
              Thought Leadership
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer py-2 border-b border-epri-lighter-blue/20">
              Research
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer py-2 border-b border-epri-lighter-blue/20">
              Emerging Priorities
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer py-2 border-b border-epri-lighter-blue/20">
              Events & Training
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer py-2 border-b border-epri-lighter-blue/20">
              About
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer py-2 border-b border-epri-lighter-blue/20">
              Resource Center
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer py-2 border-b border-epri-lighter-blue/20">
              Newsroom
            </span>
            <span className="hover:text-epri-light-blue cursor-pointer py-2">
              Careers
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-b from-transparent to-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/9695b4537d53927092b62040d7bbf11badf84b34?width=3840')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 lg:pt-32">
          <div className="flex items-start gap-4">
            {/* Orange accent bar */}
            <div
              className="w-2 h-40 bg-epri-orange flex-shrink-0"
              style={{ marginRight: "16px", marginTop: "16px" }}
            />

            {/* Content */}
            <div className="flex-1">
              {/* Main heading */}
              <h1 className="text-5xl lg:text-8xl font-bold text-epri-lighter-blue leading-tight max-w-5xl mb-8">
                Follow the science.
                <br />
                Empower the public.
              </h1>

              {/* Description */}
              <p className="text-xl text-epri-dark-blue max-w-2xl leading-relaxed mb-8">
                EPRI is a global, independent research nonprofit that brings
                together hard science and rigorous objectivity to secure a
                resilient energy future. Everything we do is for the public—so
                we never advocate for any company, sector, or technology.
              </p>

              {/* CTA Button */}
              <button className="bg-epri-lighter-blue text-white px-6 py-3 rounded hover:bg-epri-dark-blue transition-colors shadow-lg">
                Explore our Research
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Windmill Image */}
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44469e87386b2b0e411aecf55199fa38120b17f6?width=1416"
                  alt="Wind energy landscape"
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>

            {/* Right - Content and Stats */}
            <div className="space-y-8">
              {/* Blue accent bar */}
              <div className="w-2 h-24 bg-epri-lighter-blue" />

              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-epri-orange leading-tight">
                  Collaborating today to build our energy future
                </h2>
                <p className="text-xl text-epri-dark-blue leading-relaxed">
                  By partnering with industry, academia, and government, we
                  tackle the critical energy challenges of today and the
                  opportunities of tomorrow.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-epri-lighter-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M34 24H24V34H34V24ZM32 2V6H16V2H12V6H10C7.78 6 6.02 7.8 6.02 10L6 38C6 40.2 7.78 42 10 42H38C40.2 42 42 40.2 42 38V10C42 7.8 40.2 6 38 6H36V2H32ZM38 38H10V16H38V38Z"
                        fill="#0C3048"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-epri-orange mb-2">
                    1972
                  </div>
                  <div className="text-sm text-epri-dark-blue">
                    Year Founded
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-epri-lighter-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M44 20V44H4V20L18 14V18L28 14V20H44ZM34.4 17L36 4H42L43.6 17H34.4ZM22 36H26V28H22V36ZM14 36H18V28H14V36ZM34 28H30V36H34V28Z"
                        fill="#0C3048"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-epri-orange mb-2">
                    450
                  </div>
                  <div className="text-sm text-epri-dark-blue">
                    Number of companies we collaborate with
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-epri-lighter-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M24 44C21.2333 44 18.6333 43.475 16.2 42.425C13.7667 41.375 11.65 39.95 9.85 38.15C8.05 36.35 6.625 34.2333 5.575 31.8C4.525 29.3667 4 26.7667 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05 11.65 9.85 9.85C11.65 8.05 13.7667 6.625 16.2 5.575C18.6333 4.525 21.2333 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7667 43.475 29.3667 42.425 31.8C41.375 34.2333 39.95 36.35 38.15 38.15C36.35 39.95 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 40C28.4667 40 32.25 38.45 35.35 35.35C38.45 32.25 40 28.4667 40 24C40 23.7667 39.9917 23.525 39.975 23.275C39.9583 23.025 39.95 22.8167 39.95 22.65C39.7833 23.6167 39.3333 24.4167 38.6 25.05C37.8667 25.6833 37 26 36 26H32C30.9 26 29.9583 25.6083 29.175 24.825C28.3917 24.0417 28 23.1 28 22V20H20V16C20 14.9 20.3917 13.9583 21.175 13.175C21.9583 12.3917 22.9 12 24 12H26C26 11.2333 26.2083 10.5583 26.625 9.975C27.0417 9.39167 27.55 8.91667 28.15 8.55C27.4833 8.38333 26.8083 8.25 26.125 8.15C25.4417 8.05 24.7333 8 24 8C19.5333 8 15.75 9.55 12.65 12.65C9.55 15.75 8 19.5333 8 24H18C20.2 24 22.0833 24.7833 23.65 26.35C25.2167 27.9167 26 29.8 26 32V34H20V39.5C20.6667 39.6667 21.325 39.7917 21.975 39.875C22.625 39.9583 23.3 40 24 40Z"
                        fill="#0C3048"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-epri-orange mb-2">
                    45
                  </div>
                  <div className="text-sm text-epri-dark-blue">
                    Number of countries we work in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-epri-dark-blue tracking-wider mb-4">
              TRENDING TOPICS
            </h2>
            <div className="text-right text-epri-dark-blue">
              <p>View all research</p>
              <p>View all thought leadership</p>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Topic 1 */}
            <div className="flex gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb157a1234c46b8cba634d593e4c9f583d9d3b55?width=908"
                alt="Topic"
                className="w-72 h-96 object-cover rounded-lg"
              />
              <div className="bg-epri-dark-blue p-6 rounded-lg flex-1 text-white">
                <div className="text-sm text-epri-light-blue mb-6">
                  INTERACTIVE REPORT
                </div>
                <h3 className="text-xl leading-relaxed">
                  Powering Intelligence: Analyzing Artificial Intelligence and
                  Data Center Energy Consumption
                </h3>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="flex gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3dc59621353e63d5b6ba761b7f2a7bc68f569f7?width=908"
                alt="Topic"
                className="w-72 h-96 object-cover rounded-lg"
              />
              <div className="bg-white p-6 rounded-lg flex-1 border">
                <div className="text-sm text-epri-dark-blue mb-6">
                  INTERACTIVE REPORT
                </div>
                <h3 className="text-xl text-epri-lighter-blue leading-relaxed">
                  Powering Intelligence: Analyzing Artificial Intelligence and
                  Data Center Energy Consumption
                </h3>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="flex gap-6">
              <div className="bg-white p-6 rounded-lg flex-1 border">
                <div className="text-sm text-epri-dark-blue mb-6">
                  INTERACTIVE REPORT
                </div>
                <h3 className="text-xl text-epri-lighter-blue leading-relaxed">
                  Powering Intelligence: Analyzing Artificial Intelligence and
                  Data Center Energy Consumption
                </h3>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b57607b0e598a349c391f5726773db51994ab98?width=908"
                alt="Topic"
                className="w-72 h-96 object-cover rounded-lg"
              />
            </div>

            {/* Topic 4 */}
            <div className="flex gap-6">
              <div className="bg-epri-orange/10 p-6 rounded-lg flex-1">
                <div className="text-sm text-epri-dark-blue mb-6">
                  INTERACTIVE REPORT
                </div>
                <h3 className="text-xl text-epri-lighter-blue leading-relaxed">
                  Powering Intelligence: Analyzing Artificial Intelligence and
                  Data Center Energy Consumption
                </h3>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54b5796933d22d0e291e22a3e459ead2aa43a7c2?width=908"
                alt="Topic"
                className="w-72 h-96 object-cover rounded-lg"
              />
            </div>

            {/* Topic 5 */}
            <div className="flex gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/72599b4c4054acebaed44b961d83f85bc4d0c27e?width=908"
                alt="Topic"
                className="w-72 h-96 object-cover rounded-lg"
              />
              <div className="bg-epri-lighter-blue p-6 rounded-lg flex-1 text-white">
                <div className="text-sm text-epri-beige mb-6">
                  INTERACTIVE REPORT
                </div>
                <h3 className="text-xl leading-relaxed">
                  Powering Intelligence: Analyzing Artificial Intelligence and
                  Data Center Energy Consumption
                </h3>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="flex gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85871c3191b7f96c867c1d4a91168909d6e2d85?width=908"
                alt="Topic"
                className="w-72 h-96 object-cover rounded-lg"
              />
              <div className="bg-white p-6 rounded-lg flex-1 border">
                <div className="text-sm text-epri-dark-blue mb-6">
                  INTERACTIVE REPORT
                </div>
                <h3 className="text-xl text-epri-lighter-blue leading-relaxed">
                  Powering Intelligence: Analyzing Artificial Intelligence and
                  Data Center Energy Consumption
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Priorities Section */}
      <section className="py-20 bg-epri-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-epri-lighter-orange tracking-wider">
              EMERGING PRIORITIES
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="w-2 h-20 bg-epri-lighter-orange mb-6" />
              <h3 className="text-3xl font-bold leading-tight">
                Addressing the electricity industry's urgent needs
              </h3>
              <p className="text-xl leading-relaxed">
                EPRI's emerging priorities are strategic energy initiatives
                where we work in close collaboration with global stakeholders to
                address pressing electricity needs. These areas of focus are
                essential to our mission of ensuring that society has access to
                clean, safe, reliable, affordable, and equitable electricity
                worldwide.
              </p>
            </div>

            {/* Right - Priority List */}
            <div className="space-y-1">
              {[
                "Low-Carbon Resources Initiative",
                "Climate READi Framework",
                "EVs2Scale2030",
                "Data Center Flexibility Hubs (DCFlex)",
                "Virtual Power Plant Integration",
                "Clean Grid & Energy Markets",
                "Grid-Enhancing Technologies for a Smart Energy Transition (GET SET)",
              ].map((priority, index) => (
                <div
                  key={index}
                  className="border-b border-epri-lighter-blue py-4"
                >
                  <div className="text-xl">{priority}</div>
                </div>
              ))}

              <div className="pt-8">
                <button className="bg-epri-lighter-blue text-white px-6 py-3 rounded hover:bg-epri-light-blue transition-colors">
                  View all Emerging Priorities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-epri-lighter-blue tracking-wider">
              LATEST NEWS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured News */}
            <div className="space-y-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3826947ef9fec4ad128ea468fa65df768f28c18?width=1542"
                alt="Featured news"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="space-y-4">
                <div className="text-sm text-epri-dark-blue uppercase">
                  August 23, 2024
                </div>
                <h3 className="text-4xl font-bold text-epri-lighter-blue leading-tight">
                  EPRI Announces Executive Leadership Changes
                </h3>
                <p className="text-epri-dark-blue leading-relaxed">
                  Rob Chapman will become executive vice president and chief
                  commercial customer officer, overseeing member and stakeholder
                  engagement and innovation.
                </p>
              </div>
            </div>

            {/* News List */}
            <div className="space-y-1">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index} className="border-b border-epri-beige py-6">
                  <div className="text-sm text-epri-darkest-blue uppercase mb-2">
                    August 23, 2024
                  </div>
                  <h4 className="text-xl text-epri-slate leading-relaxed">
                    Technology Startups on Display at EPRI's 2024 Incubatenergy
                    Labs Demo Day
                  </h4>
                </div>
              ))}

              <div className="pt-8 text-right">
                <button className="bg-epri-lighter-blue text-white px-6 py-3 rounded hover:bg-epri-dark-blue transition-colors">
                  View all News
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Training Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs font-normal text-gray-500 tracking-widest uppercase mb-8">
              EVENTS & TRAININGS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Content - Events Calendar */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-epri-slate mb-3">
                Events Calendar
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">
                Rob Chapman will become executive vice president and chief
                commercial customer officer, overseeing member and stakeholder
                engagement and innovation.
              </p>
              <button className="bg-epri-slate text-white px-4 py-2 text-xs hover:bg-epri-dark-blue transition-colors">
                View the Events Calendar
              </button>
            </div>

            {/* Right Content - Training */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-epri-slate mb-3">
                Training and development opportunities
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">
                Rob Chapman will become executive vice president and chief
                commercial customer officer, overseeing member and stakeholder
                engagement and innovation.
              </p>
              <button className="bg-epri-slate text-white px-4 py-2 text-xs hover:bg-epri-dark-blue transition-colors">
                View all Training opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c767471f7f7e159e5ccf78f9c275a2891f6c3d5?width=1542"
              alt="EPRI careers"
              className="w-full h-96 object-cover rounded-2xl"
            />

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-epri-lighter-blue">
                Your EPRI career starts here.
              </h3>
              <p className="text-xl text-epri-dark-blue leading-relaxed">
                Want to help build a resilient energy future that benefits both
                people and the planet? Join our diverse team. We credit our
                success and growth to our 1,300 employees from 16 countries --
                who speak 31 languages and bring a broad cross-section of
                backgrounds to our work every day.
              </p>
              <button className="bg-epri-lighter-blue text-white px-6 py-3 rounded hover:bg-epri-dark-blue transition-colors">
                View EPRI Careers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="text-epri-slate">
              <svg width="110" height="24" viewBox="0 0 110 24" fill="none">
                <rect width="109.767" height="23.4042" fill="currentColor" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.2455 9.36182H9.12196C7.95148 9.36182 7.0064 10.4069 7.0064 11.6995C7.0064 12.992 7.95148 14.0427 9.12196 14.0427H28.2455C29.4127 14.0427 30.3611 12.992 30.3611 11.6995C30.3611 10.4069 29.4127 9.36182 28.2455 9.36182Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.479 17.8148H5.9959C5.53786 17.8148 4.46106 17.8148 4.40575 16.5531C4.40748 16.588 4.39365 5.63214 4.39365 5.63214C4.44723 4.41579 5.52404 4.41579 5.98207 4.41579H30.5066C31.7148 4.41579 32.6966 3.42424 32.6966 2.20441C32.6966 0.988064 31.7148 0 30.5066 0H5.9717C1.59015 0 0 3.36848 0 5.63737C0 5.64259 0.0241979 16.6002 0.0241979 16.6002C0.0241979 16.8319 0.0708654 18.9736 1.66966 20.5873C2.41806 21.3383 3.77314 22.2341 5.9959 22.2341H30.479C31.6906 22.2341 32.6706 21.2442 32.6706 20.0262C32.6706 18.8063 31.6906 17.8148 30.479 17.8148Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.8884 9.98194C42.696 9.98194 41.7284 10.9572 41.7284 12.1633C41.7284 13.3712 42.696 14.3102 43.8884 14.3102H60.683C61.0083 14.3102 63.9213 14.2551 65.9382 12.2167C67.1085 11.0364 67.7286 9.43056 67.7286 7.5714C67.7286 5.19015 66.7269 3.74796 65.8905 2.95881C63.8174 1.00487 60.8618 1.15995 60.5331 1.18235C60.5825 1.17718 60.6319 1.17718 60.683 1.17718H40.9192C36.6026 1.17718 35.032 4.51127 35.032 6.75123V21.2214C35.032 22.4275 35.9996 23.4045 37.1937 23.4045C38.3862 23.4045 39.3537 22.4275 39.3537 21.2214V6.75123C39.4082 5.54337 40.4678 5.54337 40.9192 5.54337L60.8329 5.52959C62.0577 5.52959 63.0474 6.52206 63.0474 7.75749C63.0474 8.99463 62.0577 9.99745 60.8329 9.99745L43.8884 9.98194Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M105.096 2.16647V20.0676C105.096 21.2645 106.143 22.2341 107.432 22.2341C108.72 22.2341 109.767 21.2645 109.767 20.0676V2.16647C109.767 0.969523 108.72 0 107.432 0C106.143 0 105.096 0.969523 105.096 2.16647Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M95.7579 9.49571C96.9614 9.49571 97.9378 8.48713 97.9378 7.27547C97.9378 6.06211 96.9614 5.09278 95.7579 5.09278L75.8066 5.10302C75.354 5.10302 74.2996 5.10302 74.2471 6.3471V20.6276C74.2471 21.8188 73.2843 22.7915 72.0977 22.7915C70.9128 22.7915 69.95 21.8188 69.95 20.6276V6.371C69.95 4.1337 71.5095 0.800781 75.8066 0.800781H95.5833C95.5392 0.800781 95.4969 0.807607 95.4511 0.811021C95.7799 0.790542 98.7158 0.664256 100.77 2.60803C101.601 3.39475 102.591 4.82485 102.591 7.1782C102.591 9.03835 101.974 10.6374 100.803 11.8047C98.8108 13.7877 95.9664 13.7979 95.6799 13.7928L83.4464 13.7979C82.2327 13.7979 81.2428 14.7878 81.2428 16.0148C81.2428 17.2401 82.2327 18.2572 83.4464 18.2572L100.196 18.2504C101.379 18.2504 102.343 19.1941 102.343 20.3853C102.343 21.5833 101.379 22.5526 100.196 22.5526H83.8532C83.899 22.5526 80.5986 22.6891 78.5391 20.7419C77.6593 19.9126 76.6609 18.3869 76.6609 15.8339C76.6609 13.4754 77.8661 12.0231 78.7018 11.2381C80.7631 9.30628 83.9142 9.49912 83.8651 9.49912L95.7579 9.49571Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <div className="w-8 h-8 bg-epri-slate rounded-full flex items-center justify-center text-white cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-epri-slate rounded-full flex items-center justify-center text-white cursor-pointer">
                <span className="text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-epri-slate rounded-full flex items-center justify-center text-white cursor-pointer">
                <span className="text-sm">yt</span>
              </div>
              <div className="w-8 h-8 bg-epri-slate rounded-full flex items-center justify-center text-white cursor-pointer">
                <span className="text-sm">tw</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-1 text-sm text-epri-slate mb-4">
              <span>EPRI.com</span>
              <span>|</span>
              <span>Copyright Policy</span>
              <span>|</span>
              <span>Privacy Statement</span>
              <span>|</span>
              <span>Terms of Use</span>
              <span>|</span>
              <span>Help / Contact Us</span>
            </div>

            <div className="text-center text-sm text-epri-darkest-blue space-y-1">
              <p>
                3420 Hillview Avenue, Palo Alto, California 94304 | 800-313-3774
              </p>
              <p>
                © Electric Power Research Institute, Inc. 2001-2023. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
