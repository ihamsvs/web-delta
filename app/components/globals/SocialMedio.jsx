const SocialMedia = () => {
  return (
    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4">
      <li>
        <a
          href="https://www.instagram.com/circulodelta.cl/?hl=es"
          className="mr-4 hover:underline md:mr-6 text-text"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/instagram.svg" className="h-8 w-8" />
        </a>
      </li>
      <li>
        <a
          href="https://web.facebook.com/circulodeltatv?_rdc=1&_rdr"
          className="mr-4 hover:underline md:mr-6 text-text"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23 12c0-6.627-5.373-12-12-12S-1 5.373-1 12c0 6.168 4.753 11.229 10.839 11.951v-8.451H7.566V12h2.273V9.601c0-2.248 1.337-3.497 3.394-3.497.983 0 1.824.073 2.068.106v2.385h-1.41c-1.11 0-1.327.526-1.327 1.303V12h2.658l-.427 2.5h-2.23V24C18.247 23.229 23 18.168 23 12" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/circulodeltatv"
          className="mr-4 hover:underline md:mr-6 text-text"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.953 4.569c-.885.388-1.83.65-2.828.77 1.016-.611 1.798-1.576 2.168-2.727-.95.56-2.005.968-3.129 1.19-.896-.958-2.174-1.56-3.59-1.56-2.715 0-4.918 2.2-4.918 4.916 0 .386.044.76.13 1.118-4.088-.205-7.71-2.163-10.13-5.133a4.865 4.865 0 00-.67 2.46c0 1.7.876 3.195 2.21 4.075-.814-.025-1.578-.25-2.242-.618v.06c0 2.375 1.687 4.355 3.934 4.8a4.846 4.846 0 01-2.236.085c.634 1.952 2.46 3.367 4.63 3.403a9.714 9.714 0 01-6.02 2.068c-.39 0-.774-.023-1.156-.067a13.727 13.727 0 007.447 2.18c8.92 0 13.787-7.4 13.787-13.79 0-.208-.005-.42-.015-.63a9.88 9.88 0 002.46-2.504z" />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
