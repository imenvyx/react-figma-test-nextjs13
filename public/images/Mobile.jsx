import React from "react";

function Mobile(props) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M94.4746 53.7816C93.5621 53.523 92.6421 53.2819 91.6476 53.0108C92.1772 52.0834 92.6595 51.2231 93.1643 50.3728C93.6466 49.5622 93.5447 48.861 92.8759 48.1947C90.4342 45.7679 88 43.3337 85.5708 40.8921C84.9069 40.2233 84.2058 40.1263 83.3952 40.6136C82.5473 41.1208 81.6821 41.5982 80.7596 42.1278C80.4811 41.101 80.2101 40.1561 79.9714 39.2038C79.7302 38.2515 79.136 37.799 78.1588 37.8164C77.4825 37.8264 76.8062 37.8189 75.9981 37.8189V36.6727C75.9981 27.3362 76.0081 18.0022 75.9931 8.66578C75.9857 4.4563 73.4122 1.36569 69.3917 0.691876C68.9069 0.609824 68.4046 0.602365 67.9098 0.602365C54.8487 0.597392 41.7901 0.594906 28.729 0.599879C23.9775 0.602365 20.6482 3.9068 20.6059 8.65584C20.5935 10.0209 20.6059 11.3834 20.6059 12.8976C19.9918 12.8976 19.4175 12.8952 18.8431 12.8976C17.3015 12.9001 16.9062 13.206 16.5084 14.7152C16.3169 15.4338 16.1279 16.1524 15.9365 16.8684C15.9141 16.9555 15.8669 17.0375 15.8047 17.1867C14.9593 16.7043 14.1338 16.2269 13.2984 15.7595C12.3013 15.2025 11.7668 15.2622 10.9736 16.0504C8.57671 18.4349 6.18479 20.8243 3.79784 23.2162C2.98728 24.0293 2.92512 24.5315 3.48953 25.5361C3.95946 26.369 4.4443 27.1945 4.96395 28.0995C4.08625 28.3283 3.2906 28.5645 2.47755 28.741C1.6819 28.9151 1.03792 29.2706 0.642578 30.0066V41.7325C1.16224 42.5282 2.00513 42.7047 2.85051 42.9061C3.53178 43.0652 4.19567 43.294 4.94656 43.5153C4.46669 44.3606 4.02412 45.1339 3.58899 45.9122C2.98728 46.9913 3.05939 47.6452 3.90228 48.493C6.21713 50.8253 8.53694 53.1526 10.8592 55.4749C11.7817 56.3973 12.274 56.457 13.4053 55.818C14.1861 55.3754 14.9593 54.9254 15.837 54.4206C16.118 55.4301 16.389 56.3625 16.6302 57.3024C16.8739 58.2522 17.4681 58.7047 18.4428 58.6873C19.1191 58.6749 19.7954 58.6848 20.6159 58.6848V59.8261C20.6159 68.7523 20.7253 77.681 20.5711 86.6047C20.4916 91.1772 22.3638 94.8098 27.2621 95.8964H69.3345C69.4763 95.8367 69.6105 95.7596 69.7548 95.7248C73.5888 94.8173 75.9285 91.9206 75.9832 87.9846C76.0031 86.5624 75.9882 85.1402 75.9882 83.5961H78.1663C79.131 83.5961 79.7327 83.1411 79.9739 82.1913C80.2076 81.2614 80.4737 80.3389 80.7571 79.3046C81.6274 79.8093 82.4429 80.2917 83.2709 80.7567C84.3052 81.341 84.8274 81.2788 85.6727 80.4384C88.0497 78.0763 90.4193 75.7068 92.7814 73.3347C93.6243 72.4869 93.679 71.9846 93.0822 70.9329C92.6272 70.1273 92.1573 69.3291 91.6401 68.4315C92.6521 68.1456 93.5919 67.887 94.5268 67.616C95.6109 67.3027 95.9515 66.8676 95.954 65.7562C95.9615 62.4045 95.9615 59.0553 95.954 55.7061C95.9515 54.5499 95.5985 54.0974 94.4771 53.7816H94.4746ZM19.4498 25.0537C14.9817 26.6524 11.9881 31.0683 12.0055 35.8273C12.0204 40.636 15.0463 44.9599 19.6139 46.581C20.3797 46.8545 20.6606 47.1728 20.6383 48.0082C20.5711 50.4822 20.6134 52.9586 20.6134 55.4649C19.7034 55.7434 19.2384 55.5047 19.1166 54.6643C19.0644 54.2988 18.8879 53.9507 18.8481 53.5852C18.6765 51.9939 17.5029 51.4519 16.2025 51.1286C15.8072 51.0292 15.285 51.1983 14.8897 51.3872C14.0841 51.7726 13.3257 52.2575 12.5873 52.6777C10.6006 50.6836 8.65626 48.7317 6.66963 46.7376C7.07988 46.0365 7.55231 45.2707 7.98246 44.485C8.68611 43.192 7.81338 41.1059 6.4011 40.6857C5.71734 40.4843 5.00623 40.365 4.34484 40.1089C4.09371 40.0094 3.7854 39.6365 3.78291 39.3853C3.73816 37.0282 3.7655 34.6711 3.7481 32.314C3.74561 31.8441 3.84756 31.5532 4.37219 31.4736C4.79736 31.4065 5.20017 31.1802 5.62535 31.1379C7.18432 30.9813 7.85814 29.9246 8.16894 28.5894C8.27585 28.1294 8.14658 27.5426 7.94269 27.0975C7.58714 26.3168 7.08983 25.5957 6.70195 24.9343C8.69108 22.9527 10.6379 21.0108 12.6793 18.9744C13.271 19.3175 14.0095 19.7576 14.7579 20.1828C16.1503 20.976 18.219 20.1381 18.674 18.5965C18.8306 18.0619 19.0072 17.5298 19.1066 16.9828C19.2583 16.1349 19.6885 15.8291 20.6134 16.1648V18.3404C20.6134 20.0162 20.5562 21.6921 20.6358 23.3629C20.683 24.3202 20.3946 24.7155 19.4498 25.0537ZM20.5786 27.9976V43.5103C18.4527 43.1945 15.3945 40.2108 15.1508 36.5633C14.8872 32.6323 17.1598 29.0046 20.5786 27.9976ZM72.7086 89.2701C72.4326 91.3065 70.6474 92.6367 68.5812 92.7909C68.335 92.8083 68.0864 92.8108 67.8377 92.8108C54.8114 92.8132 41.7852 92.8157 28.7589 92.8108C26.0189 92.8108 23.9626 91.2294 23.7662 88.8201C23.6294 87.1318 23.7388 85.4212 23.7388 83.6285H72.7608C72.7608 85.5306 72.9573 87.4302 72.7086 89.2701ZM72.8503 80.4533H23.7761V16.0579H72.8503V80.4533ZM72.8578 12.833H23.7388C23.7388 11.0726 23.6418 9.36695 23.7637 7.67371C23.9104 5.62988 25.6907 3.95653 27.737 3.73026C28.0751 3.69546 28.4158 3.68302 28.7564 3.68302C41.7827 3.68054 54.8114 3.68054 67.8377 3.68302C70.5802 3.68551 72.639 5.26438 72.8329 7.67122C72.9672 9.35949 72.8578 11.0701 72.8578 12.833ZM92.8435 64.2047C92.8535 64.7293 92.7043 65.0127 92.1672 65.0948C91.8017 65.152 91.4536 65.321 91.0881 65.3583C89.6783 65.505 88.7981 66.2758 88.5371 67.6384C88.4277 68.2003 88.4476 68.8667 88.6539 69.3888C88.9821 70.2118 89.5192 70.9528 89.9444 71.6863C88.0821 73.5784 86.267 75.4407 84.4196 77.2707C84.2704 77.4149 83.8527 77.4423 83.6463 77.3453C82.975 77.0271 82.3558 76.6093 81.6969 76.2612C80.409 75.5824 78.3925 76.4104 77.9574 77.7954C77.7809 78.3548 77.5969 78.9217 77.5049 79.4985C77.3681 80.3563 76.9504 80.6796 76.0578 80.3887C76.0354 80.2047 75.9907 79.9983 75.9882 79.7894C75.9832 77.4025 75.9981 75.0156 75.9758 72.6286C75.9708 72.099 76.0926 71.8255 76.6545 71.6266C81.4956 69.9184 84.5812 65.6443 84.5837 60.7212C84.5862 55.7434 81.5279 51.5464 76.6073 49.7338C76.3562 49.6418 76.018 49.3185 76.013 49.0972C75.9732 46.4343 75.9882 43.7714 75.9882 41.0836C76.8087 40.7926 77.3308 40.9219 77.4676 41.8469C77.5148 42.1825 77.6864 42.5008 77.7187 42.8365C77.8729 44.4029 78.9495 45.0568 80.2897 45.3502C80.7521 45.4522 81.334 45.3104 81.779 45.1041C82.5598 44.746 83.2783 44.2487 84.1038 43.7614C85.986 45.6561 87.8011 47.4811 89.6112 49.3061C89.7206 49.4155 89.8176 49.5348 89.9692 49.7039C89.549 50.4175 89.1239 51.1286 88.7086 51.8497C87.8757 53.2968 88.6838 55.3729 90.2626 55.8478C91.0856 56.0965 92.2468 56.1089 92.6421 56.6634C93.0748 57.2725 92.8211 58.384 92.8286 59.2741C92.8435 60.9176 92.8137 62.5611 92.8435 64.2047ZM76.0454 68.4738V52.991C78.666 53.436 81.3489 57.1731 81.4732 60.5372C81.6025 64.0754 79.1509 67.6881 76.0454 68.4738Z"
        fill={props.fill}
      />
      <path
        d="M48.2674 59.1101C58.7029 59.1374 67.5719 50.5195 67.4103 40.2208C67.2163 27.9927 57.6288 20.9015 48.3644 20.8841C37.7773 20.8667 29.1569 29.3851 29.1346 39.8976C29.1147 50.4847 37.6778 59.0852 48.2674 59.1101ZM57.6636 53.0408C52.1761 57.0115 44.3936 57.0066 38.921 53.0358C38.3566 52.6255 38.3641 52.2899 38.6152 51.7329C40.2786 48.0481 44.1176 45.5766 48.9437 45.5592C52.7082 45.7307 55.9803 47.7397 57.9893 51.7503C58.2752 52.3197 58.2106 52.6454 57.6636 53.0408ZM43.23 37.4858C43.2126 34.6339 45.428 32.3961 48.2724 32.3862C51.1169 32.3787 53.3546 34.609 53.3521 37.4535C53.3496 40.2532 51.1442 42.4835 48.3545 42.5083C45.505 42.5332 43.2449 40.3203 43.23 37.4858ZM36.1562 29.497C42.0216 22.7116 52.3228 22.0427 59.046 28.1046C65.911 34.2957 65.6922 44.2836 60.6224 50.159C59.0585 47.1629 56.766 44.95 53.6779 43.575C57.676 39.6067 56.7734 34.3057 53.8544 31.5607C50.7737 28.6665 45.9053 28.6516 42.7849 31.506C39.9529 34.0968 38.7569 39.4103 42.8396 43.5203C39.8907 45.4779 37.5974 47.6585 35.9597 50.062C31.7403 45.7108 30.2758 36.2998 36.1562 29.497Z"
        fill={props.fill}
      />
      <path
        d="M29.3832 67.2281C29.7587 67.345 30.1789 67.3524 30.5792 67.3524C42.3996 67.3574 54.2175 67.3574 66.0378 67.3524C66.4083 67.3524 66.7887 67.3425 67.1443 67.2555C67.9101 67.0715 68.2905 66.5344 68.2781 65.7636C68.2632 64.9381 67.7957 64.4409 67.0001 64.2792C66.7017 64.2196 66.3834 64.2494 66.0726 64.2494C60.1475 64.2469 54.2224 64.2469 48.2973 64.2469C42.3722 64.2469 36.4471 64.2469 30.5195 64.2494C30.2112 64.2494 29.893 64.2196 29.5921 64.2792C28.8387 64.4259 28.3763 64.8884 28.329 65.6716C28.2818 66.4449 28.6473 67.0019 29.3832 67.2281Z"
        fill={props.fill}
      />
      <path
        d="M29.4671 75.0554C29.7978 75.1151 30.1459 75.0952 30.4866 75.0952C36.4092 75.0977 42.3318 75.0952 48.2544 75.0952C54.177 75.0952 60.0997 75.0977 66.0223 75.0952C66.3629 75.0952 66.711 75.12 67.0442 75.0579C67.8125 74.9137 68.2377 74.4164 68.27 73.6406C68.3023 72.8251 67.8896 72.2781 67.0939 72.0866C66.7682 72.0095 66.4151 72.0394 66.0745 72.0394C54.1969 72.0369 42.3219 72.0369 30.4443 72.0394C30.1037 72.0394 29.7506 72.0095 29.4249 72.0866C28.6292 72.2756 28.2016 72.84 28.2339 73.6381C28.2637 74.389 28.6889 74.9186 29.4671 75.0554Z"
        fill={props.fill}
      />
      <path
        d="M52.7481 86.6594C49.7768 86.6396 46.808 86.6396 43.8393 86.6594C42.7154 86.6694 42.0615 87.3059 42.0888 88.2632C42.1162 89.1757 42.7701 89.7426 43.8492 89.7501C45.3336 89.7625 46.818 89.7501 48.3024 89.7501C49.7868 89.7501 51.2115 89.7575 52.6635 89.7501C53.8123 89.7426 54.4836 89.1881 54.5084 88.2507C54.5308 87.2985 53.8719 86.6644 52.7481 86.657V86.6594Z"
        fill={props.fill}
      />
      <path
        d="M52.196 6.73886C51.0523 6.71897 49.9085 6.73389 48.7648 6.73389C47.621 6.73389 46.5369 6.72145 45.4255 6.73886C44.3962 6.75626 43.7024 7.40273 43.7099 8.29286C43.7149 9.15565 44.3663 9.81703 45.3534 9.82946C47.6409 9.86179 49.9284 9.86179 52.2159 9.82946C53.2453 9.81703 53.9116 9.12084 53.8768 8.22573C53.842 7.35549 53.1881 6.75875 52.196 6.73886Z"
        fill={props.fill}
      />
      <path
        d="M38.9585 6.68916C38.051 6.66927 37.3448 7.3232 37.3075 8.2183C37.2702 9.13081 38.0012 9.89911 38.9112 9.9016C39.7939 9.90409 40.4976 9.20292 40.51 8.3103C40.5224 7.40276 39.8611 6.71154 38.9585 6.68916Z"
        fill={props.fill}
      />
    </svg>
  );
}

export default Mobile;
