import Image from 'next/image';
import Check from '../../public/assets/check.svg';
import CheckWhite from '../../public/assets/Check-white.svg';

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center text-[24px] font-medium text-2xl lg:text-[42px]">Flexible plans for you</h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">No hidden fees!</p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Free Trial</h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for testing the waters</p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$ <span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt={'included'} />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt={'included'} />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt={'included'} />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>

          <button className="mt-[16px] rounded-[4px] bg-[#FFFFFF] py-[14px] text-[#4328EB] font-medium">Start Trial</button>
        </div>
        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#FFFFFF] text-[18px] lg:text-xl">Business</h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">Perfect for small businesses</p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-[#FFFFFF]">
              500$ <span className="text-[#FFFFFF]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckWhite} alt={'included'} />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckWhite} alt={'included'} />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckWhite} alt={'included'} />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckWhite} alt={'included'} />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckWhite} alt={'included'} />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>

          <button className="mt-[16px] rounded-[4px] bg-[#FFFFFF] py-[14px] text-[#4328EB] font-medium">Get Started</button>
        </div>
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Enterprise</h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for big companies</p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>

            <p className='pt-4 text-[16px] text-[#36485C]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <br /> <br />
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <button className="mt-[16px] rounded-[4px] bg-[#FFFFFF] py-[14px] text-[#4328EB] font-medium">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
