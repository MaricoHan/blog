import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const title = "稀饭咖啡"

const config: DocsThemeConfig = {
  useNextSeoProps: () => {
    const router = useRouter();

    const seoProps = {
      description: "稀饭咖啡的个人博客",
    }

    if (router.asPath == '/') {
      return {
        ...seoProps,
        title: title,
      }
    } else {
      return {
        ...seoProps,
        titleTemplate: "%s - 稀饭咖啡"
      }
    }
  },
  faviconGlyph: '🐜',
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        {title}
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/MaricoHan/blog',
  },
  docsRepositoryBase: 'https://github.com/MaricoHan/blog/tree/main',
  feedback: {
    content: "遇到问题？提交反馈 ->"
  },
  editLink: {
    text: "修改此页内容，贡献一下 ->"
  },
  sidebar: {
    toggleButton: true
  },
  banner: {
    key: '2.0-release',
    text: (
      <a target="_blank">
        🎉 博客正式上线，还在完善中，敬请期待～
      </a>
    )
  },
  gitTimestamp: null,
  footer: {
    component: (
      <div>
        {/* <svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.5H116C124.008 0.5 130.5 6.99187 130.5 15V41.5H15C6.99187 41.5 0.5 35.0081 0.5 27V0.5Z" fill="white" stroke="black" />
          <path d="M17.9605 24.1575C21.4266 26.9643 26.3836 26.9643 29.8497 24.1575L28.5095 22.5026C25.8248 24.6766 21.9854 24.6766 19.3007 22.5026L17.9605 24.1575Z" fill="black" />
          <path d="M19.404 20.5134V17.6365H21.5336V20.5134H19.404Z" fill="black" />
          <path d="M26.012 17.6365V20.5134H28.1415V17.6365H26.012Z" fill="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35 21.5C35 27.8513 29.8513 33 23.5 33C17.1487 33 12 27.8513 12 21.5C12 15.1487 17.1487 10 23.5 10C29.8513 10 35 15.1487 35 21.5ZM32.8705 21.5C32.8705 26.6752 28.6752 30.8705 23.5 30.8705C18.3248 30.8705 14.1295 26.6752 14.1295 21.5C14.1295 16.3248 18.3248 12.1295 23.5 12.1295C28.6752 12.1295 32.8705 16.3248 32.8705 21.5Z" fill="black" />
          <path d="M42.9754 9.89597L43.9953 13.8667L45.0301 9.89597H46.0303L47.07 13.8432L48.1544 9.89597H49.0456L47.5058 14.9347H46.5799L45.5005 11.0345L44.4558 14.9347H43.5299L42 9.89597H42.9754Z" fill="black" />
          <path d="M49.8156 9.89597H50.6622V10.7663C50.7316 10.597 50.9016 10.3915 51.1722 10.15C51.4429 9.90538 51.7548 9.78306 52.108 9.78306C52.1245 9.78306 52.1526 9.78463 52.1922 9.78777C52.2318 9.7909 52.2994 9.79718 52.3952 9.80659V10.7005C52.3424 10.6911 52.2928 10.6848 52.2466 10.6817C52.2037 10.6785 52.1559 10.6769 52.1031 10.6769C51.6541 10.6769 51.3092 10.815 51.0682 11.091C50.8273 11.3638 50.7068 11.679 50.7068 12.0366V14.9347H49.8156V9.89597Z" fill="black" />
          <path d="M53.0662 9.9195H53.9722V14.9347H53.0662V9.9195ZM53.0662 8.02352H53.9722V8.98327H53.0662V8.02352Z" fill="black" />
          <path d="M55.4008 8.48928H56.3019V9.89597H57.1485V10.5876H56.3019V13.8761C56.3019 14.0518 56.3646 14.1694 56.49 14.229C56.5593 14.2635 56.6749 14.2807 56.8366 14.2807C56.8795 14.2807 56.9257 14.2807 56.9752 14.2807C57.0248 14.2776 57.0825 14.2729 57.1485 14.2666V14.9347C57.0462 14.9629 56.9389 14.9833 56.8267 14.9958C56.7178 15.0084 56.599 15.0146 56.4702 15.0146C56.0543 15.0146 55.7721 14.9143 55.6236 14.7135C55.475 14.5097 55.4008 14.2462 55.4008 13.9232V10.5876H54.6828V9.89597H55.4008V8.48928Z" fill="black" />
          <path d="M58.1215 8.48928H59.0227V9.89597H59.8693V10.5876H59.0227V13.8761C59.0227 14.0518 59.0854 14.1694 59.2108 14.229C59.2801 14.2635 59.3957 14.2807 59.5574 14.2807C59.6003 14.2807 59.6465 14.2807 59.696 14.2807C59.7455 14.2776 59.8033 14.2729 59.8693 14.2666V14.9347C59.767 14.9629 59.6597 14.9833 59.5475 14.9958C59.4386 15.0084 59.3197 15.0146 59.191 15.0146C58.7751 15.0146 58.4929 14.9143 58.3444 14.7135C58.1958 14.5097 58.1215 14.2462 58.1215 13.9232V10.5876H57.4036V9.89597H58.1215V8.48928Z" fill="black" />
          <path d="M62.8723 9.78306C63.2486 9.78306 63.6134 9.86775 63.9666 10.0371C64.3197 10.2033 64.5888 10.4198 64.7736 10.6864C64.9518 10.9404 65.0707 11.2368 65.1301 11.5755C65.1829 11.8076 65.2093 12.1777 65.2093 12.6858H61.3226C61.3391 13.1971 61.4662 13.6079 61.7039 13.9185C61.9415 14.2258 62.3095 14.3795 62.808 14.3795C63.2734 14.3795 63.6447 14.2337 63.922 13.942C64.0804 13.7726 64.1927 13.5766 64.2587 13.3539H65.135C65.1119 13.5389 65.0344 13.7459 64.9023 13.9749C64.7736 14.2007 64.6284 14.3858 64.4666 14.5301C64.196 14.781 63.8609 14.9503 63.4615 15.0382C63.247 15.0883 63.0044 15.1134 62.7337 15.1134C62.0735 15.1134 61.5141 14.886 61.0552 14.4313C60.5964 13.9733 60.367 13.3335 60.367 12.5118C60.367 11.7026 60.5981 11.0455 61.0602 10.5405C61.5223 10.0355 62.1264 9.78306 62.8723 9.78306ZM64.2933 12.0131C64.257 11.6461 64.1729 11.3528 64.0408 11.1333C63.7966 10.7256 63.3889 10.5217 62.8179 10.5217C62.4086 10.5217 62.0653 10.6628 61.788 10.9451C61.5108 11.2243 61.3639 11.5802 61.3474 12.0131H64.2933Z" fill="black" />
          <path d="M66.2071 9.89597H67.0537V10.6111C67.3046 10.3163 67.5703 10.1045 67.8509 9.97595C68.1315 9.84736 68.4434 9.78306 68.7867 9.78306C69.5392 9.78306 70.0476 10.0324 70.3116 10.5311C70.4569 10.804 70.5295 11.1945 70.5295 11.7026V14.9347H69.6234V11.759C69.6234 11.4516 69.5756 11.2039 69.4798 11.0157C69.3214 10.702 69.0342 10.5452 68.6183 10.5452C68.4071 10.5452 68.2338 10.5656 68.0984 10.6064C67.8542 10.6754 67.6396 10.8134 67.4548 11.0204C67.3062 11.1866 67.2089 11.3591 67.1627 11.5379C67.1198 11.7135 67.0983 11.966 67.0983 12.2953V14.9347H66.2071V9.89597Z" fill="black" />
          <path d="M74.4015 8H75.268V10.5076C75.4627 10.2661 75.6955 10.0826 75.9661 9.95714C76.2368 9.82854 76.5306 9.76424 76.8474 9.76424C77.5076 9.76424 78.0423 9.98066 78.4516 10.4135C78.8642 10.8432 79.0705 11.4783 79.0705 12.3189C79.0705 13.1155 78.8675 13.7773 78.4615 14.3042C78.0555 14.8312 77.4927 15.0946 76.7732 15.0946C76.3705 15.0946 76.0305 15.0021 75.7532 14.817C75.5882 14.7073 75.4116 14.5316 75.2234 14.2901V14.9347H74.4015V8ZM76.7187 14.3466C77.2006 14.3466 77.5604 14.1647 77.7981 13.8008C78.039 13.437 78.1595 12.9571 78.1595 12.3612C78.1595 11.8312 78.039 11.3921 77.7981 11.0439C77.5604 10.6958 77.2089 10.5217 76.7435 10.5217C76.3375 10.5217 75.981 10.6644 75.674 10.9498C75.3703 11.2352 75.2185 11.7057 75.2185 12.3612C75.2185 12.8348 75.2812 13.219 75.4066 13.5139C75.641 14.069 76.0784 14.3466 76.7187 14.3466Z" fill="black" />
          <path d="M83.3262 9.89597H84.3115C84.1861 10.219 83.9071 10.9561 83.4747 12.1072C83.1513 12.9728 82.8806 13.6785 82.6627 14.2243C82.1478 15.5102 81.7847 16.2943 81.5735 16.5766C81.3622 16.8589 80.9991 17 80.4842 17C80.3588 17 80.2614 16.9953 80.1921 16.9859C80.1261 16.9765 80.0435 16.9592 79.9445 16.9341V16.1626C80.0997 16.2033 80.2119 16.2284 80.2812 16.2378C80.3505 16.2473 80.4116 16.252 80.4644 16.252C80.6294 16.252 80.7499 16.2253 80.8258 16.172C80.9051 16.1218 80.9711 16.0591 81.0239 15.9838C81.0404 15.9587 81.0998 15.8301 81.2021 15.598C81.3045 15.3659 81.3787 15.1934 81.4249 15.0805L79.4643 9.89597H80.4743L81.8953 13.9984L83.3262 9.89597Z" fill="black" />
          <path d="M87.7033 8H88.5945V10.5781C88.8057 10.3241 88.9955 10.1453 89.1639 10.0418C89.4511 9.86304 89.8092 9.77365 90.2383 9.77365C91.0074 9.77365 91.5289 10.0293 91.8029 10.5405C91.9514 10.8197 92.0257 11.207 92.0257 11.7026V14.9347H91.1097V11.759C91.1097 11.3889 91.0602 11.1176 90.9612 10.9451C90.7994 10.6691 90.4958 10.5311 90.0502 10.5311C89.6805 10.5311 89.3454 10.6519 89.0451 10.8934C88.7447 11.1349 88.5945 11.5912 88.5945 12.2624V14.9347H87.7033V8Z" fill="black" />
          <path d="M94.1375 9.89597V13.241C94.1375 13.4982 94.1804 13.7083 94.2662 13.8714C94.4246 14.1725 94.7201 14.3231 95.1525 14.3231C95.773 14.3231 96.1955 14.0596 96.42 13.5327C96.5421 13.2504 96.6032 12.863 96.6032 12.3706V9.89597H97.4944V14.9347H96.6527L96.6626 14.1913C96.5471 14.3826 96.4035 14.5442 96.2318 14.6759C95.8919 14.9394 95.4793 15.0711 94.994 15.0711C94.2382 15.0711 93.7232 14.8312 93.4493 14.3513C93.3007 14.0941 93.2265 13.7507 93.2265 13.321V9.89597H94.1375Z" fill="black" />
          <path d="M98.7892 9.89597H99.6706V10.6111C99.8818 10.3633 100.073 10.183 100.245 10.07C100.539 9.87872 100.872 9.78306 101.245 9.78306C101.668 9.78306 102.008 9.88186 102.265 10.0795C102.41 10.1924 102.542 10.3586 102.661 10.5781C102.859 10.3084 103.092 10.1093 103.359 9.98066C103.627 9.84893 103.927 9.78306 104.26 9.78306C104.973 9.78306 105.459 10.0277 105.716 10.517C105.855 10.7804 105.924 11.1349 105.924 11.5802V14.9347H104.998V11.4344C104.998 11.0988 104.909 10.8683 104.731 10.7428C104.556 10.6174 104.341 10.5546 104.087 10.5546C103.737 10.5546 103.435 10.666 103.181 10.8887C102.93 11.1113 102.805 11.483 102.805 12.0037V14.9347H101.899V11.6461C101.899 11.3042 101.856 11.0549 101.77 10.8981C101.635 10.6628 101.382 10.5452 101.012 10.5452C100.676 10.5452 100.369 10.6691 100.091 10.9169C99.8174 11.1647 99.6805 11.6132 99.6805 12.2624V14.9347H98.7892V9.89597Z" fill="black" />
          <path d="M107.818 13.5938C107.818 13.8385 107.912 14.0314 108.1 14.1725C108.288 14.3136 108.511 14.3842 108.769 14.3842C109.082 14.3842 109.386 14.3152 109.68 14.1772C110.175 13.9482 110.422 13.5734 110.422 13.0528V12.3706C110.313 12.4365 110.173 12.4914 110.001 12.5353C109.83 12.5792 109.661 12.6106 109.496 12.6294L108.957 12.6952C108.633 12.736 108.391 12.8003 108.229 12.8881C107.955 13.0355 107.818 13.2708 107.818 13.5938ZM109.977 11.8813C110.181 11.8562 110.318 11.7747 110.388 11.6367C110.427 11.5614 110.447 11.4532 110.447 11.3121C110.447 11.0235 110.338 10.815 110.12 10.6864C109.906 10.5546 109.597 10.4888 109.194 10.4888C108.729 10.4888 108.399 10.6079 108.204 10.8463C108.095 10.978 108.024 11.1741 107.991 11.4344H107.159C107.176 10.8134 107.387 10.3821 107.793 10.1406C108.202 9.89598 108.676 9.77365 109.214 9.77365C109.838 9.77365 110.345 9.88657 110.734 10.1124C111.12 10.3382 111.313 10.6895 111.313 11.1662V14.069C111.313 14.1568 111.332 14.2274 111.368 14.2807C111.408 14.334 111.488 14.3607 111.611 14.3607C111.65 14.3607 111.695 14.3591 111.744 14.356C111.794 14.3497 111.847 14.3419 111.903 14.3325V14.9582C111.764 14.9958 111.658 15.0193 111.586 15.0288C111.513 15.0382 111.414 15.0429 111.289 15.0429C110.982 15.0429 110.759 14.9394 110.62 14.7324C110.548 14.6226 110.496 14.4673 110.467 14.2666C110.285 14.4924 110.024 14.6884 109.684 14.8547C109.344 15.0209 108.97 15.104 108.561 15.104C108.069 15.104 107.666 14.9629 107.352 14.6806C107.042 14.3952 106.887 14.0392 106.887 13.6127C106.887 13.1453 107.041 12.7831 107.348 12.5259C107.654 12.2687 108.057 12.1103 108.556 12.0507L109.977 11.8813Z" fill="black" />
          <path d="M112.678 9.89597H113.524V10.6111C113.775 10.3163 114.041 10.1045 114.321 9.97595C114.602 9.84736 114.914 9.78306 115.257 9.78306C116.01 9.78306 116.518 10.0324 116.782 10.5311C116.927 10.804 117 11.1945 117 11.7026V14.9347H116.094V11.759C116.094 11.4516 116.046 11.2039 115.95 11.0157C115.792 10.702 115.505 10.5452 115.089 10.5452C114.878 10.5452 114.704 10.5656 114.569 10.6064C114.325 10.6754 114.11 10.8134 113.925 11.0204C113.777 11.1866 113.679 11.3591 113.633 11.5379C113.59 11.7135 113.569 11.966 113.569 12.2953V14.9347H112.678V9.89597Z" fill="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M93.3281 32.0851L97.95 19H101.008L105.594 32.0851H102.66L101.825 29.3953H97.0537L96.1575 32.0851H93.3281ZM99.4525 21.9916L97.783 27.1405H101.069L99.4525 21.9916Z" fill="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M77.602 22.1958C78.8615 22.1958 79.8456 22.6545 80.5544 23.5718C81.2691 24.4891 81.6264 25.6728 81.6264 27.1227C81.6264 28.6259 81.2749 29.8717 80.572 30.8601C79.869 31.8484 78.8878 32.3426 77.6284 32.3426C76.8376 32.3426 76.202 32.1828 75.7217 31.8632C75.4346 31.6738 75.1242 31.3424 74.7903 30.8689V32.0851H72.3388V19.0178H74.8342V23.6695C75.1505 23.2197 75.4991 22.8764 75.8798 22.6397C76.3309 22.3438 76.905 22.1958 77.602 22.1958ZM76.9606 30.2564C77.605 30.2564 78.1058 29.993 78.4631 29.4663C78.8205 28.9396 78.9991 28.2472 78.9991 27.389C78.9991 26.7025 78.9113 26.1344 78.7355 25.6846C78.4016 24.8324 77.7866 24.4063 76.8903 24.4063C75.9823 24.4063 75.3585 24.8235 75.0187 25.658C74.843 26.1018 74.7551 26.6759 74.7551 27.3802C74.7551 28.2087 74.9367 28.8952 75.2999 29.4397C75.6631 29.9842 76.2167 30.2564 76.9606 30.2564Z" fill="black" />
          <path d="M66.5236 30.1587C66.424 30.0581 66.3742 29.8096 66.3742 29.4131V24.2997H67.9295V22.4977H66.3742V19.799H63.8964V22.4977H62.5608V24.2997H63.8964V30.2564C63.8964 30.8601 64.037 31.3069 64.3181 31.5969C64.7516 32.0526 65.56 32.2597 66.7433 32.2183L67.9295 32.1739V30.283C67.8475 30.2889 67.7626 30.2949 67.6747 30.3008H67.4374C66.9278 30.3008 66.6232 30.2534 66.5236 30.1587Z" fill="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M62.4634 27.2648C62.4634 28.6851 62.0592 29.9013 61.2509 30.9133C60.4425 31.9194 59.2152 32.4225 57.5692 32.4225C55.9231 32.4225 54.6959 31.9194 53.8875 30.9133C53.0791 29.9013 52.675 28.6851 52.675 27.2648C52.675 25.8681 53.0791 24.6578 53.8875 23.6339C54.6959 22.6101 55.9231 22.0982 57.5692 22.0982C59.2152 22.0982 60.4425 22.6101 61.2509 23.6339C62.0592 24.6578 62.4634 25.8681 62.4634 27.2648ZM57.5604 30.3008C58.2926 30.3008 58.855 30.0374 59.2475 29.5107C59.6399 28.984 59.8362 28.2353 59.8362 27.2648C59.8362 26.2942 59.6399 25.5485 59.2475 25.0277C58.855 24.501 58.2926 24.2376 57.5604 24.2376C56.8282 24.2376 56.2629 24.501 55.8646 25.0277C55.4721 25.5485 55.2758 26.2942 55.2758 27.2648C55.2758 28.2353 55.4721 28.984 55.8646 29.5107C56.2629 30.0374 56.8282 30.3008 57.5604 30.3008Z" fill="black" />
          <path d="M48.2896 22.1781C49.2796 22.1781 50.088 22.4414 50.7148 22.9681C51.3474 23.4889 51.6638 24.356 51.6638 25.5692V32.0851H49.098V26.1995C49.098 25.6905 49.0307 25.2999 48.8959 25.0277C48.6499 24.5305 48.1813 24.282 47.49 24.282C46.6407 24.282 46.0578 24.646 45.7415 25.3739C45.5775 25.7586 45.4954 26.2498 45.4954 26.8475V32.0851H43V22.4266H45.4164V23.8381C45.7385 23.341 46.0432 22.9829 46.3302 22.764C46.8457 22.3734 47.4988 22.1781 48.2896 22.1781Z" fill="black" />
          <path d="M83.4108 33.9582L83.0945 33.9405V35.9645C83.3639 35.9822 83.566 35.9911 83.7008 35.9911C83.8355 35.997 84.0142 36 84.2368 36C85.3439 36 86.082 35.7781 86.451 35.3342C86.8201 34.8963 87.3209 33.76 87.9536 31.9253L91.2398 22.4089H88.5774L86.6004 29.5462L84.5092 22.4089H81.7237L85.2385 32.5112C85.2619 32.5822 85.2092 32.7775 85.0803 33.0971C84.9573 33.4167 84.8225 33.6268 84.6761 33.7274C84.5238 33.8339 84.3363 33.902 84.1138 33.9316C83.8912 33.9612 83.6568 33.9701 83.4108 33.9582Z" fill="black" />
          <path d="M107.902 29.8624V21.2258H106.306V19H112V21.2258H110.59V29.8624H112V32.0882H106.306V29.8624H107.902Z" fill="black" />
        </svg> */}
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
