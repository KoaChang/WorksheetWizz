import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-3 rounded-[20px]  max-w-[800px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-5">
      {content}
    </p>

    <div className="flex flex-row">
      <a href="https://ibb.co/Ksnwrbr" target='_blank'>
        <img src={img} alt={name} className="w-[80px] h-[80px] rounded-full" />
      </a>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
