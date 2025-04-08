"use client";

import React from "react";

const ChatBotButton: React.FC = () => {
  const chatBotIcon = `<svg id="ChatBOt" width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" class="chat-bot-icon"> <rect width="114" height="114" rx="57" fill="url(#paint0_linear_217_12372)"></rect> <path d="M49.7635 31.7644C49.7635 31.2864 49.5728 30.828 49.2335 30.4899C48.8941 30.1519 48.4339 29.962 47.954 29.962C47.4741 29.962 47.0139 30.1519 46.6745 30.4899C46.3352 30.828 46.1445 31.2864 46.1445 31.7644V33.5668H38.9067C37.467 33.5668 36.0863 34.1365 35.0682 35.1506C34.0502 36.1646 33.4783 37.5399 33.4783 38.974V49.7884C33.4783 51.2225 34.0502 52.5978 35.0682 53.6118C36.0863 54.6259 37.467 55.1956 38.9067 55.1956H48.2725C48.4269 54.7822 48.6344 54.3917 48.8949 54.024C49.5101 53.1589 50.3787 52.51 51.392 52.1459L53.1291 51.5908H38.9067C38.4268 51.5908 37.9665 51.4009 37.6272 51.0629C37.2879 50.7248 37.0972 50.2664 37.0972 49.7884V38.974C37.0972 38.496 37.2879 38.0375 37.6272 37.6995C37.9665 37.3615 38.4268 37.1716 38.9067 37.1716H57.0013C57.4812 37.1716 57.9415 37.3615 58.2808 37.6995C58.6201 38.0375 58.8108 38.496 58.8108 38.974V45.7402L59.2921 44.273C59.6902 43.1916 60.3416 42.3265 61.2101 41.7137C61.5937 41.4397 62.0003 41.227 62.4297 41.0756V38.974C62.4297 37.5399 61.8578 36.1646 60.8398 35.1506C59.8218 34.1365 58.441 33.5668 57.0013 33.5668H49.7635V31.7644ZM35.2878 60.6027H49.4486C50.0122 61.1747 50.7044 61.6047 51.468 61.8572L55.304 63.1189C55.8505 63.3027 56.3572 63.5911 57.0086 64.1679L57.0447 64.2075H35.2878C34.8079 64.2075 34.3476 64.3974 34.0083 64.7354C33.6689 65.0735 33.4783 65.5319 33.4783 66.0099V67.2716C33.4783 70.6781 34.9548 72.9492 37.394 74.4596C39.9417 76.0385 43.6294 76.8243 47.954 76.8243C52.3076 76.8243 55.9953 76.0349 58.5321 74.4596C59.5527 73.8287 60.4031 73.0609 61.0473 72.1309L61.2463 72.2931C61.753 72.6536 62.2958 72.9059 62.8748 73.0501C62.4564 73.9469 62.3336 74.9525 62.5238 75.9231C61.8888 76.5256 61.1926 77.0608 60.4465 77.52C57.1026 79.6 52.6478 80.4291 47.954 80.4291C43.2856 80.4291 38.8307 79.5928 35.4832 77.52C32.0271 75.3824 29.8594 71.9759 29.8594 67.2716V66.0099C29.8594 64.5759 30.4313 63.2005 31.4493 62.1865C32.4673 61.1724 33.8481 60.6027 35.2878 60.6027ZM45.2398 44.3812C45.2398 45.0982 44.9539 45.7859 44.4448 46.2929C43.9358 46.7999 43.2455 47.0848 42.5256 47.0848C41.8058 47.0848 41.1154 46.7999 40.6064 46.2929C40.0974 45.7859 39.8114 45.0982 39.8114 44.3812C39.8114 43.6642 40.0974 42.9765 40.6064 42.4695C41.1154 41.9624 41.8058 41.6776 42.5256 41.6776C43.2455 41.6776 43.9358 41.9624 44.4448 42.4695C44.9539 42.9765 45.2398 43.6642 45.2398 44.3812ZM53.3824 47.0848C54.1022 47.0848 54.7926 46.7999 55.3016 46.2929C55.8106 45.7859 56.0966 45.0982 56.0966 44.3812C56.0966 43.6642 55.8106 42.9765 55.3016 42.4695C54.7926 41.9624 54.1022 41.6776 53.3824 41.6776C52.6625 41.6776 51.9722 41.9624 51.4632 42.4695C50.9542 42.9765 50.6682 43.6642 50.6682 44.3812C50.6682 45.0982 50.9542 45.7859 51.4632 46.2929C51.9722 46.7999 52.6625 47.0848 53.3824 47.0848ZM65.6071 45.3977L66.8665 49.2585C67.2571 50.4328 67.918 51.4998 68.7965 52.3742C69.675 53.2486 70.7466 53.9062 71.9258 54.2944L75.8053 55.5488L75.8813 55.5705C76.1802 55.6753 76.4391 55.8699 76.6223 56.1276C76.8054 56.3852 76.9038 56.6931 76.9038 57.0088C76.9038 57.3245 76.8054 57.6324 76.6223 57.89C76.4391 58.1476 76.1802 58.3423 75.8813 58.4471L72.0054 59.7015C70.8256 60.0893 69.7532 60.7466 68.874 61.6211C67.9949 62.4955 67.3334 63.5628 66.9425 64.7374L65.6831 68.5946C65.5779 68.8923 65.3825 69.1502 65.1238 69.3327C64.8652 69.5151 64.5561 69.6131 64.2392 69.6131C63.9223 69.6131 63.6131 69.5151 63.3545 69.3327C63.0959 69.1502 62.9005 68.8923 62.7952 68.5946L61.5358 64.7374C61.0833 63.3718 60.2664 62.1544 59.1727 61.2156C58.3818 60.5315 57.4631 60.0097 56.4693 59.6799L52.5898 58.4255C52.2909 58.3206 52.032 58.126 51.8489 57.8684C51.6657 57.6107 51.5673 57.3028 51.5673 56.9871C51.5673 56.6715 51.6657 56.3636 51.8489 56.1059C52.032 55.8483 52.2909 55.6537 52.5898 55.5488L56.4693 54.2944C57.6345 53.8962 58.6909 53.2341 59.5556 52.3603C60.4203 51.4864 61.0697 50.4247 61.4526 49.2585L62.712 45.4013C62.8165 45.1023 63.0118 44.8431 63.2709 44.6597C63.5299 44.4762 63.8399 44.3777 64.1577 44.3777C64.4756 44.3777 64.7856 44.4762 65.0446 44.6597C65.3037 44.8431 65.499 45.1023 65.6035 45.4013M83.3543 73.9909L80.5859 73.0969C79.7438 72.8181 78.9783 72.3479 78.3502 71.7235C77.7221 71.0991 77.2485 70.3376 76.9669 69.4994L76.0694 66.7417C75.9945 66.5288 75.855 66.3443 75.6702 66.2138C75.4855 66.0833 75.2646 66.0132 75.0381 66.0132C74.8115 66.0132 74.5906 66.0833 74.4058 66.2138C74.2211 66.3443 74.0816 66.5288 74.0067 66.7417L73.1019 69.4994C72.8266 70.3311 72.3623 71.0884 71.7454 71.7123C71.1284 72.3363 70.3752 72.8101 69.5445 73.0969L66.776 73.9909C66.6167 74.0475 66.4727 74.1399 66.3552 74.2611C66.2377 74.3823 66.15 74.5289 66.0988 74.6894C66.0476 74.85 66.0345 75.0202 66.0603 75.1867C66.0861 75.3532 66.1502 75.5114 66.2477 75.6491C66.378 75.8294 66.5625 75.9736 66.776 76.0457L69.5445 76.9433C70.3882 77.2235 71.1546 77.6959 71.7828 78.323C72.411 78.95 72.8838 79.7143 73.1634 80.5553L74.0609 83.3093C74.1359 83.5222 74.2754 83.7067 74.4601 83.8372C74.6449 83.9678 74.8658 84.0379 75.0923 84.0379C75.3188 84.0379 75.5398 83.9678 75.7245 83.8372C75.9093 83.7067 76.0488 83.5222 76.1237 83.3093L77.0248 80.5553C77.3056 79.7167 77.7784 78.9548 78.4059 78.3297C79.0334 77.7047 79.7983 77.2337 80.6401 76.9541L83.4086 76.0601C83.6224 75.9855 83.8076 75.8465 83.9386 75.6625C84.0696 75.4784 84.14 75.2584 84.14 75.0327C84.14 74.8071 84.0696 74.587 83.9386 74.403C83.8076 74.2189 83.6224 74.08 83.4086 74.0054L83.3543 73.9909Z" fill="#FEFEFE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M80.6218 14.5018C76.906 14.5018 73.3424 15.9779 70.7149 18.6054C68.0874 21.2329 66.6113 24.7965 66.6113 28.5123C66.6113 32.2282 68.0874 35.7918 70.7149 38.4193C73.3424 41.0467 76.906 42.5228 80.6218 42.5228H87.6271C89.8034 42.5228 90.8915 42.5228 91.7493 42.1679C92.3161 41.9332 92.8311 41.5891 93.2649 41.1554C93.6986 40.7216 94.0427 40.2066 94.2774 39.6398C94.6323 38.782 94.6323 37.6939 94.6323 35.5176V28.5123C94.6323 24.7965 93.1562 21.2329 90.5288 18.6054C87.9013 15.9779 84.3376 14.5018 80.6218 14.5018ZM74.3949 26.9556C74.3949 26.5427 74.559 26.1468 74.8509 25.8548C75.1428 25.5629 75.5388 25.3989 75.9517 25.3989H85.292C85.7049 25.3989 86.1008 25.5629 86.3928 25.8548C86.6847 26.1468 86.8487 26.5427 86.8487 26.9556C86.8487 27.3685 86.6847 27.7644 86.3928 28.0564C86.1008 28.3483 85.7049 28.5123 85.292 28.5123H75.9517C75.5388 28.5123 75.1428 28.3483 74.8509 28.0564C74.559 27.7644 74.3949 27.3685 74.3949 26.9556ZM79.0651 33.1825C79.0651 32.7696 79.2291 32.3737 79.5211 32.0817C79.813 31.7898 80.209 31.6258 80.6218 31.6258H85.292C85.7049 31.6258 86.1008 31.7898 86.3928 32.0817C86.6847 32.3737 86.8487 32.7696 86.8487 33.1825C86.8487 33.5954 86.6847 33.9913 86.3928 34.2833C86.1008 34.5752 85.7049 34.7392 85.292 34.7392H80.6218C80.209 34.7392 79.813 34.5752 79.5211 34.2833C79.2291 33.9913 79.0651 33.5954 79.0651 33.1825Z" fill="#FF9500"></path> <defs> <linearGradient id="paint0_linear_217_12372" x1="57" y1="0" x2="57" y2="114" gradientUnits="userSpaceOnUse"> <stop stop-color="#512B9E"></stop> <stop offset="1" stop-color="#44126A"></stop> </linearGradient> </defs> </svg>`;

  return (
    <button className="flex fixed right-10 bottom-10 justify-center items-center rounded-full h-[114px] w-[114px]">
      <div dangerouslySetInnerHTML={{ __html: chatBotIcon }} />
    </button>
  );
};

export default ChatBotButton;
