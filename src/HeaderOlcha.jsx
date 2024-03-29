import React from "react";

const HeaderOlcha = () => {

  const handleClick=()=>{}

  return (
    <div className="pt-7 pb-7">
      <div className="container flex items-center justify-between">
        <img className="mr-10 cursor-pointer"
          src="https://olcha.uz/_nuxt/logo-red.46354f18.png"
          alt="olcha.uz"
          width="102"
          height="30"
          data-v-0507f46a=""
        ></img>
        <div onClick={handleClick} className="katalog flex items-center font-medium text-[18px] border-[2px] border-[#111111] rounded-xl pt-[15px] pr-[27px] pl-[28px] pb-[15px] w-[162px] h-12 cursor-pointer">
          <div className="flex  flex-col gap-[6px] mr-[19px]">
            <div className="child w-5 h-[2px] bg-[#111111] "></div>
            <div className="child w-5 h-[2px] bg-[#111111] "></div>
            <div className="child w-5 h-[2px] bg-[#111111] "></div>
          </div>
          <p>Katalog</p>
        </div>
        <div className="flex mr-10 ml-6 bg-[#f2f2f2] items-center justify-between p-[1px] border w-full border-[#f2f2f2] rounded-xl pl-6">
          <input
            className="h-[22px] bg-transparent hover:outline-none"
            type="text"
            placeholder="Katalog bo'yicha qidirish "
          />
          <div className="bg-[#da002b] border-[#f2f2f2] rounded-xl py-[10px] px-6 w-[73.6px] h-11 cursor-pointer border-[0.8px]">
            <img
              src="https://olcha.uz/_nuxt/search.2a234c15.svg"
              alt="search-icon"
            />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <p className="icons">
            <svg
              data-v-0507f46a=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon icon1"
            >
              <rect
                data-v-0507f46a=""
                x="3.25"
                y="15"
                width="2.5"
                height="7"
                rx="1.25"
              ></rect>
              <rect
                data-v-0507f46a=""
                x="8.25"
                y="3"
                width="2.5"
                height="19"
                rx="1.25"
              ></rect>
              <rect
                data-v-0507f46a=""
                x="13.25"
                y="11"
                width="2.5"
                height="11"
                rx="1.25"
              ></rect>
              <rect
                data-v-0507f46a=""
                x="18.25"
                y="7"
                width="2.5"
                height="15"
                rx="1.25"
              ></rect>
            </svg>
            <span className="title" >Taqqoslash</span>
          </p>
          <p className="icons">
            <svg
              data-v-0507f46a=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon icon2"
              stroke="#111"
              fill="none"
            >
              <path
                data-v-0507f46a=""
                d="M21.2913 4.61183C20.7805 4.10083 20.1741 3.69547 19.5066 3.41891C18.8392 3.14235 18.1238 3 17.4013 3C16.6788 3 15.9634 3.14235 15.2959 3.41891C14.6285 3.69547 14.022 4.10083 13.5113 4.61183L12.4513 5.67183L11.3913 4.61183C10.3596 3.58013 8.96032 3.00053 7.50129 3.00053C6.04226 3.00053 4.64298 3.58013 3.61129 4.61183C2.5796 5.64352 2 7.04279 2 8.50183C2 9.96086 2.5796 11.3601 3.61129 12.3918L4.67129 13.4518L12.4513 21.2318L20.2313 13.4518L21.2913 12.3918C21.8023 11.8811 22.2076 11.2746 22.4842 10.6072C22.7608 9.93972 22.9031 9.22431 22.9031 8.50183C22.9031 7.77934 22.7608 7.06393 22.4842 6.39647C22.2076 5.72901 21.8023 5.12258 21.2913 4.61183V4.61183Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            
              ></path>
            </svg>
            <span className="title" >Sevimlilar</span>
          </p>
          <p className="icons">
            <svg
              data-v-0507f46a=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="icon icon3"
              fill="none"
              strokeWidth="1.2"
              stroke="#111"
            >
              <path
                data-v-0507f46a=""
                d="M5.625 18.75C6.48795 18.75 7.1875 18.0504 7.1875 17.1875C7.1875 16.3246 6.48795 15.625 5.625 15.625C4.76206 15.625 4.0625 16.3246 4.0625 17.1875C4.0625 18.0504 4.76206 18.75 5.625 18.75Z"
              ></path>
              <path
                data-v-0507f46a=""
                d="M15 18.75C15.8629 18.75 16.5625 18.0504 16.5625 17.1875C16.5625 16.3246 15.8629 15.625 15 15.625C14.1371 15.625 13.4375 16.3246 13.4375 17.1875C13.4375 18.0504 14.1371 18.75 15 18.75Z"
              ></path>
              <path
                data-v-0507f46a=""
                d="M3.125 5H16.7512C16.8427 5 16.9332 5.02011 17.0161 5.0589C17.099 5.0977 17.1724 5.15423 17.231 5.22451C17.2897 5.29479 17.3322 5.37709 17.3555 5.4656C17.3789 5.55412 17.3825 5.64668 17.3661 5.73674L16.0601 12.9242C16.0339 13.0683 15.958 13.1985 15.8456 13.2923C15.7332 13.3861 15.5915 13.4375 15.4451 13.4375H5.18665C5.04034 13.4375 4.89866 13.3862 4.78631 13.2924C4.67395 13.1987 4.59804 13.0686 4.57179 12.9246L2.65034 2.38788C2.6241 2.24394 2.54818 2.11377 2.43583 2.02005C2.32347 1.92633 2.1818 1.875 2.03548 1.875H0.9375"
                stroke="currentColor"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="title" >Savatcha</span>
          </p>
          <p className="icons">
            <svg
              data-v-0507f46a=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon icon1 "
            >
              <path
                data-v-0507f46a=""
                d="M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698
                6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525
                1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027
                5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994
                4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093
                21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518
                                        3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475
                                  14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504
                                  19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97
                                  22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595
                                  19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71ZM12 12C11.2089 12 10.4355
                                  11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686
                                  7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956
                                  3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16
                                  7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z"
              ></path>
            </svg>
            <span className="title" >Kirish</span>
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default HeaderOlcha;
